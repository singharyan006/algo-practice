// function to sort the given array in ascending order 
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

// function to merge two different arrays in ascending order
function merge(left, right) {
    let resultArray = [];
    let i, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]){
            resultArray.push(left[i]);
            i++;
        } else {
            resultArray.push(right[j]);
            j++;
        }
    } 
    resultArray.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));