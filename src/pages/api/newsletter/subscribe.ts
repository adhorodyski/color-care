import { NextApiHandler } from "next";
// @ts-ignore
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

const handler: NextApiHandler = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email field is required." });
    }

    try {
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            status: "subscribed",
            email_address: email,
        });

        return res.status(201).json({ error: "" });
    } catch (err: any) {
        return res.status(500).json({ error: err.message || err.toString() });
    }
};

export default handler;
