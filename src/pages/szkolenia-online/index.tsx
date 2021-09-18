import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from "lib/queries";
import { Course } from "lib/models";
import { CourseItem } from "components/molecules";

const Index: NextPage = () => {
    const { data, error } = useQuery(GET_COURSES, { variables: { type: "online" } });

    if (!data || error) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Head>
                <title>color-care | Szkolenia online</title>
            </Head>
            <h1 className="text-4xl font-bold mb-8">Szkolenia online</h1>
            <ul>
                {data.courses.map((course: Course) => (
                    <li key={course.id}>
                        <CourseItem href={`/szkolenia-online/${course.id}`} course={course} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Index;
