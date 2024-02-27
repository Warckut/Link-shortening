import express from "express";
import Controller from './controllers/Main';
import { validateShortUrlMiddleware, validateFullUrlMiddleware } from "./middleware/validationMiddleware";

const router = express.Router();

router.get("/:shortURL", validateShortUrlMiddleware, function(req, res) {
    Controller.redirect(req, res);
});

router.get("/api/createShortURL/:url", validateFullUrlMiddleware, function(req, res) {
    Controller.createShortUrl(req, res);
});

export default router;
