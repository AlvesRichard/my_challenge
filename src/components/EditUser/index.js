import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProfileForm({ onClose }) {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    // name: userData.name,
    // profilePhoto: userData.profilePhoto,
    // coverPhoto: userData.coverPhoto,
    // company: userData.company,
    // slogan: userData.slogan,
    // strategy: userData.strategy,
    // website: userData.website,
    // email: userData.email,
    // phone: userData.phone,
    // city: userData.city,
    // street: userData.street,
    // postalCode: userData.postalCode,
    // username: userData.username,
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onClose();
  };

  return (
    <div className="modalContent">
      <h2>Edit Profile</h2>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Foto de perfil:
          <input
            type="text"
            name="profilePhoto"
            value={formData.photo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Foto de portada:
          <input
            type="text"
            name="coverPhoto"
            value={formData.front}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Empresa:
          <input
            type="text"
            name="company"
            value={formData.company.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Slogan:
          <input
            type="text"
            name="slogan"
            value={formData.company.catchPhrase}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Estrategia:
          <input
            type="text"
            name="strategy"
            value={formData.company.bs}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pagina web:
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Telefono:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Ciudad:
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleInputChange}
          />
        </label>
        <label>
          calle:
          <input
            type="text"
            name="street"
            value={formData.address.street}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Codigo postal:
          <input
            type="text"
            name="postalCode"
            value={formData.address.zipcode}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Sobre mi:
          <textarea
            name="aboutMe"
            value={formData.aboutMe}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSave}>
          Save Changes
        </button>
      </form>
    </div>
  );
}
