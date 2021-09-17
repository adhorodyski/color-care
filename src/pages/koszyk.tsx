import type { NextPage } from "next";
import Head from "next/head";
// @ts-ignore
import { useShoppingCart } from "use-shopping-cart";
import { useFetch } from "lib/hooks";

const Index: NextPage = () => {
    const { cartDetails, clearCart, redirectToCheckout } = useShoppingCart();
    const { fetchPostJSON } = useFetch();

    const handleCheckout = async (e: any) => {
        e.preventDefault();

        const res: any = await fetchPostJSON("/api/checkout-sessions/cart", cartDetails);

        if (res.statusCode === 500) {
            console.error(res.message);
            return;
        }

        redirectToCheckout({ sessionId: res.id });
    };

    return (
        <>
            <Head>
                <title>color-care | Koszyk</title>
            </Head>
            <h1>Koszyk</h1>
            <pre>{JSON.stringify(cartDetails, null, 2)}</pre>
            <button onClick={clearCart}>Wyczyść</button>
            <button onClick={handleCheckout}>Kupuję</button>
        </>
    );
};

export default Index;
