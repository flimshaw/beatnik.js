var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('dictDone', function(message){
    console.log(message);
});

var Poem = require("./Poem.js");

var p = new Poem();

p.on('ready', function() {
	console.log(p.getPoem());
});

