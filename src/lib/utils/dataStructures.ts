export const mapToArray = <T>(items: Record<string, T>) => {
    let result = [];

    for (const i in items) {
        result.push(items[i]);
    }

    return result;
};
