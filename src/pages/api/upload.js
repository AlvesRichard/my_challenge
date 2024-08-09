import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = formidable({
    uploadDir: path.join(process.cwd(), "public/upload"),
    keepExtensions: true,
    multiples: false,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error al parsear el archivo", err);
      return res.status(500).json({ message: "Error al parsear el archivo" });
    }

    const file = files.photo || files.front;

    if (!file) {
      return res.status(400).json({ error: "No se recibio ningun archivo." });
    }

    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file[0].mimetype)) {
      return res
        .status(400)
        .json({
          error:
            "Tipo de archivo no soportado. Solo se permiten archivos JPG, JPEG y PNG.",
        });
    }

    try {
      const filename = file[0].newFilename;
      return res.status(201).json({ filePath: `/upload/${filename}` });
    } catch (error) {
      console.log("Ocurrio un error: ", error);
      return res.status(500).json({ message: "Fallo" });
    }
  });
}
