"use strict"

function showFullName(firstPart, lastPart) {
  alert(this[firstPart] + " " + this[lastPart]);
}

var user = {
  firstName: "Ainur",
  surname: "Farkh",
  patronym: "P A T R O N Y M"
};

//showFullName.call(user, 'firstName', 'surname');
//showFullName.call(user, 'firstName', 'patronym');

//METHOD B O R R O W I N G
/*
function printArgs() {
  arguments.join = [].join;

  var argStr = arguments.join(':');
  alert(argStr);
} 

printArgs(1, 2, 3);
*/

//Without copying
/*
function printArgs() {
  var join = [].join;

  var argStr = join.call(arguments, ':');

  alert(argStr);
}

printArgs(1, 2, 3);
*/

//With slice()
function printArgs() {
  var args = [].slice.call(arguments);
  alert(args.join(';'));
}

//printArgs(1, 2, 3, 4, 5);

// A P P L Y
//Takes an array, not a list!
var arr = [];
arr.push(1);
arr.push(5);
arr.push(2);

alert(Math.max.apply(null, arr));

//E X E R C I S E S
function sumArgs() {
  //code
} 

alert(sumArgs(1, 2, 3));
