import "./styles.css";

export default function PersonalInfo() {
  return (
    <div className="personalContainer">
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
    </div>
  );
}
