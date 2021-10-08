import type { NextPage } from "next";
import Head from "next/head";
import { EmptyState } from "components/molecules";

const Index: NextPage = () => (
    <>
        <Head>
            <title>color-care</title>
        </Head>
        <EmptyState title="Trwają prace 👩🏼‍🏭" description="Sklep nie jest jeszcze dostępny." />
    </>
);

export default Index;
