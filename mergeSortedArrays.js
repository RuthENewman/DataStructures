const mergeSortedArrays = (firstArray, secondArray) => {
    if (firstArray.length === 0) {
        return firstArray;
    } else if (secondArray.length === 0) {
        return secondArray;
    }
    
    const mergedArray = [];
    let i = 0;
    let j = 0;

    let firstArrayItem = firstArray[i];
    let secondArrayItem = secondArray[j];

    while (firstArrayItem || secondArrayItem) {
        if (!secondArrayItem || firstArrayItem < secondArrayItem) {
            mergedArray.push(firstArrayItem);
            i++;
            firstArrayItem = firstArray[i];
        } else {
            mergedArray.push(secondArrayItem);
            j++;
            secondArrayItem = secondArray[j];
        }
    }
    
    return mergedArray;
}

const result = mergeSortedArrays([0,3,4,31], [4,6,30]);
// returns [0,3,4,4,6,30,31];

console.log(result);
