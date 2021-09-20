import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "lib/models";
import { formatCurrencyString } from "use-shopping-cart";

interface CourseItemProps {
    href: string;
    course: Course;
}

export const CourseItem: FC<CourseItemProps> = ({ href, course }) => (
    <div className="flex mb-16">
        <Image
            src={course.images[0].url}
            alt={course.name}
            height={150}
            width={250}
            objectFit="cover"
            className="rounded-2xl"
        />
        <div className="flex flex-col px-8 select-none">
            {course.date && (
                <p className="text-gray-400 mb-1">
                    {new Date(course.date).toLocaleString("pl", {
                        dateStyle: "short",
                        timeStyle: "short",
                    })}
                </p>
            )}
            <Link href={href} passHref>
                <a className="font-medium text-2xl mb-3 hover:underline select-none">
                    {course.name}
                </a>
            </Link>
            <p className="text-gray-400 text-xl select-none">
                {formatCurrencyString({ value: course.price, currency: "pln" })}
            </p>
        </div>
    </div>
);
