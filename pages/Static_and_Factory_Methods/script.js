"use strict"

function Article() {
  this.created = new Date();
  Article.count++;

  Article.last = this.created;
}

Article.count = 0;

Article.showStats = function() {
  alert('Number: ' + this.count + '. Last: ' + this.last);
} 

Article.showCount = function() {
  alert(this.count);
};

new Article();
new Article();

Article.showStats();

new Article();
Article.showStats();

function Journal(date) {
  this.date = date;

  this.getTitle = function() {
    return "The release of " + Journal.formatDate(this.date);
  };
} 

Journal.compare = function(journalA, journalB) {
  return journalA.date - journalB.date;
};

Journal.formatDate = function(date) {
  return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
};

var journals = [
  new Journal(new Date(2012, 1, 1)),
  new Journal(new Date(2012, 0, 1)),
  new Journal(new Date(2011, 11, 1)),
];

function findMin(journals) {
  var min = 0;
  for (var i = 0; i < journals.length; i++) {
    if (Journal.compare(journals[min], journals[i]) > 0) min = i;
  } 
  return journals[min];
}

//alert(findMin(journals).getTitle());

//F A C T O R Y  M E T H O D S

function User() {
  this.sayHi = function() {
    alert("Hi, " + this.name);
  };
} 

User.createAnonymous = function() {
  var user = new User;
  user.name = 'Anonymous';
  return user;
};

User.createFromData = function(userData) {
  var user = new User;
  user.name = userData.name;
  user.age = userData.age;
  return user;
};

var guest = User.createAnonymous();
//guest.sayHi();

var knownUser = User.createFromData({
  name: 'Ainur',
  age: 18
});
//knownUser.sayHi();
