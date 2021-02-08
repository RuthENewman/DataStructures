const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

strings.push('e'); // 0{1}
console.log('after push', strings); 

strings.pop(); // 0(1)
console.log('after pop', strings); 

strings.unshift('z'); // 0(n)
console.log('after unshift', strings); 

strings.splice(2,0, 'y'); // 0(n)
console.log('after splice', strings); 