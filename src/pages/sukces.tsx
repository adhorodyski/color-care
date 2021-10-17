import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
// @ts-ignore
import { useShoppingCart } from "use-shopping-cart";
import { CheckCircleIcon, ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index: NextPage = () => {
    const { query } = useRouter();
    const { clearCart } = useShoppingCart();

    console.log(`Session ID: ${query.session_id}`);

    useEffect(() => clearCart(), [clearCart]);

    return (
        <>
            <Head>
                <title>color-care | Zamówienie opłacone</title>
            </Head>
            <div className="flex gap-3 mb-8">
                <h1 className="text-4xl font-bold">Zamówienie opłacone</h1>
                <CheckCircleIcon width={40} height={40} className="text-green-400" />
            </div>
            <p className="text-gray-500 text-xl mb-16">
                Sprawdź swoją skrzynkę - czeka tam na Ciebie email z fakturą.
            </p>
            <Link passHref href="/">
                <a className="bg-black text-gray-100 px-5 py-2 rounded inline-flex items-center">
                    <ArrowNarrowLeftIcon width={16} height={16} className="inline mr-2" /> Wróć do
                    strony głównej
                </a>
            </Link>
        </>
    );
};

export default Index;
