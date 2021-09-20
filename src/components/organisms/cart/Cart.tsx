import { useRouter } from "next/router";
import { mapToArray } from "lib/utils";
import { Course } from "lib/models";
import { useFetch } from "lib/hooks";
import { CartItem, CartSummary, EmptyState } from "components/molecules";
// @ts-ignore
import { useShoppingCart } from "use-shopping-cart";

export const Cart = () => {
    const { push } = useRouter();
    const { cartDetails, cartCount, removeItem, redirectToCheckout, formattedTotalPrice } =
        useShoppingCart();
    const { fetchPostJSON } = useFetch();

    const handleCheckout = async () => {
        const res = await fetchPostJSON("/api/checkout-sessions/cart", cartDetails);

        if (res.statusCode === 500) {
            console.error(res.message);
            return;
        }

        redirectToCheckout({ sessionId: res.id });
    };

    if (!cartCount) {
        return (
            <EmptyState
                title="Koszyk jest pusty 🛒"
                description="Dodaj do niego szkolenia"
                primaryCTA={
                    <button
                        className="bg-black text-gray-100 px-5 py-2 rounded"
                        onClick={() => push("/szkolenia")}
                    >
                        Przeglądaj
                    </button>
                }
            />
        );
    }

    return (
        <>
            <ul className="flex flex-col gap-3 mb-8">
                {mapToArray<Course>(cartDetails).map((course) => (
                    <li key={course.id}>
                        <CartItem
                            name={course.name}
                            price={course.price}
                            image={course.images[0].url}
                            onDelete={() => removeItem(course.id)}
                        />
                    </li>
                ))}
            </ul>
            <div className="flex justify-end border-gray-200 border-t-2">
                <CartSummary price={formattedTotalPrice} onCheckout={handleCheckout} />
            </div>
        </>
    );
};
