import { FC } from "react";
import { Header } from "components/organisms";

export const BaseLayout: FC = (p) => (
    <>
        <Header />
        <main className="container mx-auto px-3 py-6">{p.children}</main>
    </>
);
