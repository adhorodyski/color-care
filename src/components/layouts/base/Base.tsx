import { FC, PropsWithChildren } from "react";
import { Header, Footer } from "components/organisms";

export const BaseLayout: FC<PropsWithChildren<unknown>> = ({ children }) => (
    <>
        <Header />
        <main className="container mx-auto px-3 py-6 mb-32">{children}</main>
        <Footer />
    </>
);
