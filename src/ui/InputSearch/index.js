import "./styles.css";
import { IoSearch } from "react-icons/io5";
export default function InputSearch() {
  return (
    <div className="inputSearchContainer cursorPointer">
        <input placeholder="Busca tu desafio..." className="inputSearch"/>
        <IoSearch className="iconSearch"/>
    </div>
  );
}
