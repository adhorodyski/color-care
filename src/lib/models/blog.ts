export interface Author {
    id: string;
    name: string;
    avatar: {
        url: string;
    };
}

export interface Post {
    id: string;
    author: Author;
    slug: string;
    title: string;
    description?: string;
    body: string;
}
