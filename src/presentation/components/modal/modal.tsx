import React, { ReactNode } from "react";
import "./Modal.css";

type Props = {
  open: boolean,
  onClickClose: () => void,
  children: ReactNode
}

const Modal:React.FC<Props> = (props: Props) => {
  const { open, onClickClose, children } = props

  return (
    <>
      {open && (
        <div className="modal">
          <div onClick={onClickClose} className="overlay"></div>
          <div className="modal-content">
            {children}
            <button className="close-modal" onClick={onClickClose}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal