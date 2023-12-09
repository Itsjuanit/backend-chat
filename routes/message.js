import express from "express";
import controller from "../controllers/message.js";

let router = express.Router();

router.post("/save", controller.save);
router.get("/messages", controller.getMessages);

export default router;
