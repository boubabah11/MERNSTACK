// Functions : JS is a functional programming language and its power lies in the spirits of functions
// As most of the essential features are built through functions so it is termed as - first class member citizens

//if nothing is returned from a function JS from its implementation will return default value, i-e - undefined
function name(params)
{
    return params * params

}
console.log(name(5))  //This return 25
console.log(name()) // NaN - Not a number

//1. Named functions - a function definition with name is termed as named function
function PrintData(param)
{
    return param * param
}

//2. IIFE - Immediately Invocable function expression
(function IIFE_Example(sessionName, sessionID)
{
    console.log("IIFE session Name - "+ sessionName +" "+ sessionID);
}) ("MERNSTack", 5)

//3. Function expression

var functionExpression = function (params)
{
    return params;
}
console.log(functionExpression("Simplified Function Expression!!!"))

//4. Constructor function we can create a function to be instantiated like a class

function Area_const(length, breadth)
{
    this.length = length,
    this.breadth = breadth,
    this.rectangleArea = function ()
    {
        return this.length * this.breadth
    }
}

var areaObj = new Area_const(9,8) //function as a class
console.log("Area of rectangle " +areaObj.rectangleArea())



