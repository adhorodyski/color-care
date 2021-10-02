import Link from "next/link";

export const Footer = () => (
    <footer className="w-full bg-white border-t-2 border-gray-100">
        <nav className="flex flex-col md:flex-row md:gap-32 container mx-auto px-3 gap-8 py-16">
            <div className="text-gray-400">
                <p>Maria Iwańska</p>
                <p>ul. Dunajcowa 99</p>
                <p>Nowy Sącz</p>
                <p>NIP: 424242424</p>
            </div>
            <a
                href="https://www.instagram.com/color_care_"
                title="color_care_ na Instagramie"
                target="_blank"
                rel="noreferrer"
            >
                <span className="text-gray-400">Instagram:</span> color_care_
            </a>
            <Link href="/regulamin">Regulamin</Link>
        </nav>
    </footer>
);
