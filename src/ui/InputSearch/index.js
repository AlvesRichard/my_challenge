import { useState, useEffect } from "react";
import "./styles.css";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function InputSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setAllUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredUsers([]);
      return;
    }

    const results = allUsers.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(results);
  };

  return (
    <div className="inputSearchContainer">
      <input
        placeholder="Buscar usuario..."
        className="inputSearch"
        value={searchTerm}
        onChange={handleSearch}
      />
      <IoSearch className="iconSearch" />

      {filteredUsers.length > 0 && (
        <ul className="dropdownMenu">
          {filteredUsers.map((user) => (
            <li key={user.id} className="dropdownItem">
              <Link href={`/${user.id}`} className="dropdownLink">
                <Image
                  alt={user.name}
                  src={user.photo}
                  className="pictureSearch cursorPointer"
                  width={50}
                  height={50}
                />
                <span className="userNameSearch">{user.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
