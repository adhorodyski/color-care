import type { NextPage } from "next";
import Head from "next/head";
import { CoursesListing } from "components/organisms";

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>color-care | Szkolenia</title>
            </Head>
            <h1 className="text-4xl font-bold mb-8">Szkolenia</h1>
            <CoursesListing />
        </>
    );
};

export default Index;
