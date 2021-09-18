import type { NextPage } from "next";
import Head from "next/head";
import { Cart } from "components/organisms";

const Index: NextPage = () => (
    <>
        <Head>
            <title>color-care | Koszyk</title>
        </Head>
        <h1 className="text-4xl font-bold mb-8">Koszyk</h1>
        <Cart />
    </>
);

export default Index;
