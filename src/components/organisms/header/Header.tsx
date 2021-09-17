import Link from "next/link";
// @ts-ignore
import { useShoppingCart } from "use-shopping-cart";

export const Header = () => {
    const { formattedTotalPrice } = useShoppingCart();

    return (
        <header className="w-full">
            <div className="container mx-auto flex justify-between items-center p-3">
                <Link href="/">color-care</Link>
                <nav className="flex gap-5">
                    <Link href={"/szkolenia-stacjonarne"}>Szkolenia stacjonarne 👩‍🎨</Link>
                    <Link href={"/szkolenia-online"}>Szkolenia online 💻</Link>
                    <Link href={"/koszyk"} passHref>
                        <a>Koszyk 🛍 ({formattedTotalPrice})</a>
                    </Link>
                </nav>
            </div>
        </header>
    );
};
