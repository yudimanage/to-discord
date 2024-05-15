import express from "express";
import axios from "axios";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
    axios.post(process.env.DISCORD_URL as string, {
        content: JSON.stringify(req.body),
        embeds: null,
        username: "Bot",
        avatar_url:
            "https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg",
        attachments: [],
    });

    res.sendStatus(200);
});

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.listen(3000, () => console.log("Server is running!!"));

export default app;
