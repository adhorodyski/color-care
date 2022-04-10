import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "lib/models";
import { useCourse } from "lib/hooks";
import Stripe from "stripe";

interface Props {
    href: string;
    course: Course;
    // price: Stripe.Price;
}

export const CourseItem: FC<Props> = ({ href, course }) => {
    const { typeLabels, difficultyLabels } = useCourse();

    return (
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row">
            <Image
                src={course.images[0].url}
                alt={course.name}
                height={200}
                width={250}
                objectFit="cover"
                className="rounded-2xl"
            />
            <div className="flex flex-col md:px-8 select-none">
                <div className="flex items-center gap-5 mb-3">
                    <span className="bg-green-100 text-green-900 py-1 px-2 uppercase font-medium text-xs rounded">
                        {typeLabels[course.type]}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 py-1 px-2 uppercase font-medium text-xs rounded">
                        {difficultyLabels[course.difficulty]}
                    </span>
                </div>
                <div className="flex gap-3 text-2xl mb-3">
                    <Link href={href} passHref>
                        <a className="font-medium hover:underline select-none">{course.name}</a>
                    </Link>
                    {course.date && (
                        <span className="text-gray-400">
                            {new Date(course.date).toLocaleString("pl", {
                                dateStyle: "short",
                            })}
                        </span>
                    )}
                </div>
                <p className="text-gray-400 text-xl select-none">
                    100 PLN
                    {/* {`${price.unit_amount} ${price.currency}}`} */}
                </p>
            </div>
        </div>
    );
};
