import { FC, ReactNode } from "react";

interface EmptyStateProps {
    title: string;
    description?: string;
    primaryCTA?: ReactNode;
    secondaryCTA?: ReactNode;
}

export const EmptyState: FC<EmptyStateProps> = ({
    title,
    description,
    primaryCTA,
    secondaryCTA,
}) => (
    <div className="flex flex-col justify-center gap-3 w-96 mx-auto">
        <h4 className="font-bold text-center text-2xl">{title}</h4>
        {description && <p className="text-gray-500 text-center mb-6">{description}</p>}
        <div className="flex justify-center items-center gap-3">
            {primaryCTA}
            {secondaryCTA}
        </div>
    </div>
);
