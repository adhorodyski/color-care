import { NextApiHandler } from "next";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2020-08-27" });

const handler: NextApiHandler = async (req, res) => {
    try {
        const course = req.body;

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            locale: "pl",
            allow_promotion_codes: true,
            payment_method_types: ["card", "p24"],
            success_url: `${req.headers.origin}/sukces?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}`,
            line_items: [{ price: course.stripe_price_id, quantity: 1 }],
        });

        res.status(201).json(session);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "There was a problem creating the Stripe Checkout session",
        });
    }
};

export default handler;
