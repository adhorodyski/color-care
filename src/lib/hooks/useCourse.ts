import { Product } from "use-shopping-cart";
import { Course } from "lib/models";

export const useCourse = () => {
    const courseToProduct = (course: Course): Product => ({
        id: course.id,
        name: course.name,
        description: course.description,
        price: course.price,
        images: course.images,
        currency: "PLN",
        price_data: {},
        product_data: {},
    });

    return { courseToProduct };
};
