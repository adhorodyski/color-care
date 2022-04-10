export const useCourse = () => {
    const typeLabels = {
        online: "Online",
        offline: "Stacjonarne",
    };

    const difficultyLabels = {
        basic: "Podstawowe",
        advanced: "Zaawansowane",
    };

    return { typeLabels, difficultyLabels };
};
