const calc = require("./_global")

args = process.argv
x = parseInt(args[2]);
y = parseInt(args[3]);

console.log(calc.add(56, 28))
console.log(calc.sub(56, 28))
console.log(calc.mul(x, y))
console.log(calc.div(x, y))