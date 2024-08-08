"use client";
import UsersPreview from "@/components/UsersPreview";
import UserInfo from "../UserInfo";
import { BsPlusSquareFill } from "react-icons/bs";
import "./styles.css";
import { useEffect, useState } from "react";
import Post from "../Post";
import { fetchPosts } from "../../util/fetch";
import Modal from "../Modal";

export default function Body({ userData }) {
  const [posts, setPosts] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      fetchPosts(userData.id).then((fetchedPosts) => {
        setPosts(fetchedPosts);
      });
    };

    fetch();
  }, []);
  return (
    <section className="bodyContainer">
      <div className="infoContainer">
        <UserInfo userData={userData} />
        <UserInfo isPersonalInfo={true} userData={userData} />
        <UsersPreview title={"Seguidores"} users={userData.followers} />
        <UsersPreview title={"Seguidos"} users={userData.followed} />
      </div>

      <div className="postsListContainer">
        <div className="topPosts">
          <span className="principalTitlePosts">Publicaciones</span>
          <BsPlusSquareFill
            style={{ color: "#8B95EE", fontSize: 35 }}
            onClick={() => setIsModalOpen(true)}
            className="cursorPointer"
            title="Nueva publicación"
          />
        </div>
        {posts ? (
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        HOLA
      </Modal>
    </section>
  );
}
