import { useState } from "react";
import "./style.css";

export default function NewPost({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="newPostContainer">
      <input
        className="newPostInput"
        type="text"
        id="title"
        maxLength="140"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Escribe el título aquí"
        required
      />
      <textarea
        className="newPostInput"
        id="body"
        maxLength="500"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Escribe el contenido de la publiación aquí"
        rows="5"
        required
      />
      <button type="submit" className="newPostButton">
        Crear
      </button>
    </form>
  );
}
