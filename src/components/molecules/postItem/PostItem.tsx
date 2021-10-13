import { FC } from "react";
import Link from "next/link";
import { Post } from "lib/models";

interface PostItemProps {
    post: Post;
}

export const PostItem: FC<PostItemProps> = ({ post }) => (
    <Link href={`/blog/${post.slug}`} passHref>
        <a className="select-none">
            <h4 className="font-medium text-2xl mb-2">{post.title}</h4>
            <p className="text-gray-400">{post.description}</p>
        </a>
    </Link>
);
