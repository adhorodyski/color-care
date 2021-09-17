import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import Link from "next/link";
// @ts-ignore
import { useShoppingCart } from "use-shopping-cart";
import { GET_COURSES } from "lib/queries";
import { useCourse } from "lib/hooks";
import { Course } from "lib/models";

const Index: NextPage = () => {
    const { data, error } = useQuery(GET_COURSES, { variables: { type: "offline" } });
    const { addItem } = useShoppingCart();
    const { courseToProduct } = useCourse();

    if (!data || error) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Head>
                <title>color-care | Szkolenia stacjonarne</title>
            </Head>
            <h1>Szkolenia stacjonarne</h1>
            <ul>
                {data.courses.map((course: Course) => (
                    <li key={course.id} className="bg-gray-100 p-4 mb-3 rounded">
                        <pre>{JSON.stringify(course, null, 2)}</pre>
                        <Link
                            href={`/szkolenia-stacjonarne/[id]`}
                            as={`/szkolenia-stacjonarne/${course.id}`}
                        >
                            Więcej
                        </Link>
                        <button onClick={() => addItem(courseToProduct(course))}>
                            Dodaj do koszyka
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Index;
