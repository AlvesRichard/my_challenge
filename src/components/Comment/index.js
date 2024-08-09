"use client";
import "./styles.css";
import Image from "next/image";
import Link from "next/link";

export default function Comment({ comment }) {
  return (
    <>
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
    </>
  );
}
