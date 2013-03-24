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

	var w = new Word(word);
	var self = this;
	var sql = "select ss_type from wn_synset WHERE word = " + connection.escape(word) + " ORDER BY tag_count DESC LIMIT 1;";

	connection.query(sql, function(err, rows, fields) {
		if (err) throw err;
		if(rows.length > 0) {
			w.pos = rows[0].ss_type;
		} else {
			w.pos = "x";
		}
	  	
  		// add check for duplicates here
		self.words.push(w);
		if(self.words.length == self.wordList.length) {
			self.emit('dictLoaded');
			connection.end();
		}
	});

}

Dictionary.prototype.getWord = function(pos) {
	var w = _.find(_.shuffle(this.words), function(word) {
		return word.pos == pos;
	});
	if(w !== undefined) {
		return w.word;
	} else {
		return "mustard";
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
	
}



module.exports = Dictionary;