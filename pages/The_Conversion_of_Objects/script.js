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

alert(+new Date);
