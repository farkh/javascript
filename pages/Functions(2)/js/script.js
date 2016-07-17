"use strict"

function triangle(h) {
	var word = "#";

	for (var i = 0; i < h; i++) {
    console.log(word + '\n');
    word += "#";
	}
}

function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function cheese() {
  var oddLine = "# # # # ";
  var evenLine = " # # # #";

  for (var i = 1; i <= 8; i++) {
    if (i % 2 == 1) {
      console.log(oddLine + '\n');
    } else {
      console.log(evenLine + '\n');
    }
  }
}

/*
function power(number, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;

  for (var count = 0; count < exponent; count++) {
    result *= number;
  }

  return result;
}
*/

function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

function multiplier(factor) {
  return function(number) {
    return factor * number;
  };
}

function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }

  return find(1, "1");
}

/*
function printFarmInventory(cows, chickens) {
  var cowString = String(cows);
  var chickenString = String(chickens);

  while (cowString.length < 3)
    cowString = "0" + cowString;

  console.log(cowString + " Cows");

  while (chickenString.length < 3)
    chickenString = "0" + chickenString;

  console.log(chickenString + " Chickens");
}
*/

function zeroPad(number, width) {
  var string = String(number);

  while (string.length < width)
    string = "0" + string;

  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

//E X E R S I Z E S

function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

function isEven(number) {
  if (Math.abs(number) == 0)
    return true;
  else if (Math.abs(number) == 1)
    return false;
  else return isEven(Math.abs(number) - 2);
}

/*
function countBs(string) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == "B")
      count++;
  }
  return count;
}
*/

function countChar(string, char) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == char)
      count++;
  }
  return count;
}