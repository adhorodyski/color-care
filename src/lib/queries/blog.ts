import { gql } from "@apollo/client";

export const GET_POSTS = gql`
    query GetPosts {
        posts {
            id
            slug
            title
            description
        }
    }
`;

export const GET_POST = gql`
    query GetPost($slug: String!) {
        post(where: { slug: $slug }) {
            id
            slug
            title
            description
            body
            author {
                name
                avatar {
                    url
                }
            }
        }
    }
`;
