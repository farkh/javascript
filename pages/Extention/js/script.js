"use strict"

function charPad(array, char) {
  for (var i = 0; i < array.length; i++) {
    if (char == "!" || char == "site:")
      array[i] = char + array[i];
    else if (char == "\"")
      array[i] = char + array[i] + char;
    else
      console.log("Invalid charPad()s argument.")
  }

  return array;
}

function notContained(keywords) {
  var keywords = new Array();
  for (var i = 0; i < arguments.length; i++) {
    keywords[i] = arguments[i];
  }

  return charPad(keywords, "!");
}

function exactlyContained(keywords) {
  var keywords = new Array();

  for (var i = 0; i < arguments.length; i++) {
    keywords[i] = arguments[i];
  }

  return charPad(keywords, "\"");
}

function site(link) {
  var sites = new Array();

  for (var i = 0; i < arguments.length; i++) {
    sites[i] = arguments[i];
  }

  return charPad(sites, "site:");
}

function searcher() {
  var link = prompt("Enter site:");
  var contains = prompt("Enter word, that exactly contains:");
  var notContains = prompt("Enter word, that NOT contains:");

  var search = site(link) + " " + notContained(notContains) + " " + exactlyContained(contains);
  alert(search);
}

searcher();