import { gql } from "@apollo/client";

export const GET_COURSES = gql`
    query GetCourses($type: CourseType) {
        courses(where: { type: $type }) {
            id
            date
            name
            price
            slug
            type
            images {
                id
            }
        }
    }
`;

export const GET_COURSE = gql`
    query GetCourse($id: ID) {
        course(where: { id: $id }) {
            id
            date
            name
            price
            slug
            type
            images {
                id
            }
        }
    }
`;
