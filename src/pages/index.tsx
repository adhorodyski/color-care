import type { NextPage } from "next";
import Head from "next/head";
import { Newsletter } from "components/organisms";

const Index: NextPage = () => (
    <>
        <Head>
            <title>color-care</title>
        </Head>
        <div className="md:my-32">
            <Newsletter />
        </div>
    </>
);

export default Index;
