import type { NextPage } from "next";
import Head from "next/head";
import { Newsletter } from "components/organisms";

const Index: NextPage = () => (
    <>
        <Head>
            <title>color-care 💅🏼</title>
        </Head>
        <div className="mx-auto md:my-32 w-full md:w-1/2">
            <Newsletter />
        </div>
    </>
);

export default Index;
