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
    type: "online" | "offline";
    date?: string;
    tickets?: number;
    place?: {
        longtitude: number;
        latitude: number;
    };
}
