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
import Modal from "../Modal";
import NewPost from "../NewPost";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "@/redux/slices/postsSlice";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import {admin} from "@/util/fetch"

export default function IconsHeader() {
  const posts = useSelector((state) => state.posts.posts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const pathname = usePathname()

  const showSettings = () => {
    setIsActive((prev) => !prev);
  };

  const handleNewPost = (newPost) => {
    const postUpdated = {id:posts.length+1,...newPost}
    dispatch(addPost(postUpdated));
    updateLocalStorage(postUpdated);
    setIsModalOpen(false);
  };
  const updateLocalStorage = (postUpdated) => {
    const id = pathname.split("/")[1]
    const storedUsers = localStorage.getItem("users");
    const parsedUsers = JSON.parse(storedUsers);

    const updatedUsers = parsedUsers.map((user) => {
      if (parseInt(user.id) === parseInt(id)) {
        return { ...user, posts:[postUpdated,...posts] };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  return (
    <div className="iconsContainer">
      <BsPlusSquareFill
        style={{ color: "#8B95EE" }}
        className="cursorPointer"
        onClick={() => setIsModalOpen(true)}
        title="Nueva publicación"
      />
      <Link className="colorIcons" href={"/"} style={{display:"flex"}}>
        <PiHouseLineBold  title="Ir al inicio"/>
      </Link>
      <IoMdNotificationsOutline className="colorIcons cursorPointer" title="Notificaciones" />
      <TiMessage className="colorIcons cursorPointer" title="Casillero de mensajes"/>
      <div className="UserIcons">
        <Image
        alt={admin.name}
        src={admin.photo}
        className="pictureHeader cursorPointer"
          onClick={showSettings}
          width={30}
        height={30}
        />
        <MdKeyboardArrowDown
          className="colorIcons cursorPointer"
          title="Mostrar opciones"
          onClick={showSettings}
        />
      </div>
      {isActive ? <Settings /> : null}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewPost onSubmit={handleNewPost} />
      </Modal>
    </div>
  );
}
