'use client'
import InputSearch from "@/components/ui/InputSearch";
import "./styles.css";
import IconsHeader from "@/components/specific/IconsHeader";
export default function Header() {
  return (
    <section className="headerContainer">
      <p className="cursorPointer">
        My <strong>Challenge</strong>
      </p>
      <InputSearch />
      <IconsHeader />
    </section>
  );
}
