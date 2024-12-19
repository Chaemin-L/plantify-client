"use client";
import { API_ENDPOINTS } from "@/config/api";
import { useEffect, useState } from "react";

export default function PaymentNotification() {
  const [messages, setMessages] = useState<string[]>([]);

  const isEmpty = messages.length === 0;
  useEffect(() => {
    const eventSource = new EventSource(API_ENDPOINTS.NOTIFICATION);

    eventSource.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    eventSource.onerror = () => {
      console.error("SSE connection error");
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  if (isEmpty) return null;
  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
