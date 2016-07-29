"use strict"

//Constructor

function Animal(name) {
  this.name = name;
  this.canWalk = true;
}

var animal = new Animal("Hedgehog");

/* O R
var animal = function() {
  this.name = "Hedgehog";
  this.canWalk = true;
}
*/

//returns object, not this
function BigAnimal() {
  this.name = "Mouse";
  return { name: "Godzilla" };
}

//returns this
function BigAnimal() {
  this.name = "Mouse";
  return "Mouse";
} 

/*creating methods in constructor
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert("My name is " + this.name);
  };
}


var ivan = new User("Ivan", "Ivanov");
ivan.sayHi();

*/

//local variables
function User(firstName, lastName) {
  var phrase = "Hello";
  
  function getFullName() {
    return firstName + ' ' + lastName;
  } 

  this.sayHi = function() {
    alert(phrase + ', ' + getFullName());
  };
} 

//E X E R S I C E S
/*
function Calculator() {
  this.read = function() {
    this.a = +prompt("Enter a: ");
    this.b = +prompt("Enter b: ");
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
} 

var calculator = new Calculator();
calculator.read();

alert("Sum = " + calculator.sum());
alert("Multiplication = " + calculator.mul());
*/

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt("Number: ", 0);
  };
} 

/*
var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
*/

function Calculator() {
  var methods = {
    "-": function(a, b) {
      return a - b;
    },
    "+": function(a, b) {
      return a + b;
    } 
  };

  this.calculate = function(str) {
    var split = str.split(" "),
        a = +split[0],
        op = split[1],
        b = +split[2];

    return methods[op](a, b);
  } 

  this.addMethod = function(name, func) {
    methods[name] = func;
  } 


}

var calc = new Calculator();
alert(calc.calculate("7 + 3"));

calc.addMethod("*", function(a, b) { return a * b; });
calc.addMethod("/", function(a, b) { return a / b; });

alert(calc.calculate("5 * 3"));
alert(calc.calculate("10 / 2"));
