"use strict"

//var user = {};

/*
 * First way
 * user.name = "Ainur";
*/


//Second way
/*S T A N D A R T   Property  (You can delete, edit, list)
Object.defineProperty(user, "name", { value: "Ainur", configurable: true, enumerable: true, writable: true });
*/

/*
 * The property-C O N S T A N T
Object.defineProperty(user, "name", {
  value: "Ainur",
  configurable: false,
  writable: false
});
*/

/*
var user = {
  name: "Ainur",
  toString: function() { return this.name; }
};

for (var key in user) alert(key);

Object.defineProperty(user, "toString", { enumerable: false });

for (var key in user) alert(key);
*/

/*
var user = {
  firstName: "Ainur",
  surname: "Farkh"
};

Object.defineProperty(user, "fullName", {
  get: function() {
         return this.firstName + ' ' + this.surname;
       },
  set: function(value) {
         var split = value.split(' ');
         this.firstName = split[0];
         this.surname = split[1];
       } 
});

user.fullName = "Ivan Ivanov";
alert(user.firstName);
alert(user.surname);
*/

//O R ...
//This way

/*
var user = {
  firstName: "Ainur",
  surname: "Farkh",

  get fullName() {
    return this.firstName + ' ' + this.surname;
  },

  set fullName(value) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.surname = split[1];
  } 
};

alert(user.fullName);

user.fullName = "Ivan Ivanov";
alert(user.firstName);
alert(user.surname);


function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get: function() {
           var todayYear = new Date().getFullYear();
           return todayYear - this.birthday.getFullYear();
         } 
  });
} 

var bruce = new User("Bruce", new Date(1987, 6, 1));

alert(bruce.name);
alert(bruce.birthday);
alert(bruce.age);
*/

/*D E F I N E. P R O P E R T I E S
var user = {};

Object.defineProperties(user, {
    firstName: {
                  value: "Bruce"
               },
    surname: {
                value: "Wayne"
             },
    fullName: {
                get: function() {
                       return this.firstName + ' ' + this.surname;
                     } 
              } 
});

alert(user.fullName);
*/

// E X E R C I S E S
function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties(this, {
    firstName: {
                 get: function() {
                        return this.fullName.split(' ')[0];
                      },
                 set: function(newFirstName) {
                        this.fullName = newFirstName + ' ' + this.lastName;
                      } 
               },
    lastName: {
                get: function() {
                       return this.fullName.split(' ')[1];
                     },
                set: function(newLastName) {
                       this.fullName = this.firstName + ' ' + newLastName;
                     } 
              } 
  });
} 

var barry = new User("Barry Allen");
alert(barry.firstName);
alert(barry.lastName);
barry.firstName = "BARRY";
alert(barry.firstName);
