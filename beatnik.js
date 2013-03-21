// for each word in a sentence, pick a part of speech that can follow this word and then continue

// a word class
function Word(partOfSpeech) {
		
}

// a sentence class
function Sentence(length) {
	
}

// a poem class, no input params as of yet
function Poem() {

}

// and finally, a Beatnik class
function Beatnik() {

}

Beatnik.prototype.getPoem = function() {
	return("I'm a poem.")
}

// eventually, this is what I want to run
var b = new Beatnik();


console.log(b.getPoem());