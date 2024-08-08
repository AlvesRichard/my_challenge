"use client";

import { FaThumbsUp, FaCommentDots, FaRegCircle } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";
import Comment from "../Comment";
import { fetchComments } from "../../util/fetch";

export default function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handleComments = async () => {
    setShowComments(!showComments);
    const commentsFetched = await fetchComments(post.id);

    const storedUsers = localStorage.getItem("users");
    const users = JSON.parse(storedUsers);
    const commentWithUser = commentsFetched.map((comment) => {
      const user = users.filter(
        (user) => parseInt(user.id) === parseInt(comment.userId)
      )[0];
      return {
        ...comment,
        userPhoto: user.photo,
        userName: user.name,
      };
    });
    setComments(commentWithUser);
  };

  return (
    <div className="postContainer">
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
              comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))
            ) : (
              <p>Todavia no hay comentarios</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
