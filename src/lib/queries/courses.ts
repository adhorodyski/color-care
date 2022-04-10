import { gql } from "@apollo/client";

export const GET_COURSES = gql`
    query GetCourses {
        courses(orderBy: date_ASC) {
            id
            stripe_price_id
            date
            name
            description
            slug
            type
            tickets
            difficulty
            duration
            images {
                id
                url
            }
        }
    }
`;

export const GET_COURSE = gql`
    query GetCourse($id: ID!) {
        course(where: { id: $id }) {
            id
            stripe_price_id
            date
            name
            description
            slug
            type
            tickets
            difficulty
            duration
            images {
                id
                url
            }
        }
    }
`;
