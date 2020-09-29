const chalk = require('chalk');
const calculater = {
	plus:chalk.blue.bold.bgRed("+"),
	minus : chalk`{yellow.bold.bgYellow -}`,
	mul: `${chalk.rgb(10,100,200).italic.bgGreen('x')}`,
	dev : chalk.hex('#FF8800').bgCyan('/'),
};
const x =10;
const y= 5;
console.log(`${x} ${calculater.plus} ${y} = ${x+y} `);
console.log(`${x} ${calculater.minus} ${y} = ${x-y} `);
console.log(`${x} ${calculater.mul} ${y} = ${x*y} `);
console.log(`${x} ${calculater.dev} ${y} = ${x/y} `);