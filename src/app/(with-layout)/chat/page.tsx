"use client";
import { API_ENDPOINTS } from "@/config/api";
import { useScrollToBottom } from "@/hooks/useScrollToBottom";
import clsx from "clsx";
import Image from "next/image";
import {
  ChangeEventHandler,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from "react";

interface MessageType {
  sender: "User" | "AI";
  message: string;
}

export default function Chat() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { containerRef, scrollToBottom } = useScrollToBottom();
  const socketRef = useRef<WebSocket | null>(null);

  const isLoading = messages.length === 0;

  useEffect(() => {
    const ws = new WebSocket(API_ENDPOINTS.CHAT);
    const connect = async () => {
      ws.onopen = () => {
        console.log(">> AI 채팅 서버 연결 성공!");
      };
      ws.onmessage = (event) => {
        console.log(">> 메시지 수신 ");
        const data = JSON.parse(event.data);
        setMessages((prev) => [...prev, data]);
      };

      ws.onerror = (error) => {
        console.error("WebSocket 에러: ", error);
      };

      ws.onclose = () => {
        console.log("WebSocket 연결 끊김");
      };
      socketRef.current = ws;
    };

    connect();

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
    setMessage("");
  }, [messages]);

  const handleSendMessage = () => {
    if (
      socketRef.current &&
      socketRef.current.readyState === WebSocket.OPEN &&
      message.length &&
      message.trim()
    ) {
      const data: MessageType = { sender: "User", message };
      socketRef.current.send(JSON.stringify(data));
      setMessages((prev) => [...prev, data]);
    }
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTextarea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="h-full overflow-hidden pb-32">
      <h1 className="text-t1 my-5">채팅</h1>
      <ul
        className="flex-col flex gap-3 w-full h-full overflow-auto"
        ref={containerRef as LegacyRef<HTMLUListElement>}
      >
        {isLoading ? (
          <p className="whitespace-pre">
            AI를 불러오고 있어요!{"\n"}조금만 기다려주세요 🙏
          </p>
        ) : (
          messages.map((m, idx) => (
            <li
              key={idx}
              className={clsx(
                m.sender === "User"
                  ? "bg-white text-black self-end"
                  : "text-white bg-shadow-700 ",
                "p-3 whitespace-pre-wrap rounded-2xl text-bd2 max-w-[90%] w-fit min-h-fit break-words max-h-fit "
              )}
            >
              <p className="w-full">{m.message}</p>
            </li>
          ))
        )}
      </ul>
      <div className="flex gap-4 bg-shadow-700 -mx-4 p-3 items-top fixed bottom-0 w-full max-w-[500px]">
        <textarea
          className="bg-transparent focus:outline-0 w-full text-bd2"
          name="mychat"
          value={message}
          onChange={handleTextarea}
          onKeyUp={handleKeyPress}
        />
        <button
          className="bg-accent-purple p-2 rounded-full w-fit h-fit"
          onClick={handleSendMessage}
          disabled={!socketRef.current}
        >
          <Image width={16} height={16} src="/icons/send.svg" alt="전송" />
        </button>
      </div>
    </div>
  );
}
