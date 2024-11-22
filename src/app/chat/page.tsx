"use client";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import clsx from "clsx";
import { useScrollToBottom } from "@/lib/_hooks/useScrollToBottom";
import { chatClient } from "@/lib/chatClient";

interface MessageType {
  sender: "User" | "AI";
  message: string;
}

export default function Chat() {
  const [message, setMessage] = useState<string>("");
  const [chatList, setChatList] = useState<MessageType[]>([]);
  const { containerRef, scrollToBottom } = useScrollToBottom();

  useEffect(() => {
    scrollToBottom();
    setMessage("");
  }, [chatList]);

  useEffect(() => {
    chatClient.onConnect = (frame) => {
      if (chatClient.connected)
        chatClient.subscribe("/topic/public", (message) => {
          const messageData = JSON.parse(message.body);
          console.log("Message received:", messageData);
          setChatList((prev) => [...prev, messageData]);
        });
    };
    chatClient.activate();
    return () => {
      chatClient.deactivate();
    };
  }, [chatClient]);

  const sendMessage = () => {
    if (message.trim().length != 0 && chatClient.connected) {
      chatClient.publish({
        destination: "/app/chat.sendMessage",
        body: JSON.stringify({ sender: "User", message }),
      });

      setMessage("");
    }
  };

  const handleTextarea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  const handleEnter: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    e.preventDefault();
    if (!e.shiftKey && e.key === "Enter") sendMessage();
  };

  return (
    <div className="h-full overflow-hidden pb-32">
      <h1 className="text-t1 my-5">채팅</h1>
      <ul
        className="flex-col flex gap-3 w-full h-full overflow-auto"
        ref={containerRef}
      >
        {chatList.map((m, idx) => (
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
        ))}
      </ul>
      <div className="flex gap-4 bg-shadow-800 -mx-4 p-3 items-top fixed bottom-0 w-full max-w-[500px]">
        <textarea
          className="bg-transparent focus:outline-0 w-full text-bd2"
          name="mychat"
          value={message}
          onChange={handleTextarea}
          onKeyUp={handleEnter}
        />
        <button
          className="bg-accent-purple p-2 rounded-full w-fit h-fit"
          onClick={sendMessage}
        >
          <Image width={16} height={16} src="/icons/send.svg" alt="전송" />
        </button>
      </div>
    </div>
  );
}
