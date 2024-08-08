import Link from "next/link";
import "./styles.css";
import Image from "next/image";

export default function UsersPreview({ title, users }) {
  return (
    <section className="usersPreviewContainer">
      <div className="usersPreviewTexts">
        <span>
          {title} ({users.length})
        </span>
        <span className="cursorPointer" style={{ fontSize: 11 }}>
          Ver todos
        </span>
      </div>
      <div className="photoUsers">
        {users.map((user, index) => {
          if (index < 20) {
            return (
              <Link key={user.id} href={`/${user.id}`}>
                <Image
                  alt={user.name}
                  src={user.photo}
                  className="connectionsPicture cursorPointer"
                  width={50}
                  height={50}
                />
              </Link>
            );
          }
        })}
      </div>
    </section>
  );
}
