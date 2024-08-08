import Image from "next/image";
import retrato from "../../../../public/retrato.webp";
import portada from "../../../../public/portadas/1.jpg";
import "./styles.css";

export default function Front({userData}) {
  return (
    <section className="coverContainer">
      <Image src={userData.front} className="portadaImage" height={240}  />
      <div className="profileContent">
        <div className="profilePictureContainer">
          <Image
            src={userData.photo}
            className="profilePicture"
            width={128}
            height={128}
          />
          <h1 className="userName">{userData.name}</h1>
          <button className="followButton">SEGUIR</button>
        </div>
        <div className="stats">
          <span className="statItem">
            <strong>20</strong> Publicaciones
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
