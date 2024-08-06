import Image from "next/image";
import retrato from "../../../../public/retrato.webp";
import portada from "../../../../public/portada.jpg";
import "./styles.css";

export default function Front() {
  return (
    <section className="coverContainer">
      <Image src={portada} className="portadaImage" height={240} />
      <div className="profileContent">
        <div className="profilePictureContainer">
          <Image
            src={retrato}
            className="profilePicture"
            width={128}
            height={128}
          />
          <h1 className="userName">Jhon Doe</h1>
          <button className="followButton">SEGUIR</button>
        </div>
        <div className="stats">
          <span className="statItem">
            <strong>20</strong> Publicaciones
          </span>
          <span className="statItem">
            <strong>300</strong> Seguidores
          </span>
          <span className="statItem">
            <strong>180</strong> Seguidos
          </span>
        </div>
      </div>
    </section>
  );
}
