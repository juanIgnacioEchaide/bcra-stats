
const getYear = (item: any) => item.d.split('-')[0];

const getMonth = (item: any) => item.d.split('-')[1];

const getRegsYears = (regArray: any) => {
    const rawYears = regArray.map((reg: any[]) => getYear(reg));
    const years: string[] = [];

    rawYears.forEach((c: any) => {
        if (!years.includes(c)) {
            years.push(c);
        }
    });

    return years;
};

const orderItemsByYear = (regArray: any, years: any) => {
    let chunks: any[] = [];
    years.forEach((y: any, idxA: number) => {
        return chunks.push({
            year: y,
            values: regArray.filter(
                (i: any) => getYear(i) === y && chunks.indexOf(i)
            ),
        });
    });

    return chunks;
};

const groupRegisterByYear = (regArray: any) => {
    const years = getRegsYears(regArray);
    return orderItemsByYear(regArray, years);
};

const splitItemsByMonths = (arr: any[]) => {
    return arr?.map((i: any) => i ?.values ?.map((j: any) => ({
        year: j.d.split('-')[0],
        month: j.d.split('-')[1],
        values: i.values.filter((k: any) => k.d.split('-')[1] === j.d.split('-')[1])
    })));
}

const groupRegisterByMonth = (regArray: any) => {
    const arr = groupRegisterByYear(regArray)
    return splitItemsByMonths(arr);
};

/* 
const groupRegisterByYear = (regArray: any) => {
    let years: any = [];
    const chunks: any = [];
    const repeatedYears = regArray.map((i: any) => getYear(i))

    repeatedYears.forEach((c: any) => {
        if (!years.includes(c)) {
            years.push(c);
        }
    });

    years.forEach((y: any, idxA: number) => {
        return chunks.push({
            year: y,
            values: regArray.filter((i: any) => getYear(i) === y && chunks.indexOf(i)),
        });
    });
    return chunks;
}; */



export { getYear, getMonth, groupRegisterByYear, groupRegisterByMonth }