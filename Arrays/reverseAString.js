const canBeReversed = (str) => (str && (str.length > 1) && (typeof str === 'string'));

function reverse(str) {
    if (canBeReversed(str)) {
        const backwardsArray = [];
        str.split("").forEach((letter) => {
            backwardsArray.unshift(letter);
        })
        return backwardsArray.join("");
    }
    return str;
}

const result = reverse("example");

console.log(result);

function forLoopReverse(str) {
    if (canBeReversed(str)) {
        const backwardsArray = [];
        for(let i = str.length - 1; i >= 0; i--) {
            backwardsArray.push(str[i]);
        }
        return backwardsArray.join("");
    }
    return str;
}

const loopResult = forLoopReverse("another example");

console.log(loopResult);