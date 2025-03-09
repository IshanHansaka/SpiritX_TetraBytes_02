'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const backendURL = 'http://localhost:5000';

type Message = {
  role: 'AI' | 'User';
  message: string;
};

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'AI',
      message: 'Hello!👋 What would you like to discover about Spirit11?',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToEnd = () => {
    setTimeout(() => {
      const chatMessages = document.querySelector('.chat-messages');
      chatMessages?.scrollTo({
        top: chatMessages.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);
  };

  const sendPrompt = async (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() === '') return;

    setLoading(true);
    setMessages((prevMessages) => [...prevMessages, { role: 'User', message }]);
    scrollToEnd();

    const userMessage = message;
    setMessage('');

    try {
      const res = await axios.post(
        `${backendURL}/chat`,
        {
          message: userMessage,
          model: 'text-davinci-003',
          prompt: '',
          temperature: 0.1,
          max_tokens: 512,
          top_p: 1.0,
          frequency_penalty: 0,
          presence_penalty: 0.6,
          stop: ['User:', 'AI:'],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.data && res.data.message) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'AI', message: res.data.message },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'AI', message: 'Error: No message returned from server' },
        ]);
      }
    } catch (error) {
      console.error('Error details:', error);
      if (axios.isAxiosError(error)) {
        console.error('Axios Error details:', error.response || error.message);
      } else {
        console.error('Unexpected Error details:', error);
      }
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'AI', message: 'Sorry, unable to reach the server.' },
      ]);
    } finally {
      setLoading(false);
      scrollToEnd();
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-full px-4 mx-auto text-black md:max-w-xl">
      <h1 className="my-8 text-3xl font-bold text-center text-black md:text-5xl">
        Spiriter AI Assistant
      </h1>
      <div className="max-w-full px-4 mx-auto md:max-w-xl">
        <div className="bg-white shadow-2xl border-4 border-gray-100 rounded-lg overflow-hidden h-[65vh] md:h-[75vh] flex flex-col justify-between">
          <div className="h-full overflow-auto chat-messages">
            {messages.map((message, i) => (
              <div key={i} className="flex flex-col p-2 md:p-4">
                {message.role === 'AI' ? (
                  <div className="pr-4 md:pr-8 mr-auto">
                    <div className="p-2 mt-1 text-xs text-gray-700 bg-gray-200 rounded-lg md:text-sm">
                      {message.message}
                    </div>
                  </div>
                ) : (
                  <div className="pl-4 md:pl-8 ml-auto">
                    <div className="p-2 mt-1 text-xs text-white bg-blue-400 rounded-lg md:text-sm">
                      {message.message}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="p-4 ml-10 mr-auto">
                <span className="loader"></span>
              </div>
            )}
          </div>
          <form onSubmit={sendPrompt}>
            <div className="flex items-center w-full p-4">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder="Type here..."
                className="w-full p-2 text-xs text-black bg-gray-100 border rounded-md shadow md:text-sm md:p-3 border-white/40 grow"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center flex-none bg-gray-700 ml-2 rounded-full w-8 h-8 md:w-10 md:h-10"
              >
                <span className="text-white w-5 h-5 md:w-7 md:h-7 ml-1">
                  📤
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
