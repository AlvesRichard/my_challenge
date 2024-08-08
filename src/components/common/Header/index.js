"use client";
import InputSearch from "@/components/ui/InputSearch";
import "./styles.css";
import IconsHeader from "@/components/specific/IconsHeader";
import Link from "next/link";
export default function Header() {
  return (
    <section className="headerContainer">
      <Link className="headerItem" href={"/"}>
        My <strong>Challenge</strong>
      </Link>
      <div className="headerItem">
        <InputSearch />
      </div>
      <div className="headerItem">
        <IconsHeader />
      </div>
    </section>
  );
}
