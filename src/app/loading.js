"use client";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className="loadingContainer">
      <ClipLoader color="#001e5d" loading size={50} />
    </div>
  );
}
