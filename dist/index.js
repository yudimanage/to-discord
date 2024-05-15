"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const axios_1 = __importDefault(require("axios"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.post("/", (req, res) => {
    axios_1.default.post(process.env.DISCORD_URL, {
        content: req.body,
        embeds: null,
        username: "Bot",
        avatar_url: "https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg",
        attachments: [],
    });
    res.sendStatus(200);
});
app.listen(3000, () => console.log("Server is running!"));
