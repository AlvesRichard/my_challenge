"use client";

import { FaThumbsUp, FaCommentDots, FaRegCircle } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";
import Comment from "../Comment";
import { usePathname } from "next/navigation";
import { admin } from "@/util/fetch";

export default function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const pathname = usePathname();

  const handleComments = async () => {
    setShowComments(!showComments);
    const storedUsers = localStorage.getItem("users");
    const users = JSON.parse(storedUsers);

    const user = users.find(
      (user) => user.id === parseInt(pathname.split("/")[1])
    );
    const currentPost = user.posts.find((p) => p.id === post.id);
    setComments(currentPost.comments || []);
  };

  const handleNewComment = (e) => {
    if(newComment === "")return
    if (e.key === "Enter" && newComment.trim() !== "") {
      const newCommentModificated = {
        userId: admin.id,
        userName: admin.name,
        userPhoto: admin.photo,
        body: newComment,
      };

      const storedUsers = localStorage.getItem("users");
      const users = JSON.parse(storedUsers);

      const id = pathname.split("/")[1];

      const user = users.find((user) => parseInt(user.id) === parseInt(id));

      if (user) {
        let currentPost = user.posts?.find(
          (userPost) => userPost.id === post.id
        );

        if (currentPost) {
          if (currentPost.comments) {
            currentPost.comments.push(newCommentModificated);
          } else {
            currentPost.comments = [newCommentModificated];
          }
          user.posts = user.posts.map((userPost) =>
            userPost.id === currentPost.id ? currentPost : userPost
          );
        } else {
          alert("Error al guardar el comentario.");
        }

        const usersUpdated = users.map((u) => (u.id === user.id ? user : u));
        localStorage.setItem("users", JSON.stringify(usersUpdated));
        setComments(currentPost.comments);
        setNewComment("")
      } else {
        console.log("El usuario no existe.");
      }
    }
  };

  return (
    <>
      <div className="postHeader">
        <span className="postTitle">{post.title}</span>
      </div>
      <div className="postContent">
        <p>{post.body}</p>
      </div>
      <div className="postActions">
        <div className="postIcons">
          <FaCommentDots
            onClick={handleComments}
            style={{ cursor: "pointer" }}
          />
        </div>
        {showComments && (
          <div className="postComments">
            {comments.length > 0 ? (
              comments.map((comment, index) => {
                return (
                  <div key={index} className="commentContainer">
                    <Comment comment={comment} />
                  </div>
                );
              })
            ) : (
              <p className="noYetComments">Todavia no hay comentarios</p>
            )}
            <input
              type="text"
              placeholder="Escribe un comentario"
              className="newCommnetInput"
              id="comment"
              maxLength="500"
              value={newComment}
              onKeyDown={(e) => handleNewComment(e)}
              onChange={(e) => setNewComment(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
}
