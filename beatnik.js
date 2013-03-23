var _ = require('underscore');
// for each word in a sentence, pick a part of speech that can follow this word and then continue

// a poem class, no input params as of yet
function Poem() {
	// a poem has a dictionary to query for words
	this.dict = new Dictionary(["dog", "cat", "dinosaur"]);
	// and an array to store things in temporarily
	this.poem = [];

	this.generatePoem();
}

// poem generation method
Poem.prototype.generatePoem = function() {

    // a random number of sentences between 3 and 13
    var poemLength = Math.floor(Math.random() * 10 + 3);

    // a random maximum length for each line between 1 and 6 words
    var lineMaxLength = Math.floor(Math.random() * 5 + 1);

    // for each line in our poem
    for(var line = 0; line < poemLength; line++) {
        
        // initialize an array to hold our words up to as large as our max length
        var sentence = new Array(Math.floor(Math.random() * lineMaxLength + 1));

        // for each word in our line
        for(var word = 0; word < sentence.length; word++) {

            // grab a valid word from our dictionary
            sentence[word] = this.dict.getWord();
        }

        this.poem.push(sentence);
    }

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


function Word(str) {

	this.word = str;

	this.init();
}

Word.prototype.init = function() {
	
}

// eventually, this is what I want to run
var b = new Poem();


console.log(b.printBuffer());