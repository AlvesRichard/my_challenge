"use client";
import "./styles.css";
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

      <div>stores</div>
      <div>My Challenge © 2024. Todos los derechos reservados.</div>
    </section>
  );
}
