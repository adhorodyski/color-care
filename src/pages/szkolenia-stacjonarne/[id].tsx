import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
// @ts-ignore
import { useShoppingCart } from "use-shopping-cart";
import { GET_COURSE } from "lib/queries";
import { useCourse } from "lib/hooks";

const Index: NextPage = () => {
    const { query } = useRouter();
    const { data, error } = useQuery(GET_COURSE, { variables: { id: query.id } });
    const { addItem } = useShoppingCart();
    const { courseToProduct } = useCourse();

    if (!data || error) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Head>
                <title>color-care | {data.course.name}</title>
            </Head>
            <h1>Szkolenia stacjonarne</h1>
            <ul>
                <li key={data.course.id} className="bg-gray-100 p-4 mb-3 rounded">
                    <p>{data.course.slug}</p>
                    <pre>{JSON.stringify(data.course, null, 2)}</pre>
                </li>
                <button onClick={() => addItem(courseToProduct(data.course))}>
                    Dodaj do koszyka
                </button>
            </ul>
        </>
    );
};

export default Index;
