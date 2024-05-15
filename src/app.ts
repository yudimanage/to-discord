import express from "express";
import { config } from "dotenv";
import { PostDiscord } from "./function";
config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/yongs/donate", (req, res) => {
    PostDiscord(
        req.body,
        "https://discord.com/api/webhooks/1240162835284103220/tEzwoacyBsPEc_Q5w7tVPtQETZhndH1t05B599mDvoCE1wHIWr-j-oTz4rjibC_PJ_-S"
    );
    res.sendStatus(200);
});

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.listen(3000, () => console.log("Server is running!!"));

export default app;
