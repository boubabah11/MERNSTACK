//any file or any block of code in javascript is termed as module
//user

var User = { 
    firstName : "ALex", 
    lastName : "Kim",
    getUserDetails : function () {
        return this.firstName +" "+ this.lastName
    }
 }

 var Address = { 
    homeAddress : "Somewhere on earth", 
    officeAddress : "Somewhere in universe"
 }



 module.exports = {Address, User};


 //create student objet with details and put a method to get student details use it in module usage
 // create one more object with name account and add similar method to get accountDetails  