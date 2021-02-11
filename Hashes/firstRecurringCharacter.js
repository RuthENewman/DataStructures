// Given an array = [2,5,1,2,3,5,1,2,4];
// Should return 2

const firstRecurringCharacter = (array) => {
    for(let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return array[i];
            } 
        }
    }
    return undefined;
}

const firstArray = [2,5,1,2,3,5,1,2,4];
const secondArray = [2,1,1,2,3,5,1,2,4];
const thirdArray = [2,3,4,5];

const firstResult = firstRecurringCharacter(firstArray);
const secondResult = firstRecurringCharacter(secondArray);
console.log(secondResult);

const thirdResult = firstRecurringCharacter(thirdArray);
console.log(firstResult, secondResult, thirdResult);
