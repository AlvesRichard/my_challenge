"use client";

import { FaThumbsUp, FaCommentDots, FaRegCircle } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";
import Comment from "../Comment";

export default function Post({post}) {
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
    <div className="postContainer">
      <div className="postHeader">
        <span className="postTitle">
          {post.title}
        </span>
      </div>
      <div className="postContent">
        <p>
          {post.body}
        </p>
      </div>
      <div className="postActions">
        <div className="postIcons">
          <FaThumbsUp /> 
          <FaCommentDots
            onClick={toggleComments}
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
              <p>No comments yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
