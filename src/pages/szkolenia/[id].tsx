import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
// @ts-ignore
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { GET_COURSE } from "lib/queries";
import { useCourse } from "lib/hooks";
import { Course } from "lib/models";

const Index: NextPage = () => {
    const { query } = useRouter();
    const { data, error } = useQuery<{ course: Course }>(GET_COURSE, {
        variables: { id: query.id },
    });
    const { addItem, cartDetails } = useShoppingCart();
    const { typeLabels, difficultyLabels } = useCourse();
    const { courseToProduct } = useCourse();

    if (!data || error) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Head>
                <title>color-care | {data.course.name}</title>
            </Head>
            <section className="flex flex-col xl:flex-row gap-16 mb-24">
                <Image
                    src={data.course.images[0].url}
                    alt={data.course.name}
                    height={600}
                    width={600}
                    objectFit="cover"
                    className="rounded-2xl"
                />

                <div>
                    <div className="flex gap-3 mb-8">
                        <span className="bg-green-100 text-green-900 py-1 px-2 uppercase font-bold text-xs rounded">
                            {typeLabels[data.course.type]}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 py-1 px-2 uppercase font-bold text-xs rounded">
                            {difficultyLabels[data.course.difficulty]}
                        </span>
                    </div>
                    {data.course.date && (
                        <p className="text-gray-400 text-2xl mb-3">
                            {new Date(data.course.date).toLocaleString("pl", {
                                dateStyle: "short",
                                timeStyle: "short",
                            })}
                        </p>
                    )}
                    <h1 className="text-4xl font-bold mb-8">{data.course.name}</h1>
                    {data.course.tickets && (
                        <p className="text-xl text-gray-400 mb-8">
                            Ilość miejsc: {data.course.tickets}
                        </p>
                    )}
                    <h5 className="text-2xl mb-8">
                        {formatCurrencyString({ value: data.course.price, currency: "pln" })}
                    </h5>
                    {!cartDetails[data.course.id] && (
                        <button
                            className="bg-black text-gray-100 px-5 py-2 rounded"
                            onClick={() => addItem(courseToProduct(data.course))}
                        >
                            Dodaj do koszyka
                        </button>
                    )}
                </div>
            </section>
            <section>
                <h2 className="text-4xl font-bold mb-8">Opis</h2>
                <article className="text-gray-400 text-xl mb-8">{data.course.description}</article>
            </section>
        </>
    );
};

export default Index;
