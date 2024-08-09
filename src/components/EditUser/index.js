import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles.css";
import Image from "next/image";

export default function EditProfileForm({ onClose, showSettings }) {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    front: "",
    company: { name: "", catchPhrase: "", bs: "" },
    website: "",
    email: "",
    phone: "",
    address: { city: "", street: "", zipcode: "" },
    username: "",
    aboutMe: "",
  });

  useEffect(() => {
    const id = pathname.split("/")[1];
    const storedUsers = localStorage.getItem("users");
    const parsedUsers = JSON.parse(storedUsers);
    const user = parsedUsers.find((user) => parseInt(user.id) === parseInt(id));
    setFormData({
      ...user,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const formattedValue = value.replace(/[^0-9.-]/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
      return;
    }

    setFormData((prevData) => {
      if (name === "city" || name === "street" || name === "zipcode") {
        return {
          ...prevData,
          address: {
            ...prevData.address,
            [name]: value,
          },
        };
      }

      if (name === "bs" || name === "catchPhrase") {
        return {
          ...prevData,
          company: {
            ...prevData.company,
            [name]: value,
          },
        };
      }
      if (name === "companyName") {
        return {
          ...prevData,
          company: {
            ...prevData.company,
            name: value,
          },
        };
      }

      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleFileChange = async (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        alert(
          "Tipo de archivo no soportado. Solo se permiten archivos JPG, JPEG y PNG."
        );
        return;
      }

      const formData = new FormData();
      formData.append(name, file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: data.filePath,
        }));
      } else {
        console.error("Error al subir el archivo");
      }
    }
  };

  const handleSave = () => {
    const storedUsers = localStorage.getItem("users");
    const parsedUsers = JSON.parse(storedUsers);
    const updatedUsers = parsedUsers.map((user) =>
      user.id === formData.id ? formData : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    const event = new CustomEvent("profileUpdated");
    window.dispatchEvent(event);
    onClose();
    showSettings();
  };

  return (
    <div className="editContainer">
      <h2>Editar Perfil</h2>
      <form className="fromEdit">
        <label className="itemEdit">
          Nombre
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label className="itemEdit">
          Nombre de usuario
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label className="itemEdit">
          Foto de perfil
          {formData.photo && (
            <div className="editImageContainer">
              <Image
                src={formData.photo}
                alt="Perfil"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          )}
          <input
            type="file"
            id="inputPhoto"
            name="photo"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="buttonEdit"
            onClick={() => document.getElementById("inputPhoto").click()}
          >
            Cambiar
          </button>
        </label>
        <label className="itemEdit">
          Foto de portada
          {formData.front && (
            <div className="editImageContainer">
              <Image
                src={formData.front}
                alt="Portada"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          )}
          <input
            type="file"
            id="inputFront"
            name="front"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="buttonEdit"
            onClick={() => document.getElementById("inputFront").click()}
          >
            Cambiar
          </button>
        </label>
        <label className="itemEdit">
          Empresa
          <input
            type="text"
            name="companyName"
            value={formData.company.name}
            onChange={handleInputChange}
          />
        </label>
        <label className="itemEdit">
          Estrategia
          <input
            type="text"
            name="bs"
            value={formData.company.bs}
            onChange={handleInputChange}
          />
        </label>
        <label className="itemEdit">
          Pagina web
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
          />
        </label>
        <label className="itemEdit">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label className="itemEdit">
          Telefono
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label className="itemEdit">
          Ciudad
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleInputChange}
          />
        </label>
        <label className="itemEdit">
          Calle
          <input
            type="text"
            name="street"
            value={formData.address.street}
            onChange={handleInputChange}
          />
        </label>
        <label className="itemEdit">
          Codigo postal
          <input
            type="text"
            name="zipcode"
            value={formData.address.zipcode}
            onChange={handleInputChange}
          />
        </label>
        <label className="itemEdit">
          Slogan
          <input
            type="text"
            name="catchPhrase"
            value={formData.company.catchPhrase}
            onChange={handleInputChange}
          />
        </label>

        <label className="textareaEdit">
          Sobre mi
          <textarea
            name="aboutMe"
            value={formData.aboutMe}
            onChange={handleInputChange}
          />
        </label>
        <div className="buttonEditContainer">
          <button type="button" className="buttonEdit" onClick={handleSave}>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
