import { Router } from "express";

import * as uploadController from "./upload.controllers";
import { authJwt } from "../../services/auth.services";
import multer from "multer";

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024
  }
});

const routes = new Router();

routes.post(
  "/",
  // authJwt,
  upload.any(),
  uploadController.createFile
);
// routes.patch(
//   '/:id',
//   authJwt,
//   uploadController.updateFile,
// );
routes.delete("/", authJwt, uploadController.deleteFile);

export default routes;
