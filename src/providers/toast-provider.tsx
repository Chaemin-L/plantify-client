"use client";

import { useEffect, useState } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastMessageType {
  id: number;
  message: string;
  type: ToastType;
}
export default function ToastProvider() {
  const [toasts, setToasts] = useState<ToastMessageType[]>([]);

  const addToast = (message: string, type: ToastType) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2000);
  };

  useEffect(() => {
    (window as any).showToast = addToast;
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 space-y-1">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="py-2 px-4 rounded-full bg-shadow-50 text-black"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
