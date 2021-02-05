function reverse(str) {
if(!str || str.length <= 1 || typeof str !== 'string') {
    return str;
}
    const stringArray = [];
    str.split("").forEach((letter) => {
        stringArray.unshift(letter);
    })
    return stringArray.join("");
}

const result = reverse("example");

console.log(result);