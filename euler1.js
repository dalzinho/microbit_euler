const multiplesOf3and5 = (max: number) => {
    let multiples: number[] = [];
    for (let i = 0; i < max; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            multiples.push(i);
        }
    }
    return multiples;
}

const sumMultiplesArray = (array: number[]) => {
    return array.reduce((sum, value) => {
        return sum + value;
    }, 0)
}

basic.showNumber(sumMultiplesArray(multiplesOf3and5(1000)));
