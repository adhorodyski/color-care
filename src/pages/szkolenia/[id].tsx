import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Stripe } from "stripe";
import Head from "next/head";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { GET_COURSE, GET_COURSES } from "lib/queries";
import { useCourse, useFetch } from "lib/hooks";
import { formatCurrencyString } from "lib/utils";
import { Course } from "lib/models";
import { client } from "lib/apollo";
import { stripe } from "lib/stripe";

interface Props {
    course: Course;
    price: Stripe.Price;
    source: MDXRemoteSerializeResult;
}

const Index: NextPage<Props> = ({ course, price, source }) => {
    const { typeLabels, difficultyLabels } = useCourse();
    const { fetchPostJSON } = useFetch();

    const handleCheckout = async () => {
        const session = await fetchPostJSON("/api/checkout-sessions/course", course);

        if (!session) {
            console.error(`Failed creating a Stripe Checkout session.`);
        }

        await stripe?.redirectToCheckout({ sessionId: session.id });
    };

    return (
        <>
            <Head>
                <title>color-care | {course.name}</title>
            </Head>
            <section className="flex flex-col xl:flex-row gap-16 mb-24">
                <Image
                    src={course.images[0].url}
                    alt={course.name}
                    height={600}
                    width={600}
                    objectFit="cover"
                    className="rounded-2xl"
                />

                <div>
                    <div className="flex gap-3 mb-8">
                        <span className="bg-green-100 text-green-900 py-1 px-2 uppercase font-medium text-xs rounded">
                            {typeLabels[course.type]}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 py-1 px-2 uppercase font-medium text-xs rounded">
                            {difficultyLabels[course.difficulty]}
                        </span>
                    </div>
                    {course.date && (
                        <p className="text-gray-500 text-2xl mb-3">
                            {new Date(course.date).toLocaleString("pl", {
                                dateStyle: "short",
                                timeStyle: "short",
                            })}
                        </p>
                    )}
                    <h1 className="text-4xl font-bold mb-8">{course.name}</h1>
                    {course.tickets && (
                        <p className="text-xl text-gray-400 mb-8">Ilość miejsc: {course.tickets}</p>
                    )}
                    <p className="text-2xl mb-8">
                        {formatCurrencyString(price.currency, price.unit_amount!)}
                    </p>
                    <button
                        className="bg-black text-gray-100 px-5 py-2 inline-flex items-center rounded"
                        onClick={handleCheckout}
                    >
                        <ShoppingBagIcon width={16} height={16} className="inline mr-2" />
                        Kup teraz
                    </button>
                </div>
            </section>
            <section>
                <h2 className="text-3xl font-bold mb-8">O szkoleniu</h2>
                <article className="prose prose-pink">{/* <MDXRemote {...source} /> */}</article>
            </section>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data, error } = await client.query({
        query: GET_COURSE,
        variables: { id: params?.id },
    });

    if (error) {
        return {
            notFound: true,
        };
    }

    const source = await serialize(data.course.description);

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2020-08-27" });

    const price = await stripe.prices.retrieve(data.course.stripe_price_id);

    return {
        props: {
            course: data.course,
            source,
            price,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({ query: GET_COURSES });

    const paths = data.courses.map(({ id }: Course) => ({ params: { id } }));

    return {
        paths,
        fallback: false,
    };
};

export default Index;
