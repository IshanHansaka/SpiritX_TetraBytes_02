"use client";

import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // useCallback ensures that the function remains stable and doesn't change on every render
  const closeModal = useCallback(() => {
    router.back();
  }, [router]); // Only change when router changes

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    // Add the event listener on mount
    document.addEventListener("keydown", handleEscape);

    // Clean up the event listener on unmount
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeModal]); // Add closeModal to dependencies to prevent ESLint warning

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}