import { useCallback, useEffect, useRef, useState } from "react";

interface ChatMessage {
  sender: "AI" | "User";
  message: string;
}

export function useWebSocket(url: string) {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  const connect = useCallback(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onopen = () => {
      console.log("WebSocket 연결 성공");
      setIsConnected(true);
    };

    socketRef.current.onmessage = (event) => {
      const message: ChatMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socketRef.current.onclose = () => {
      console.log("WebSocket 연결 종료");
      setIsConnected(false);
      setTimeout(connect, 3000);
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket 오류:", error);
    };
  }, [url]);

  useEffect(() => {
    connect();
    return () => {
      socketRef.current?.close();
    };
  }, [connect]);

  const sendMessage = useCallback((message: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      const chatMessage: ChatMessage = {
        sender: "User",
        message,
      };
      socketRef.current.send(JSON.stringify(chatMessage));
    } else {
      console.error("WebSocket이 연결되어 있지 않습니다.");
    }
  }, []);

  return { isConnected, messages, sendMessage };
}
