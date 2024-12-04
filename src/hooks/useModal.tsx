"use client";
import { useState } from "react";
import ReactDOM from "react-dom";

export function useModal(modalText: string, confirmText: string) {
  const [show, setShow] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const Modal = () => {
    if (!show) return null;

    return ReactDOM.createPortal(
      <div
        className="absolute top-0 z-10 w-full h-full flex justify-center items-center"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        onClick={closeModal}
      >
        <div
          className=" bg-shadow-800 rounded-xl p-6 text-center md:w-[400px] text-white flex flex-col gap-6 md:gap-10 pt-6 md:pt-10"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-t3">{modalText}</h1>
          <div className="w-full flex ">
            <button
              className="flex-1 text-btn1 py-4 bg-accent-red rounded-xl"
              onClick={() => {
                setConfirm(true);
                closeModal();
              }}
            >
              {confirmText}
            </button>
            <button className="flex-1 text-btn1 py-4 " onClick={closeModal}>
              취소
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return { openModal, closeModal, Modal, confirm };
}
