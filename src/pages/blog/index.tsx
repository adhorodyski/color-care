import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Post } from "lib/models";
import { client } from "lib/apollo";
import { GET_POSTS } from "lib/queries";
import { PostsListing } from "components/organisms";

interface PageProps {
    posts: Post[];
}

const Index: NextPage<PageProps> = ({ posts }) => (
    <>
        <Head>
            <title>color-care | Blog</title>
        </Head>
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <PostsListing posts={posts} />
    </>
);

export const getStaticProps: GetStaticProps = async () => {
    const { data, error } = await client.query({ query: GET_POSTS });

    if (error) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            posts: data.posts,
        },
    };
};

export default Index;
