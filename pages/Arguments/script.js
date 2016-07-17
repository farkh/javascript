"use strict"

var sayHi = function() {
  for (var i = 0; i < arguments.length; i++) {
    alert("Hi, " + arguments[i]);
  }
};

var copy = function(dst) {
  for (var i = 1; i < arguments.length; i++) {
    var arg = arguments[i];

    for (var key in arg) {
      dst[key] = arg[key];
    } 
  } 

  return dst;
};

var user = {
  isAdmin: false,
  isEmailConfirmed: true,
};

var mark = {
  age: 21,
  name: 'Mark',
  surname: 'Watney'
};

var student = {
  university: 'KPFU'
};

copy(mark, user, student);

function showWarning(width, height, title, contents) {
  width = width || 200;
  height = height || 100;
  title = title || "Untitled";
};

var f = function sayHi(name) {
  alert(sayHi);
};


