import type { NextPage } from "next";
import Head from "next/head";
import { Newsletter } from "components/organisms";

const Index: NextPage = () => (
    <>
        <Head>
            <title>color-care 💅🏼</title>
        </Head>
        <div className="md:my-32">
            <h1 className="mb-12 text-4xl font-medium">Newsletter</h1>
            <Newsletter />
        </div>
    </>
);

export default Index;
