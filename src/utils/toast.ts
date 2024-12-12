import { ToastType } from "@/providers/toast-provider";

// 단순 함수로 토스트 메시지를 띄우기 위한 유틸리티
export const showToast = (message: string, type: ToastType) => {
  if (typeof window !== "undefined" && (window as any).showToast) {
    (window as any).showToast(message, type);
  } else {
    console.warn("ToastManager가 렌더링되지 않았습니다.");
  }
};
