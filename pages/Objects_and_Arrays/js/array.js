"use strict"

var todoList = [];

function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

// Возвращает массив из элементов [2;4)
console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

//Склеивает массивы
var array_1 = [0, 1, 2, 3];
var array_2 = [2, 3, 4, 5];
console.log(array_1.concat(array_2));
