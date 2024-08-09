import { useState } from "react";
import "./styles.css";
import Modal from "../Modal";
import EditProfileForm from "../EditUser/index";

export default function Settings({ userData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <li className="settingsContainer">
      <p
        className="settingsCosa cursorPointer"
        onClick={() => setIsModalOpen(true)}
      >
        Editar
      </p>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EditProfileForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </li>
  );
}
