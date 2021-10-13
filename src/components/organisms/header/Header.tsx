import Link from "next/link";
// @ts-ignore
import { useShoppingCart } from "use-shopping-cart";

export const Header = () => {
    const { cartCount } = useShoppingCart();

    return (
        <header className="w-full sticky top-0 bg-white z-10">
            <div className="container mx-auto flex justify-between items-center px-3 py-5">
                <Link href="/" passHref>
                    <a className="text-xl font-bold">color_care</a>
                </Link>
                <nav className="flex gap-6">
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"/szkolenia"}>Szkolenia</Link>
                    <Link href={"/koszyk"} passHref>
                        <a>Koszyk ({cartCount})</a>
                    </Link>
                </nav>
            </div>
        </header>
    );
};
