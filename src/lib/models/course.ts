export interface Course {
    id: string;
    name: string;
    description: string;
    images: string[];
    price: number;
    slug: string;
    type: "online" | "offline";
}
