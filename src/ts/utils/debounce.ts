export const debounce = (func: (...args: any[]) => any, ms = 250) => {
    let timerID = 0;
    return (...args: any[]) => {
        clearTimeout(timerID);
        timerID = setTimeout(func.bind(this, ...args), ms);
    };
};
