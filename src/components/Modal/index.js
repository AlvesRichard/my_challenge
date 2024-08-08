import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "./styles.css";

export default function Modal({ isOpen, onClose, children }) {

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modalContainer">
        <div className="modalContent">
          <div className="modalClose">
            <IoClose onClick={onClose} style={{fontSize:25}}/>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
