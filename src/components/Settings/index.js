import { useState } from "react";
import "./styles.css";
import Modal from "../Modal";
import EditProfileForm from "../EditUser/index";

export default function Settings({ showSettings }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose=()=>{
    showSettings()
    setIsModalOpen(false)
  }

  return (
    <li className="settingsContainer">
      <p
        className="settingsButtonEdit cursorPointer"
        onClick={() => setIsModalOpen(true)}
      >
        Editar
      </p>
      <Modal isOpen={isModalOpen} showSettings={showSettings} onClose={handleClose}>
        <EditProfileForm showSettings={showSettings}onClose={() => setIsModalOpen(false)} />
      </Modal>
    </li>
  );
}
