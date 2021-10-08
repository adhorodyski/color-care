import Document, { Html, Head, Main, NextScript } from "next/document";

class Doc extends Document {
    render() {
        return (
            <Html lang="pl">
                <Head>
                    <link rel="preconnect" href={"https://fonts.googleapis.com"} />
                    <link rel="preconnect" href={"https://fonts.gstatic.com"} />
                    <link
                        rel="stylesheet"
                        href={
                            "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;0,800;1,400&display=swap"
                        }
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Doc;
