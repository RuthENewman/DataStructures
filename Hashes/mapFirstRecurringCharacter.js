const firstRecurringCharacter = (array) => {
    let map = {};
    for (let i = 0; i < array.length; i++) {
        if(map[array[i]] !== undefined) {
            return array[i];
        } else {
            map[array[i]] = 1;
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
