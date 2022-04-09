import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { CoursesListing } from "components/organisms";
import { client } from "lib/apollo";
import { GET_COURSES } from "lib/queries";
import { Course } from "lib/models";

interface Props {
    courses: Course[];
}

const Index: NextPage<Props> = ({ courses }) => (
    <>
        <Head>
            <title>color-care | Szkolenia</title>
        </Head>
        <h1 className="text-4xl font-bold mb-8">Szkolenia</h1>
        <CoursesListing courses={courses} />
    </>
);

export const getStaticProps: GetStaticProps = async () => {
    const { data, error } = await client.query({ query: GET_COURSES });

    if (error) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            courses: data.courses,
        },
    };
};

export default Index;
