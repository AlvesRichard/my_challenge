"use client";

import { FaThumbsUp, FaRegCircle } from "react-icons/fa";
import "./styles.css";
import Image from "next/image";
import Link from "next/link";

export default function Comment({ comment }) {
  return (
    <div className="commentContainer">
      <Link className="commentUserInfo" href={`/${comment.userId}`}>
        <Image
          alt={comment.userName}
          src={comment.userPhoto}
          className="userCommentPicture cursorPointer"
          width={30}
          height={30}
        />
        <span className="cursorPointer"> {comment.userName}</span>
      </Link>
      <div className="commentBody">
        <p>{comment.body}</p>
      </div>
      <div className="commentAction">
        <FaThumbsUp />
      </div>
    </div>
  );
}
