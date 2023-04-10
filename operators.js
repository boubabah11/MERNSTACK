// operators : like arithmetic operators
// >, <, >=, =<, =, ==, ===, &&, ||, ! ..........

var validAge = 18;
var validProof = "valid";

//if (validProof == "valid" && validAge == 18) // Compare only value not data type
//if (validProof == "valid" && validAge === 18) // Compare  value with data type
if (validProof && validAge >= 18)
{
    console.log("valid voter ! can vote")
}
else
{
    console.log("invalid voter ! can't vote")
}
// ternary operator 

//operators ? if true : if false

validProof && validAge == 18 ? console.log("valid voter! can vote") : console.log("invalid voter! can't vote")
