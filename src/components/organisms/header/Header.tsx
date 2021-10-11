import Link from "next/link";

export const Header = () => (
    <header className="w-full sticky top-0 bg-white z-10">
        <div className="container mx-auto flex justify-between items-center px-3 py-5">
            <Link href="/" passHref>
                <a className="text-xl font-bold">color_care</a>
            </Link>
        </div>
    </header>
);
