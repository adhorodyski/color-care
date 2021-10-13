import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Post } from "lib/models";
import { GET_POSTS, GET_POST } from "lib/queries";
import { client } from "lib/apollo";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface PageProps {
    post: Post;
    source: MDXRemoteSerializeResult;
}

const Index: NextPage<PageProps> = ({ post, source }) => (
    <>
        <Head>
            <title>color-care | Blog</title>
        </Head>
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <div className="flex items-center gap-4 mb-12">
            <Image
                src={post.author.avatar.url}
                alt={post.author.name}
                height={24}
                width={24}
                className="rounded-full"
            />
            <p className="text-sm text-gray-600">
                {post.author.name} / {new Date(post.publishedAt).toLocaleDateString()}
            </p>
        </div>
        <article className="prose prose-pink">
            <MDXRemote {...source} />
        </article>
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

    const source = await serialize(data.post.body);

    return {
        props: {
            post: data.post,
            source,
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
