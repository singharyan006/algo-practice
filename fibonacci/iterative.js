function fibs(limit) {
    let fibsArray = [0, 1];
    let i = 2;
    let next = 0;
    if (limit > 1) {
        while (i < limit) {
            next = fibsArray[i-1] + fibsArray[i-2];
            fibsArray.push(next);
            i++;
        }
    }
    return fibsArray;
}

console.log("This is printed iteratively :",fibs(8));