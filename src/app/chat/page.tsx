"use client";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import clsx from "clsx";
import { useScrollToBottom } from "@/lib/useScrollToBottom";

interface MessageType {
  isMe: boolean;
  message: string;
}

const dummy: MessageType[] = new Array(10).fill({
  isMe: false,
  message:
    "첫만남은 너무 어려워 계획대로 되는 게 없어서\n첫만남은 너무 어려워 랄라라라랄ㄹ",
});

export default function Chat() {
  const [message, setMessage] = useState<string>("");
  const [chatList, setChatList] = useState(dummy);
  const { containerRef, scrollToBottom } = useScrollToBottom();

  useEffect(() => {
    scrollToBottom();
    setMessage("");
    console.log("useEffect");
  }, [chatList]);

  const handleTextarea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  const handleEnter: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) handleSubmit();
  };

  const handleSubmit = () => {
    if (message.trim().length) {
      setChatList((chatList) => [
        ...chatList,
        {
          isMe: true,
          message,
        },
      ]);
      setMessage("");
    }
  };

  return (
    <div className="h-full overflow-hidden pb-32">
      <h1 className="text-t1 my-5">AI 채팅</h1>
      <ul
        className="flex-col flex gap-3 w-full h-full overflow-auto"
        ref={containerRef}
      >
        {chatList.map((m, idx) => (
          <li
            key={idx}
            className={clsx(
              m.isMe
                ? "bg-white text-black self-end"
                : "text-white bg-shadow-700",
              "p-3 whitespace-pre-line rounded-md text-bd2 max-w-[90%]"
            )}
          >
            {m.message}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 bg-shadow-800 -mx-4 p-5 items-top fixed bottom-0 w-full max-w-[500px]">
        <textarea
          className="bg-transparent focus:outline-0 w-full text-bd2"
          name="mychat"
          value={message}
          onChange={handleTextarea}
          onKeyUp={handleEnter}
        />
        <button
          className="bg-accent-purple p-2 rounded-full w-fit h-fit"
          onClick={handleSubmit}
        >
          <Image width={16} height={16} src="/icons/send.svg" alt="전송" />
        </button>
      </div>
    </div>
  );
}
