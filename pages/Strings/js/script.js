"use strict"

var string1 = " trim() deletes spaces in the begining and end of the string     \n";
console.log(string1.trim());

//A R G U M E N T S
function addEntry(squirrel) {
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++) 
    entry.events.push(arguments[i]);
  journal.push(entry);
}

console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.round(Math.random() * 10));

//window - объект, который хранит все глобальные перменные

var myVar = 10;
console.log("myVar" in window);
console.log(window.myVar);

//E X E R S I C E S

function range(start, end, step) {
  var move = 1;
  if (step != undefined)
    move = step;
  var output = [];

  if (move < 0) {
    for (var i = start; i >= end; i += move)
      output.push(i);
  } else {
    for (var i = start; i <= end; i += move)
      output.push(i);
  }

  return output;
}

function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++)
    sum += array[i];

  return sum;
}

function reverseArray(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

function reverseArrayInPlace(array) {
  var buf;
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    buf = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = buf;
  }

  return array;
}

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }

  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

function prepend(value, list) {
  return list = {value: value, rest: list };
}

function nth(list, number) {
  if (number == 0)
    return list.value;
  else
    return nth(list.rest, number - 1);
}