import UsersPreview from "@/components/common/UsersPreview";
import PersonalInfo from "../PersonalInfo";
import "./styles.css";

export default function Body() {
  return (
    <section className="bodyContainer">
      <div className="infoContainer">
        <PersonalInfo />
        <UsersPreview title={"Seguidores"}/>
        <UsersPreview title={"Seguidos"}/>
      </div>

      <div>secciones</div>
    </section>
  );
}
