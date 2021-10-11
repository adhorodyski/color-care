import { NextApiHandler } from "next";
// @ts-ignore
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

const handler: NextApiHandler = async (req, res) => {
    const { email, name } = req.body;

    if (!email || !name) {
        return res.status(400).json({ error: "Name and email fields are required." });
    }

    try {
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            status: "subscribed",
            email_address: email,
            merge_fields: {
                FNAME: name,
            },
        });

        return res.status(201).json({ error: "" });
    } catch (err: any) {
        return res.status(500).json({ error: err.message || err.toString() });
    }
};

export default handler;
