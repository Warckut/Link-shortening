import express from "express";
import Controller from './controllers/Main';
import validationMiddleware from "./middleware/validationMiddleware";

const router = express.Router();

router.get("/:shortURL", validationMiddleware, async function(req, res) {
    Controller.redirect(req, res);
});

router.get("/api/createShortURL/:url", async function(req, res) {
    Controller.createShortUrl(req, res);
});

export default router;
