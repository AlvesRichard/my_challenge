import Image from "next/image";
import "./styles.css";
import { useEffect, useState } from "react";

export default function Front({ userData, onFollowToggle }) {
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    const adminUser = userData.followers.some((user) => user.id === "#");
    setIsFollow(adminUser);
  }, [userData]);

  const handleClick = () => {
    setIsFollow(!isFollow);
    const event = new CustomEvent("profileUpdated");
    window.dispatchEvent(event);
    onFollowToggle();
  };

  return (
    <section className="coverContainer">
      <div className="imageContainer">
        <Image
          alt="Portada"
          src={userData.front}
          className="portadaImage"
          layout="fill"
          objectFit="cover"
          priority 
        />
      </div>
      <div className="profileContent">
        <div className="profilePictureContainer">
          <Image
            src={userData.photo}
            className="profilePicture"
            width={128}
            height={128}
            alt="Perfil"
          />
          <h1 className="userName">{userData.name}</h1>
          <button
            className={`followButton cursorPointer ${
              isFollow ? "unFollowButton" : null
            }`}
            onClick={handleClick}
          >
            {isFollow ? "DEJAR DE SEGUIR" : "SEGUIR"}
          </button>
        </div>
        <div className="stats">
          <span className="statItem">
            <strong>{userData.posts.length}</strong> Publicaciones
          </span>
          <span className="statItem">
            <strong>{userData.followers.length}</strong> Seguidores
          </span>
          <span className="statItem">
            <strong>{userData.followed.length}</strong> Seguidos
          </span>
        </div>
      </div>
    </section>
  );
}
