import { useRef } from "react";

export function useScrollToBottom() {
  const containerRef = useRef<HTMLElement>();

  const scrollToBottom = () => {
    if (!containerRef || !containerRef.current) {
      console.log("containerRef 먼저 설정해주세요");
      return;
    }
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };

  return { containerRef, scrollToBottom };
}
