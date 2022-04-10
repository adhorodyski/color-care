import { FC } from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { BaseLayout } from "components/layouts";
import type { NextPageWithLayout } from "lib/types";
import { client } from "lib/apollo";
import "tailwindcss/tailwind.css";

const MyApp: FC<AppProps & { Component: NextPageWithLayout }> = ({ Component, pageProps }) => {
    const Layout = Component.layout || BaseLayout;

    return (
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
};

export default MyApp;
