"use client";
import Loading from "../loading";
import { useEffect, useState } from "react";
import { fetchAllData } from "../../util/fetch";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [users, setUsers] = useState(null);
  const [inStorage, setInStorage] = useState(true);
  const [loading, setLoading] = useState(false); // Estado de carga
  const router = useRouter(); // Usar useRouter de Next.js

  useEffect(() => {
    const fetch = async () => {
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      } else {
        fetchAllData().then((fetchedUsers) => {
          localStorage.setItem("users", JSON.stringify(fetchedUsers));
          setUsers(fetchedUsers);
        });
      }
    };

    fetch();
  }, []);

  const handleStorage = () => {
    if (inStorage) {
      localStorage.clear("users");
      setInStorage(false);
      setUsers([]);
    } else {
      fetchAllData().then((fetchedUsers) => {
        localStorage.setItem("users", JSON.stringify(fetchedUsers));
        setUsers(fetchedUsers);
      });
      setInStorage(true);
    }
  };

  const handleNavigation = (id) => {
    setLoading(true); // Activar estado de carga
    router.push(`/${id}`); // Navegar a la página del perfil
  };

  if (loading) {
    return <Loading />;
  }

  if (!users) {
    return <Loading />;
  }

  return (
    <main className="appContainer">
      <div className="homeContainer">
        <h1>Ingresa a cualquier perfil de los siguientes usuarios</h1>
        <div className="usersContainer">
          {users.map((user) => {
            return (
              <div
              key={user.id}
              className="homeUserInfo"
              onClick={() => handleNavigation(user.id)}
              style={{ cursor: 'pointer' }}
            >
                <Image
                  alt="Foto de perfil"
                  className="homeUserPicture cursorPointer"
                  src={user.photo}
                  width={80}
                  height={80}
                />
                <span className="cursorPointer">{user.name}</span>
                </div>
            );
          })}
        </div>
        <div className="buttonContainer">
          <button
            onClick={handleStorage}
            className={`actionButton cursorPointer ${
              inStorage ? "deleteData" : "getData"
            }`}
          >
            {inStorage ? "Eliminar datos" : "Generar datos"}
          </button>
        </div>
      </div>
    </main>
  );
}
