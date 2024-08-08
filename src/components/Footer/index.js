"use client";
import "./styles.css";
import Image from "next/image";
import storeApple from "../../../public/store_apple.png";
import storeAndroid from "../../../public/store_android.png";

export default function Footer() {
  return (
    <section className="footerContainer">
      <li className="listFooter">
        <p className="cursorPointer">
          My <strong>Challenge</strong>
        </p>
        <p className="textList cursorPointer">Términos y privacidad</p>
        <p className="textList cursorPointer">Preguntas más frecuentes</p>
        <p className="textList cursorPointer">Contacto</p>
        <p className="textList cursorPointer">Facebook</p>
        <p className="textList cursorPointer">Twitter</p>
        <p className="textList cursorPointer">Instagram</p>
      </li>

      <div className="storeImages">
        <Image
          src={storeApple}
          width={200}
          alt="Imagen del store de Apple"
          className="cursorPointer"
        />
        <Image
          src={storeAndroid}
          width={200}
          alt="Imagen del store de Android"
          className="cursorPointer"
        />
      </div>
      <p className="copyrightText">My Challenge © 2024. Todos los derechos reservados.</p>
    </section>
  );
}
