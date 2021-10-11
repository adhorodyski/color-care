export const Footer = () => (
    <footer className="w-full bg-white border-t-2 border-gray-100">
        <nav className="flex flex-col md:flex-row md:gap-32 container mx-auto px-3 gap-8 py-16">
            <div className="flex flex-col gap-3">
                <div>
                    <span className="text-gray-400">Instagram: </span>
                    <a
                        href="https://www.instagram.com/color_care_"
                        title="color_care_ na Instagramie"
                        target="_blank"
                        rel="noreferrer"
                    >
                        color_care_
                    </a>
                </div>
                <div>
                    <span className="text-gray-400">Email: </span>
                    <a href="mailto:ad.horodyski@gmail.com">m.iwanska99@gmail.com</a>
                </div>
            </div>
        </nav>
    </footer>
);
