import "./styles.css";

export default function UserInfo({ isPersonalInfo }) {
  return (
    <div className="personalContainer">
      {isPersonalInfo ? (
        <>
          <span>Datos personales</span>
          <div className="infoCard">
            <div className="infoItem">
              <label>Ciudad: </label>
              <p>Buenos Aires</p>
            </div>
            <div className="infoItem">
              <label>Pais: </label>
              <p>Argentina</p>
            </div>
            <div className="infoItem">
              <label>Sitio web: </label>
              <p>www.example.com</p>
            </div>
            <div className="infoItem">
              <label>Email: </label>
              <p>example@example.com</p>
            </div>
            <div className="infoItem">
              <label>Pais de nacimiento: </label>
              <p>Uruguay</p>
            </div>
            <div className="infoItem">
              <label>Ciudad: </label>
              <p>Buenos Aires</p>
            </div>
            <div className="infoItem">
              <label>Ciudad: </label>
              <p>Buenos Aires</p>
            </div>
          </div>
        </>
      ) : (
        <div className="description">
          <span>Sobre mi</span>
          <p className="descriptionText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      )}
    </div>
  );
}
