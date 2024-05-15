import axios from "axios";

export function PostDiscord(body: any, url: string) {
    const { donator_name }: { donator_name?: string } = body;

    if (!donator_name) {
        const { email_supporter, supporter, amount, currency, message }: SociabuzzType = body;
        axios.post(url, {
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
        const { donator_email, donator_name, amount_raw, message }: SaweriaType = body;
        axios.post(url, {
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
}

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
