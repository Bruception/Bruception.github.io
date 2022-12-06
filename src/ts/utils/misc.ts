export const keyBy = <T extends object>(collection: T[], getKey: (item: T) => string): Map<string, T> => {
    const keyed = new Map<string, T>();

    collection.forEach((item) => {
        const keyValue = getKey(item);
        keyed.set(keyValue, item);
    });

    return keyed;
};
