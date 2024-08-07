"use client";

import { FaThumbsUp, FaRegCircle } from "react-icons/fa";
import "./styles.css";

export default function Comment({comment}) {
  return (
    <div className="commentContainer">
      <div className="commentUserInfo">
        <FaRegCircle className="cursorPointer" style={{ fontSize: 30 }} />
        <span className="cursorPointer"> Nombre Usuario</span>
      </div>
      <div className="commentBody">
        <p>{comment.body}</p>
      </div>
      <div className="commentAction">
        <FaThumbsUp />
      </div>
    </div>
  );
}
