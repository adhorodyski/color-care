import Link from "next/link";
// @ts-ignore
import { useShoppingCart } from "use-shopping-cart";

export const Header = () => {
    const { formattedTotalPrice } = useShoppingCart();

    return (
        <header className="w-full sticky top-0 bg-white">
            <div className="container mx-auto flex justify-between items-center px-3 py-5">
                <Link href="/">color-care</Link>
                <nav className="flex gap-6">
                    <Link href={"/szkolenia"}>Szkolenia 🎨</Link>
                    <Link href={"/koszyk"} passHref>
                        <a>Koszyk 🛍 ({formattedTotalPrice})</a>
                    </Link>
                </nav>
            </div>
        </header>
    );
};
