import HTTPStatus from "http-status";
import path from "path";
import Resize from "../../helper/resize";
import fs from "fs";

export async function createFile(req, res) {
  try {
    // folder upload
    const imagePath = "public/upload";
    // call class Resize
    const fileUpload = new Resize(imagePath);
    if (!req.files) {
      res.status(401).json({ error: "Please provide an image" });
    }
    const filename = await fileUpload.save(req.files[0].buffer);

    return res.status(HTTPStatus.CREATED).json({ name: filename });
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e.message);
  }
}

export async function deleteFile(req, res) {
  try {
    const imagePath = path.join(
      __dirname,
      `../../../public/upload/${req.body.filename}`
    );
    // res.json({file: imagePath})
    await fs.unlinkSync(imagePath);
    return res.status(HTTPStatus.OK).json({
      message: "remove file successfully",
      file: imagePath
    });
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
