import { gql } from "@apollo/client";

export const GET_COURSES = gql`
    query GetCourses {
        courses(orderBy: date_ASC) {
            id
            date
            name
            description
            price
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
            date
            name
            description
            price
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
