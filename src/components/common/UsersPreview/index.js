import "./styles.css";
import { FaRegCircle } from "react-icons/fa";

export default function UsersPreview({ title,count=0 }) {
  const icons = Array.from({ length: 100 });
  return (
    <section className="usersPreviewContainer">
      <div className="usersPreviewTexts">
        <span>{title} ({count})</span>
        <span className="cursorPointer" style={{ fontSize: 11 }}>
          Ver todos
        </span>
      </div>
      <div className="photoUsers">
        {icons.map((_, index) => {
          if (index < 20) {
            return <FaRegCircle key={index} className="cursorPointer" style={{fontSize:50}}/>;
          }
        })}
      </div>
    </section>
  );
}
