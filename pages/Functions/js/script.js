'use strict'

var getLast = function(array) {
  return array[array.length - 1];
};

var addLast = function(array, element) {
  return array.push(element);
};

var sumOfElemetns = function(array) {
  var value;
  while (true) {
    value = prompt("Enter the value");
    if (value === '' || value === null || isNaN(value)) break;
    
    array.push(+value);
  }
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  
  return sum;
};

var find = function(array, value) {
  var index = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
    }
  }

  return index;
};

var filterRange = function(array, a, b) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] >= a && array[i] <= b) {
      newArray.push(array[i]);
    } 
  }

  return newArray;
};
