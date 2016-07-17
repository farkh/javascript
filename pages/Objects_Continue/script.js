"use strict"

function speak(line) {
  console.log("The " + this.type + " rabbit says: '" + line + "'.");
}

var whiteRabbit = { type: "white", speak: speak };
var brownRabbit = { type: "brown", speak: speak };

//whiteRabbit.speak("lol");
//brownRabbit.speak("brown_lol? -_-");

var protoRabbit = {
  speak: function(line) {
    console.log("The " + this.type + " rabbit says: " + line + ".");
  }
};

//Constructor
function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says: " + line + ".");
};

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);

killerRabbit.teeth = "veeery sharp";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
