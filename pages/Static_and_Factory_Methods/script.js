"use strict"

/*
function Article() {
  Article.count++;
} 

Article.count = 0;
Article.DEFAULT_FORMAT = "html";

Article.showCount = function() {
  alert(this.count);
};

new Article();
new Article();
Article.showCount();
*/

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

