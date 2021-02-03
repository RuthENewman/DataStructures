function reverse(str) {
    const stringArray = [];
    str.split("").forEach((letter) => {
        stringArray.unshift(letter);
    })
    return stringArray.join("");
}

const result = reverse("example");

console.log(result);