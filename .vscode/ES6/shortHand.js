// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow", // if we put comma we don't need to use let again and it will continue as let till semicolon ;
dog = "Woof",
bird = "Chrip",
lion = "roar";

let animalSound = {
    cat : cat,
    dog : dog,
    bird : bird,
    lion : lion
}

let animalSound6 = { cat, dog, bird, lion } //[object object]

console.log("Animal Sounds are represented as - ", animalSound);
//console.log("Animal Sounds are represented as - " + animalSound6.toString());

console.log("Animal Sounds are represented as - Legacy Way " + JSON.stringify(animalSound6));


module.exports = {animalSound, animalSound6};