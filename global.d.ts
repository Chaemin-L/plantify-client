import { ToastType } from "@/providers/toast-provider";

export {};

declare global {
  interface Window {
    showToast: (message: string, type: ToastType) => void;
  }
}
