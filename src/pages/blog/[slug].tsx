import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Post } from "lib/models";
import { GET_POSTS, GET_POST } from "lib/queries";
import { client } from "lib/apollo";

interface PageProps {
    post: Post;
}

const Index: NextPage<PageProps> = ({ post }) => (
    <>
        <Head>
            <title>color-care | Blog</title>
        </Head>
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data, error } = await client.query({
        query: GET_POST,
        variables: { slug: params?.slug },
    });

    if (error) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post: data.post,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({ query: GET_POSTS });

    const paths = data.posts.map(({ slug }: Post) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export default Index;
