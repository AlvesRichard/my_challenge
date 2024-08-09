"use client";
import Loading from "../loading";
import { useEffect, useState } from "react";
import {fetchAllData} from "../../util/fetch";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState(null);
  const [inStorage, setInStorage] = useState(true);

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
              <Link href={`/${user.id}`} key={user.id} className="homeUserInfo">
                <Image
                  alt="Foto de perfil"
                  className="homeUserPicture cursorPointer"
                  src={user.photo}
                  width={80}
                  height={80}
                  />
                <span className="cursorPointer">{user.name}</span>
              </Link>
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
