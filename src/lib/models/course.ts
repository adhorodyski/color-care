import { Image } from "./image";

export type CourseType = "offline" | "online";
export type CourseDifficulty = "basic" | "advanced";

export interface Course {
    id: string;
    name: string;
    description: string;
    images: Image[];
    price: number;
    slug: string;
    type: CourseType;
    difficulty: CourseDifficulty;
    date?: string;
    tickets?: number;
    duration?: number;
    place?: {
        longtitude: number;
        latitude: number;
    };
}
