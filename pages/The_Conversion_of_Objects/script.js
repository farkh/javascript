"use strict"

//Boolean conversion

//if ({} && []) alert("All objects - true");

//String
var user = {
  firstName: 'Ainur',

  toString: function() {
    return 'User ' + this.firstName;
  } 
};

//alert(user);

//Numerical

var room = {
  number: 712,

  valueOf: function() { return this.number; },
  toString: function() { return this.number; }
};

//alert(+room);
//delete room.valueOf();
//alert(+room);

//alert(+new Date);

var a = {
  valueOf: function() {
    return "1";
  }
};

var b = {
  valueOf: function() {
    return "2";
  }
};

//alert(a + b);
//alert(a - b);

var obj = {
  valueOf: function() {
             return "This is an object";
           } 
};

//LOL
var value = new Boolean(false);

//alert(value);

/*
if (value) {
  alert(true);
};
*/

//Objects always == true

//Exercises

function sum(a) {
  var currSum = a;

  function f(b) {
    currSum += b;
    return f;
  }
  
  f.toString = function() {
    return currSum;
  };

  return f;
};

alert(sum(1)(2));
alert(sum(1)(2)(3));
alert(sum(1)(3)(5)(7)(9)(11));
