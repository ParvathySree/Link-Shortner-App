import express from "express";
import { addAndShortenURL, redirectToOriginalUrl } from "../controllers/urlController.js";

const urlRouter = express.Router();


urlRouter.post("/get-url",addAndShortenURL);
urlRouter.get('/:shortId', redirectToOriginalUrl);

export default urlRouter;