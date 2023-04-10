//dataType : are use to identify one set of data uniquely

//other langs : int, double, big-int, char, string, object......

//Javascript : number,  string, null (object), undefined, boolean

var myValue = 99;
console.log(myValue);
console.log(typeof myValue);

myValue = 99.99;
console.log(myValue);
console.log(typeof myValue);

var myValue = "99.99"; //re-declaration
console.log(myValue);
console.log(typeof myValue);

myValue = {name : "Boubacar", friendName : "Liou"}
console.log(myValue);
console.log(typeof myValue); // object

myValue = null     //  VALID VALUE IN JS WITH TYPE AS OBJECT
console.log(myValue);
console.log(typeof myValue); // object

myValue = undefined
console.log(myValue);
console.log(typeof myValue); // undefined


myValue = true
console.log(myValue);
console.log(typeof myValue); // Boolean