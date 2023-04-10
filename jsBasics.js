//compiled  + interpreted language

// variables dclared using var and any type of data can be assigned
var test = 25;

// auto casting or dynamic type casting
var Test = "Garrick";

// variables identifier names are case sensitive
var test = "David";
console.log(test)
console.log(Test)

// identifier names can be alphanumeric but should not start with a number
var Test1 = "David";
// $ and _ - special chars are allowed
// console.log(_test)
// console.log($Test)
// - ctrl+/ (toogle to do comment of one line)
/* --- code --- */ //for multiline comments
/*
var Test = "David";
console.log(test)
console.log(Test)
*/


process.stdin.on('data', data =>
{
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
    process.exit();
})
process.stdin.on('exit', data =>
{
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
})

