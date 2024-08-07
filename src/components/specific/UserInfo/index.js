import "./styles.css";

export default function UserInfo({ isPersonalInfo, userData }) {
  return (
    <div className="personalContainer">
      {isPersonalInfo ? (
        <>
          <span>Datos personales</span>
          <div className="infoCard">
            <div className="infoItem">
              <label>Empresa: </label>
              <p>{userData.company.name}</p>
            </div>
            <div className="infoItem">
              <label>Slogan: </label>
              <p>{userData.company.catchPhrase}</p>
            </div>{" "}
            <div className="infoItem">
              <label>Estrategia: </label>
              <p>{userData.company.bs}</p>
            </div>
            <div className="infoItem">
              <label>Sitio web: </label>
              <p>{userData.website}</p>
            </div>
            <div className="infoItem">
              <label>Email: </label>
              <p>{userData.email}</p>
            </div>
            <div className="infoItem">
              <label>Telefono: </label>
              <p>{userData.phone}</p>
            </div>
            <div className="infoItem">
              <label>Ciudad: </label>
              <p>{userData.address.city}</p>
            </div>
            <div className="infoItem">
              <label>Calle: </label>
              <p>{userData.address.street}</p>
            </div>
            <div className="infoItem">
              <label>Codigo postal: </label>
              <p>{userData.address.zipcode}</p>
            </div>
            <div className="infoItem">
              <label>Usuario: </label>
              <p>{userData.username}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="description">
          <span>Sobre mi</span>
          <p className="descriptionText">
            {userData.aboutMe}
          </p>
        </div>
      )}
    </div>
  );
}
