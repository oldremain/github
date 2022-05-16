export const getCurrentPageInfo = (pageSize: number, reposCount: number, currentPage?: number): string => {
    if (currentPage) {
       const from = currentPage * pageSize - (pageSize - 1);
       const to = currentPage * pageSize > reposCount
                ? reposCount
                : currentPage * pageSize;

    return from === to
        ? `${from} of ${reposCount} item(s)`
        : `${from}-${to} of ${reposCount} item(s)`;
    } else {
        return ''
    }
};

export const getFollowerCount = (value: number): string => {
    if (value >= 1000 && value < 1e6) {
        const result = (Math.floor(value / 100) / 10).toString();

        return result.endsWith("0") 
            ? Math.trunc(+result) + "k" 
            : result + "k";
    } else {
        return value.toFixed();
    }
};