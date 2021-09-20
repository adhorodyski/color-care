import { FC } from "react";
import { Header, Footer } from "components/organisms";

export const BaseLayout: FC = (p) => (
    <>
        <Header />
        <main className="container mx-auto px-3 py-6 mb-32">{p.children}</main>
        <Footer />
    </>
);
