"use strict"

/*
var day1 = {
  squirrel: false,
  events: ["work", "code", "design", "music"],
  "7": "Russia"
};

day1.work = true;

var journal = [
  {events: ["work", "music", "code"],
   squirrel: true
  },
  {events: ["weekend", "design", "books"],
   squirrel: false
  },
  {events: ["work", "code", "design", "music"],
   squirrel: true
  }
]

*/

// M U T A B I L I T Y

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// J O U R N A L
var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

addEntry(["work", "music", "donuts"], false);
addEntry(["weekend", "film", "juice"], false);
addEntry(["work", "music", "juice"], false);
addEntry(["gym", "weekend"], true);
addEntry(["gym", "work", "juice"], false);
addEntry(["work", "film", "juice"], false);
addEntry(["gym", "music", "film", "donuts"], true);


function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) / 
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

var map = {};

function storePhi(event, phi) {
  map[event] = phi;
}

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(journal);

for (var event in correlations) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < 0.1)
    console.log(event + ": " + correlation);
}

for (var i = 0; i < journal.length; i++) {
  var entry = journal[i];
  if (hasEvent("gym", entry) &&
      !hasEvent("juice", entry))
    entry.events.push("gym without juice");
}

console.log(entry.events);
console.log(phi(tableFor("gym without juice", journal)));


























