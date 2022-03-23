export const debounce = (func: (...args: any[]) => any, ms = 250) => {
    let timerID = 0;
    return (...args: any[]) => {
        clearTimeout(timerID);
        timerID = setTimeout(func.bind(this, ...args), ms);
    };
};

export const keyBy = <T extends object>(collection: T[], getKey: (item: T) => string): Map<string, T> => {
    const keyed = new Map<string, T>();

    collection.forEach((item) => {
        const keyValue = getKey(item);
        keyed.set(keyValue, item);
    });

    return keyed;
};
