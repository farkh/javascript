'use strict'

var user = {
  name: 'Farkh',
};

user.sayHi = function() {
  alert("Hello, " + this.name + "!");
};

function func() {
  alert(this);
};

var calculator = {
  read: function() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },

  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  }
};

//calculator.read();
//alert(calculator.sum());
//alert(calculator.mul());

var ladder = {
  step: 0,
  
  up: function() {
    this.step++;
    return this;
  },
  
  down: function() {
    this.step--;
    return this;
  },

  showStep: function() {
    alert(this.step);
    return this;
  }
};

//ladder.up();
//ladder.up();
//ladder.down();
//ladder.showStep();

ladder.up().up().down().up().down().showStep();
