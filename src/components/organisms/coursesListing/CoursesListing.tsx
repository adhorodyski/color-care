import { Course } from "lib/models";
import { CourseItem } from "components/molecules";
import { useState } from "react";
import { mapToArray } from "lib/utils";

type FilterTypes = "all" | "online" | "offline";

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

interface Props {
    courses: Course[];
}

export const CoursesListing = ({ courses }: Props) => {
    const [activeFilter, setActiveFilter] = useState<FilterTypes>("all");

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
                {courses.filter(filters[activeFilter].condition).map((course: Course) => (
                    <li key={course.id}>
                        <CourseItem href={`/szkolenia/${course.id}`} course={course} />
                    </li>
                ))}
            </ul>
        </>
    );
};
