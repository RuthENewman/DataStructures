const strings = ['a', 'b', 'c', 'd', 'e'];
const numbers = [1,2,3,4,5];

strings.push('f');

strings.pop();

strings.unshift('z');

strings.splice(2,0, 'y');

console.log(strings);