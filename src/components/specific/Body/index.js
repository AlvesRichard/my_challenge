import UsersPreview from "@/components/common/UsersPreview";
import UserInfo from "../UserInfo";
import "./styles.css";

export default function Body() {
  return (
    <section className="bodyContainer">
      <div className="infoContainer">
        <UserInfo />
        <UserInfo isPersonalInfo={true}/>
        <UsersPreview title={"Seguidores"}/>
        <UsersPreview title={"Seguidos"}/>
      </div>

      <div>secciones</div>
    </section>
  );
}
