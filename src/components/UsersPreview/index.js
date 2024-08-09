import Link from "next/link";
import "./styles.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";

export default function UsersPreview({ title, users }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="usersPreviewContainer">
      <div className="usersPreviewTexts">
        <span>
          {title} ({users.length})
        </span>
        <span
          className="cursorPointer"
          style={{ fontSize: 11 }}
          onClick={() => setIsModalOpen(true)}
        >
          Ver todos
        </span>
      </div>
      <div className="photoUsers">
        {users.map((user, index) => {
          if (index < 20) {
            return (
              <Link key={user.id} href={`/${user.id}`}>
                <Image
                  alt={user.name}
                  src={user.photo}
                  className="connectionsPicture cursorPointer"
                  width={50}
                  height={50}
                />
              </Link>
            );
          }
        })}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="allConnectionsPicturesContainer">
          {users.map((user, index) => {
            return (
              <Link key={user.id} href={`/${user.id}`} className="connectionLink ">
                <Image
                  alt={user.name}
                  src={user.photo}
                  className="allConnectionsPicture cursorPointer"
                  width={90}
                  height={90}
                />
                <span>{user.name}</span>
              </Link>
            );
          })}
        </div>
      </Modal>
    </section>
  );
}
