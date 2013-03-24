var _ = require('underscore');
var Word = require('./Word.js');
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

var natural = require('natural'),
  tokenizer = new natural.WordTokenizer();

// database testing
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'wn_pro_mysql'
});

connection.connect();

// a dictionary class that simply takes an array of words and allows you to make queries about them
var Dictionary = function(wordList) {

	var wordList = fs.readFileSync(wordList).toString().split("\n");

	// make a self var to help us get here later
	this.words = [];
	this.wordList = wordList;

	// make a nice exception to help us later
	if(wordList == undefined) {
		wordList = ["dog", "cat", "hysteria"];
	}

	// local place to store words, gotta be a better way to do this
	this.scratchList = [];

	// run our initialization function
	this.setup(wordList);
}

// extend the EventEmitter class using our Radio class
util.inherits(Dictionary, EventEmitter);

Dictionary.prototype.wordExists = function(newWord) {
	var w = _.find(this.scratchList, function(word) {
		return word == newWord;
	});
	return w;
}

Dictionary.prototype.addWord = function(word) {

	if(this.wordExists(word)) {
		return true;
	} else {
		this.scratchList.push(word);
	}

}

Dictionary.prototype.tagWords = function() {

	// make a ref back to our object
	var self = this;

	// write our sql query for the word
	var sql = "select word, ss_type, max(tag_count) as max_tag from wn_synset WHERE word IN (" + connection.escape(this.scratchList) + ") GROUP BY word;";

	connection.query(sql, function(err, rows, fields) {
		if (err) throw err;
		_.each(rows, function(row) {
			// get our word record and tag the pos for it
			self.words.push(new Word(row.word, row.ss_type));
		});
		
		// we're done
		connection.end();
		self.emit('dictLoaded');
	});

}

Dictionary.prototype.getWord = function(word) {
	return _.find(this.words, function(item) {
		return item.word == word;
	});
}

Dictionary.prototype.getWordByPos = function(pos) {
	var w = _.find(_.shuffle(this.words), function(word) {
		return word.pos == pos;
	});
	if(w !== undefined) {
		return w;
	} else {
		return { word: "mustard", pos: "n" };
	}
}

Dictionary.prototype.setup = function(wordList) {

	var self = this;

	// loop through every line in our txt file
	_.each(wordList, function(sentence) {
		var words = tokenizer.tokenize(sentence);
		_.each(words, function(word) {
			if(word.length > 2) {
				self.addWord(word);
			}
		});
	});

	// tag all our words now that we've listed them all
	self.tagWords();
	
}



module.exports = Dictionary;