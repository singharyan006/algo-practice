
// recursive funcion to find the fibonacci series to a user-defined limit
function fibsRec(limit) {
    //Base Cases
    if (limit <= 0) {
        return [];
    }
    if (limit === 1) {
        return [0];
    }
    if (limit === 2) {
        return [0, 1];
    }

    //Recursive case
    const fibsArray = fibsRec(limit - 1);
    const nextNum = fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2];
    fibsArray.push(nextNum);


    return fibsArray;
}


console.log("This is printed recurisively :",fibsRec(10));