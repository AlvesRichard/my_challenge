"use client";
import UsersPreview from "@/components/common/UsersPreview";
import UserInfo from "../UserInfo";
import { BsPlusSquareFill } from "react-icons/bs";
import "./styles.css";
import { useState } from "react";
import Post from "../Post";

export default function Body({userData}) {
  const [showComments, setShowComments] = useState(false);
  const comments = [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      postId: 1,
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
  ];
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  console.log(userData)
  return (
    <section className="bodyContainer">
      <div className="infoContainer">
        <UserInfo userData={userData}/>
        <UserInfo isPersonalInfo={true} userData={userData}/>
        <UsersPreview title={"Seguidores"} users={userData.followers}/>
        <UsersPreview title={"Seguidos"} users={userData.followed}/>
      </div>

      <div className="postsListContainer">
        <div className="topPosts">
          <span className="principalTitlePosts">Publicaciones</span>
          <BsPlusSquareFill
            style={{ color: "#8B95EE", fontSize:35 }}
            className="cursorPointer"
            title="Nueva publicación"
          />
        </div>
        {userData.posts.map(post=>{
          return <Post post={post} />
        })}
      </div>
    </section>
  );
}
