import { FC } from "react";
import type { AppProps } from "next/app";
import { CartProvider } from "use-shopping-cart";
import { BaseLayout } from "components/layouts";
import type { NextPageWithLayout } from "lib/types";
import { ApolloProvider } from "@apollo/client";
import { client } from "lib/apollo";
import "tailwindcss/tailwind.css";

const MyApp: FC<AppProps & { Component: NextPageWithLayout }> = ({ Component, pageProps }) => {
    const Layout = Component.layout || BaseLayout;

    return (
        <ApolloProvider client={client}>
            <CartProvider
                stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
                cartMode="checkout-session"
                currency="PLN"
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CartProvider>
        </ApolloProvider>
    );
};

export default MyApp;
