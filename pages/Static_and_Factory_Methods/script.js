"use strict"

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
