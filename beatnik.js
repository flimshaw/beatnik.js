var _ = require('underscore');
// for each word in a sentence, pick a part of speech that can follow this word and then continue

// a poem class, no input params as of yet
function Poem() {
	// a poem has a dictionary to query for words
	var dict = new Dictionary(["dog", "cat", "dinosaur"]);
	// and an array to store things in temporarily
	var poem = [];
}

// print out our poem buffer
Poem.prototype.printBuffer = function() {
	// a string to hold all our words
	var str;

	// loop through each word and make a string of it
	_.each(this.poem, function(sentence) {
		_.each(sentence, function(word) {
			str += word + " ";
			if(word == sentence.length) {
				str += "\n";
			}
		});
	});

	// return the rendered string
	return(str);
}

// a dictionary class that simply takes an array of words and allows you to make queries about them
function Dictionary(wordList) {

	// make a self var to help us get here later
	this.words = [];

	// make a nice exception to help us later
	if(wordList == undefined) {
		throw("Dictionary Error: wordList is undefined");
	}

	// run our initialization function
	this.init(wordList);

	console.log(this.words);
}


Dictionary.prototype.addWord = function(word) {
	// add check for duplicates here
	this.words.push(word);
}

Dictionary.prototype.init = function(wordList) {

	var self = this;
	// loop through all our words and generate a Word object for them
	_.each(wordList, function(word) {
		self.words.push(new Word(word));
	});
}


function Word(str) {

	this.word = str;

	this.init();
}

Word.prototype.init = function() {
	this.getPOS();
	this.getRhymingType();
}

// and finally, a Beatnik class
function Beatnik() {

}

Beatnik.prototype.getPoem = function() {
	// make a new poem object
	var p = new Poem();
	return(p.printBuffer());
}

// eventually, this is what I want to run
var b = new Beatnik();


console.log(b.getPoem());