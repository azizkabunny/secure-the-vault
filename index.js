let code1;
code1 = 7 + 3;
console.log(code1);

let code2;
code2 = 50 - 20 / 2;
console.log(code2);

let code3;
code3 = 37 + (5 % 3);
console.log(code3);

let message;
message = 'The vault has been secured. The combination is: ';
console.log(message);

let codeA;
codeA = code1 + '-' + code2 + '-' + code3;
console.log(codeA);

let codeB;
codeA = `${code1}-${code2}-${code3}`;
console.log(codeA);

console.log(message, codeA, codeB);
