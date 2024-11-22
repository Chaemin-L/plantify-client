import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const CHAT_BASE_URL = process.env.NEXT_PUBLIC_CHAT_BASE_URL;

// SockJS를 사용하는 Stomp Client 설정
export const chatClient = new Client({
  webSocketFactory: () => new SockJS(CHAT_BASE_URL!),
  debug: (str) => console.log(str), // 디버그 로그 출력
  reconnectDelay: 5000, // 재연결 딜레이
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

chatClient.onStompError = (frame) => {
  console.error("Broker reported error:", frame.headers["message"]);
  console.error("Additional details:", frame.body);
};
