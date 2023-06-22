//hoisting : 
//someValue = undefined //initilizes with default - undefined

//Hoisting - is a phenomenon where JS compiler reads all variables and functions pulls them on top of file or function
// assigns them respective default values, that way we can access the variable/function even before its declaration
// a reason to say javascript is a compiled language

//1.  creates the snapshot on top of the file and function
//2.  variables - undefined
//3.  functions - function definition

var someValue = undefined; //while hoisting js copies the value on top and assigns undefined to it

Print(5,5);

console.log(someValue);

//var someValue = "Some Value";
console.log(typeof Print)
console.log(typeof funcExpression)

//funcExpression();

var funcExpression = function () {
    console.log("Hoisting for function expression!!")
}

var someValue = "Some Value";

function Print(a, b) {
    console.log("We are checking on hoisting!!! "+ a*b)
}

// create an example of overloading where one function is function expression

share(4,6,2,3);

function share(a,b,c)
{
    console.log(a*b+c);
}

var share = function(a,b,c,d)
{
    console.log(a+b+c+d);
}