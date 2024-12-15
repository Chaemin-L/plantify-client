declare global {
  interface Window {
    showToast?: (message: string, type: ToastType) => void;
  }
}
