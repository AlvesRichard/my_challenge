import { useState } from "react";
import "./styles.css";
import Modal from "../Modal";
import EditProfileForm from "../EditUser/index";

export default function Settings({ showSettings }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <li className="settingsContainer">
      <p
        className="settingsButtonEdit cursorPointer"
        onClick={() => setIsModalOpen(true)}
      >
        Editar
      </p>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EditProfileForm showSettings={showSettings}onClose={() => setIsModalOpen(false)} />
      </Modal>
    </li>
  );
}
