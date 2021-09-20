import { useQuery } from "@apollo/client";
import { Course } from "lib/models";
import { GET_COURSES } from "lib/queries";
import { CourseItem } from "components/molecules";
import { useState } from "react";
import { mapToArray } from "lib/utils";
import { CoursesListingSkeleton } from "./CoursesListing.skeleton";

type FilterTypes = "all" | "online" | "offline";

export const CoursesListing = () => {
    const { data, error } = useQuery(GET_COURSES);
    const [activeFilter, setActiveFilter] = useState<FilterTypes>("all");

    if (!data || error) {
        return <CoursesListingSkeleton />;
    }

    const filters: Record<FilterTypes, any> = {
        all: {
            key: "all",
            label: "Wszystkie",
            condition: () => true,
        },
        offline: {
            key: "offline",
            label: "Stacjonarne",
            condition: (course: Course) => course.type === "offline",
        },
        online: {
            key: "online",
            label: "Online",
            condition: (course: Course) => course.type === "online",
        },
    };

    return (
        <>
            <div className="flex gap-3 mb-16">
                {mapToArray(filters).map((filter) => (
                    <button
                        key={filter.key}
                        className={`px-4 py-2 rounded ${
                            filter.key === activeFilter && "bg-black text-gray-100"
                        }`}
                        onClick={() => setActiveFilter(filter.key)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
            <ul className="flex flex-col gap-16">
                {data.courses.filter(filters[activeFilter].condition).map((course: Course) => (
                    <li key={course.id}>
                        <CourseItem href={`/szkolenia/${course.id}`} course={course} />
                    </li>
                ))}
            </ul>
        </>
    );
};
