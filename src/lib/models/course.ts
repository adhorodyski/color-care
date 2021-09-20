export type CourseType = "offline" | "online";
export type CourseDifficulty = "basic" | "advanced";

export interface Course {
    id: string;
    name: string;
    description: string;
    images: {
        id: string;
        url: string;
    }[];
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
