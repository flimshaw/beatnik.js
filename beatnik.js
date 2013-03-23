var _ = require('underscore');
// for each word in a sentence, pick a part of speech that can follow this word and then continue

function Word(str) {

	this.word = str;

	this.init();
}

Word.prototype.init = function() {
	
}

// eventually, this is what I want to run
var b = new Poem();


console.log(b.printBuffer());