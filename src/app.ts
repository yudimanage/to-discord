import express from "express";
import axios from "axios";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
    const { donator_name }: { donator_name?: string } = req.body;

    if (!donator_name) {
        const { email_supporter, supporter, amount, currency, message }: SociabuzzType = req.body;
        axios.post(process.env.DISCORD_URL as string, {
            content: `||${email_supporter}||`,
            embeds: [
                {
                    title: `${currency}${amount} from ${supporter}`,
                    description: message,
                    color: 7785489,
                },
            ],
            username: "SociaBuzz",
            avatar_url:
                "https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg",
            attachments: [],
        });
    } else {
        const { donator_email, donator_name, amount_raw, message }: SaweriaType = req.body;
        axios.post(process.env.DISCORD_URL as string, {
            content: `||${donator_email}||`,
            embeds: [
                {
                    title: `IDR${amount_raw} from ${donator_name}`,
                    description: message,
                    color: 16428587,
                },
            ],
            username: "Saweria",
            avatar_url:
                "https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg",
            attachments: [],
        });
    }

    res.sendStatus(200);
});

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.listen(3000, () => console.log("Server is running!!"));

export default app;

type SociabuzzType = {
    id: string;
    amount: number;
    currency: string;
    amount_settled: number;
    currency_settled: string;
    media_type: string;
    media_url: string;
    supporter: string;
    email_supporter: string;
    message: string;
    created_at: string;
};

type SaweriaType = {
    version: string;
    created_at: string;
    id: string;
    type: string;
    amount_raw: number;
    cut: number;
    donator_name: string;
    donator_email: string;
    donator_is_user: false;
    message: string;
};
