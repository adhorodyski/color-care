import { NextApiHandler } from "next";
import { Stripe } from "stripe";
import { client } from "lib/apollo";
import { GET_COURSE } from "lib/queries";
import { mapToArray } from "lib/utils";
import { Product } from "use-shopping-cart/core";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2020-08-27" });

const handler: NextApiHandler = async (req, res) => {
    try {
        const items = req.body;

        const getCourse = async (id: string) => {
            const { data } = await client.query({ query: GET_COURSE, variables: { id } });

            return {
                currency: "pln",
                unit_amount: data.course.price,
                product_data: {
                    name: data.course.name,
                    description: data.course.description,
                    images: data.course.images.map((img: any) => img.url),
                    metadata: {
                        id: data.course.id,
                    },
                },
            };
        };

        const line_items = await Promise.all(
            mapToArray<Product>(items).map(async (item: Product) => ({
                quantity: 1,
                price_data: await getCourse(item.id),
            })),
        );

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            locale: "pl",
            payment_method_types: ["card", "p24"],
            success_url: `${req.headers.origin}/sukces?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/koszyk`,
            line_items,
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
