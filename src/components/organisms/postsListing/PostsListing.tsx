import { Post } from "lib/models";
import { PostItem } from "components/molecules";

interface PostsListingProps {
    posts: Post[];
}

export const PostsListing = ({ posts }: PostsListingProps) => (
    <ul className="flex flex-col gap-16">
        {posts.map((post: Post) => (
            <li key={post.id}>
                <PostItem post={post} />
            </li>
        ))}
    </ul>
);
