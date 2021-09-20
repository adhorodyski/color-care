import Skeleton from "react-loading-skeleton";

export const CoursesListingSkeleton = () => (
    <>
        <div className="flex gap-3 mb-16">
            <Skeleton height={40} width={120} />
            <Skeleton height={40} width={120} />
            <Skeleton height={40} width={120} />
        </div>
        <div className="flex flex-col gap-3">
            <Skeleton height={150} />
            <Skeleton height={150} />
            <Skeleton height={150} />
            <Skeleton height={150} />
            <Skeleton height={150} />
        </div>
    </>
);
