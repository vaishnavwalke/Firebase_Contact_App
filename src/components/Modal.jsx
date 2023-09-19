import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div
          // onClick={onClose}
          className=" grid place-items-center backdrop-blur h-screen w-screen absolute top-0 z-40"
        >
          <div className=" m-auto z-50 relative min-h-[200px] min-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className=" text-2xl" />
            </div>
            {children}
          </div>
          {/* <div
            //onClick={onClose}
            className=" backdrop-blur h-screen w-screen absolute top-0 z-40"
          /> */}
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
