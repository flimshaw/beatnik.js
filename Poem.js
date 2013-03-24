var _ = require("underscore");
var Dictionary = require("./Dictionary.js");
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var posArray = ['n', 'v', 'a', 'r'];

// a poem class, no input params as of yet
function Poem() {

	// a poem has a dictionary to query for words
	this.dict = new Dictionary('brscript.txt');
	// and an array to store things in temporarily
	this.poem = [];

	var self = this;

	// when our dictionary has loaded all its words
	this.dict.on('dictLoaded', function() {
		self.emit('ready');
	});
}

// extend the EventEmitter class using our Radio class
util.inherits(Poem, EventEmitter);

// poem generation method
Poem.prototype.generatePoem = function() {

    // a random number of sentences between 3 and 13
    var poemLength = Math.floor(Math.random() * 15 + 3);

    // a random maximum length for each line between 1 and 6 words
    var lineMaxLength = Math.floor(Math.random() * 8 + 3);

    // for each line in our poem
    for(var line = 0; line < poemLength; line++) {
        
        // initialize an array to hold our words up to as large as our max length
        var sentence = new Array(Math.floor(Math.random() * lineMaxLength + 1));

        // for each word in our line
        for(var word = 0; word < sentence.length; word++) {

            // grab a valid word from our dictionary
            sentence[word] = this.pickWord(sentence, word);
        }

        this.poem.push(sentence);
    }

}

// public function for getting a poem
Poem.prototype.getPoem = function() {
	this.generatePoem();
	return this.getBuffer();
}

// get compatible parts of speech for the given prior word
Poem.prototype.getCompatiblePos = function(pos) {
	switch(pos) {
		// verbs can modify nouns and adjectives
		case 'v':
			return ['n', 'a'][_.random(0, 1)];
			break;
		// adjectives can modify nouns
		case 'a':
			return 'n';
			break;
		// adverbs can modify verbs, adverbs or adjectives
		case 'r':
			return ['v', 'a', 'r'][_.random(0, 2)];
			break;
		// nouns can be followed by any non noun
		case 'n':
			return ['v', 'a', 'r'][_.random(0, 2)];
			break;
	}
}
// rules for getting this word
Poem.prototype.pickWord = function(sentence, idx) {
	// if we're the first word, pick whatever we want
	if(idx == 0) {
		return this.dict.getWordByPos(posArray[Math.floor(Math.random()*posArray.length)]);
	} else {
		return this.dict.getWordByPos(this.getCompatiblePos(sentence[idx - 1].pos));
	}

}

// print out our poem buffer
Poem.prototype.getBuffer = function() {
	// a string to hold all our words
	var str = "";

	// loop through each word and make a string of it
	_.each(this.poem, function(sentence) {
		_.each(sentence, function(word, i) {
			if(word !== undefined) {
				str += word.word;
				if(i == sentence.length - 1) {
					str += "\n";
				} else {
					str += " ";
				}				
			}
		});
	});

	// return the rendered string
	return str;
}

module.exports = Poem;