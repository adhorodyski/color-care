import { FC } from "react";
import type { AppProps } from "next/app";
import { BaseLayout } from "components/layouts";
import type { NextPageWithLayout } from "lib/types";
import "tailwindcss/tailwind.css";

const MyApp: FC<AppProps & { Component: NextPageWithLayout }> = ({ Component, pageProps }) => {
    const Layout = Component.layout || BaseLayout;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};
export default MyApp;
