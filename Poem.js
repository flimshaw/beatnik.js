var _ = require("underscore");
var Dictionary = require("./Dictionary.js");

// a poem class, no input params as of yet
function Poem() {
	// a poem has a dictionary to query for words
	this.dict = new Dictionary(["dog", "cat", "dinosaur"]);
	// and an array to store things in temporarily
	this.poem = [];

	// write our poem
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

module.exports = Poem;