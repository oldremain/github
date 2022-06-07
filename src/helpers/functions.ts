export const getCurrentPageInfo = (pageSize: number, reposCount: number, currentPage: number): string => {
    const from = (currentPage - 1) * pageSize + 1  //currentPage * pageSize - (pageSize - 1);
    const to = (currentPage * pageSize) > reposCount
             ? reposCount
             : currentPage * pageSize;

    return from === to
        ? `${from} of ${reposCount} item(s)`
        : `${from}-${to} of ${reposCount} item(s)`;

};

export const getFollowerCount = (value: number): string => {
    if (value >= 1000 && value < 1e6) {
        const result = (Math.floor(value / 100) / 10).toString();
        // return result.endsWith("0") 
        //     ? Math.trunc(+result) + "k" 
        //     : result + "k";

        return result + 'k'
    } else {
        return value.toFixed();
    }
};