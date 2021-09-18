import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from "lib/queries";
import { Course } from "lib/models";
import { CourseItem } from "components/molecules";

const Index: NextPage = () => {
    const { data, error } = useQuery(GET_COURSES, { variables: { type: "offline" } });

    if (!data || error) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Head>
                <title>color-care | Szkolenia stacjonarne</title>
            </Head>
            <h1 className="text-4xl font-bold mb-8">Szkolenia stacjonarne</h1>
            <ul className="flex flex-col gap-5">
                {data.courses.map((course: Course) => (
                    <li key={course.id}>
                        <CourseItem href={`/szkolenia-stacjonarne/${course.id}`} course={course} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Index;
