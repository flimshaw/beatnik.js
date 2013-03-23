var _ = require('underscore');
var Word = require('./Word.js');

// a dictionary class that simply takes an array of words and allows you to make queries about them
var Dictionary = function(wordList) {

	// make a self var to help us get here later
	this.words = [];

	// make a nice exception to help us later
	if(wordList == undefined) {
		wordList = ["foo", "bar"];
	}

	// run our initialization function
	this.init(wordList);

}


Dictionary.prototype.addWord = function(word) {
	// add check for duplicates here
	this.words.push(word);
}

Dictionary.prototype.getWord = function() {
	return "Hello";
}

Dictionary.prototype.init = function(wordList) {

	var self = this;
	// loop through all our words and generate a Word object for them
	_.each(wordList, function(word) {
		self.words.push(new Word(word));
	});
}

module.exports = Dictionary;