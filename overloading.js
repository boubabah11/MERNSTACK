// THERE IS NO OVERLOADING IN JS. 

console.log( Area()) // undefined, two areas ,no area

function Area() {
    return "No Area"
}

console.log( Area(2,3)) // two areas

function Area(a) {
    return "One Area"
}

console.log( Area(2)) // one areas

function Area(a, b, c) {
    return "Three Areas"
}

console.log( Area(1,2,3)) // three areas

function Area(b, c) {
    return "Two Areas"
}

console.log( Area(2,3)) // two areas