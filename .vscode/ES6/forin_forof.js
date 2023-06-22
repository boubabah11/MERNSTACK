// two new loops are introduced in ES6 to ease out the implementation for developers
// for in loop - iterates over the property value, basically meant for json objects with - key values

// for in loop iterates over the key
let user = {name : "Test", age : 25, session : "MERNStack"}

for (const key in user) 
{
    //if (Object.hasOwnProperty.call(user, key)) {
        const element = user[key];
    //    console.log(element);
    //}
}

//console.log("Other Example") 

let arr = [3,5,7]; //{0:3,1:5,2:7,fooKey:"Alex"}

arr.fooKey = "Alex"

for (const num in arr) {
        const element = arr[num];
    //    console.log(element);
}


//for of loop : Mainely for arrays, iterates over the property names, more recommended for array of numbers or string instead of objects

console.log("For Of Loop") 
let cars = ['BMW', 'Volvo', 'Mini']; 
//cars.new = ["Toyota"] //string key would not be read 
cars[3] = ["Toyota"]

console.log(cars);
for (const car of cars) {
    console.log(" "+ car)
}

//console.log("For Of another example")
var arr2 = [3, 5, 7];
//arr2.hello = 20;
//arr2[3] = 21;

console.log(arr2); 

for (let value of arr2) {
    console.log(value); 
    // logs “3”, “5”, “7” 
}
