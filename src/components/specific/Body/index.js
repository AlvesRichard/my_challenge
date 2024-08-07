"use client";
import UsersPreview from "@/components/common/UsersPreview";
import UserInfo from "../UserInfo";
import { FaThumbsUp, FaCommentDots } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";
import Post from "../Post";

export default function Body() {
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
  return (
    <section className="bodyContainer">
      <div className="infoContainer">
        <UserInfo />
        <UserInfo isPersonalInfo={true} />
        <UsersPreview title={"Seguidores"} />
        <UsersPreview title={"Seguidos"} />
      </div>

      <div className="postsListContainer">
        <span className="principalTitlePosts">Posts</span>
        <Post />
        <Post />
      </div>
    </section>
  );
}
