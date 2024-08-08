import "./styles.css";
import { BsPlusSquareFill } from "react-icons/bs";
import { PiHouseLineBold } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiMessage } from "react-icons/ti";
import { FaRegCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import Settings from "../Settings";
import Link from "next/link";

export default function IconsHeader() {
  const [isActive, setIsActive] = useState(false);
  const showSettings = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className="iconsContainer">
      <BsPlusSquareFill
        style={{ color: "#8B95EE" }}
        className="cursorPointer"
        title="Nueva publicación"
      />
      <Link className="colorIcons" href={"/"} style={{display:"flex"}}>
        <PiHouseLineBold  title="Ir al inicio"/>
      </Link>
      <IoMdNotificationsOutline className="colorIcons cursorPointer" title="Notificaciones" />
      <TiMessage className="colorIcons cursorPointer" title="Casillero de mensajes"/>
      <div className="UserIcons">
        <FaRegCircle />
        <MdKeyboardArrowDown
          className="colorIcons cursorPointer"
          title="Mostrar opciones"
          onClick={showSettings}
        />
      </div>
      {isActive ? <Settings /> : null}
    </div>
  );
}
