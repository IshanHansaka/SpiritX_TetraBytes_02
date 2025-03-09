"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "../services/api";

export default function AuthPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      if (isSignUp && formData.password !== formData.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const response = isSignUp ? await signUp(formData) : await signIn(formData);
      const data = response.data as { token?: string; error?: string };

      if (data.token) {
        localStorage.setItem("token", data.token);
        setSuccess(`✅ ${isSignUp ? "Sign Up" : "Login"} Successful! Redirecting...`);

        setTimeout(() => {
          router.push("/Home");
        }, 2000);
      } else {
        throw new Error(data.error || "Invalid response from server");
      }
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full  bg-gradient-to-r from-blue-400 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center bg-green-100 p-2 rounded-md">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {isSignUp && (
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          )}
          <label className="flex items-center space-x-2">
            <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
            <span>Show Password</span>
          </label>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
            {isSignUp ? "SIGN UP" : "SIGN IN"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"} 
          <span className="text-blue-500 cursor-pointer" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign in" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
}
