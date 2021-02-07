const strings = ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];

strings.push('e');
console.log('after push', strings);

strings.pop();
console.log('after pop', strings);

strings.unshift('z');
console.log('after unshift', strings);

strings.splice(2,0, 'y');
console.log('after splice', strings);