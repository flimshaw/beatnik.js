I pretty much date everything I write down.  Whenever I'm in a diner, or jotting down a note to myself, or occasionally recording a note while pretending to talk on my cellphone when I'm out for a walk, like some poor-posture hoodie Agent Cooper.  I was glad of that habit recently when I stumbled onto what is basically the first code I ever wrote a bit shy of ten years ago.  I apparently also enjoyed writing journal entries in my comments.  It would be a full 6 years before I would hear about [version control](http://en.wikipedia.org/wiki/Revision_control), so all my files would just be named "v005_new" and so on.  What a mess.

I was in an experimental video class, and I was always into randomly generated things, and I also kind of was a poetry slam kit when I was in high school, and also after that time.  So, I made a machine that wrote Beatnik poetry.  It was a really ratty PERL script running on this motherboard my friend Ashley gave me, I think in exchange for beer, but maybe also just because he was really nice.  Or I also may have told him I'd give it back to him someday.  It was overpowered for what it had to do, like a pentium 266Mhz or something.  A formidable beast even in late 2003.  This is a contraption that would have handily played Quake 2 while Napstering something in the background.  It was that level of computer.


But I didn't ask that much of it.  I just wanted it to write poems and scroll them across the screen in green type, scrolling them across a raw CRT in an aquarium like something out of Brazil.  I got some plexiglass cut at the local plastic place (Arch St. Plastic in Philadelphia) and cemented it together, got a little glue-on Ikea lamp and some Christmas lights for general ambiance.


I spent nights in diners.  Me and my buddy Paul would hang out at Silk City in Philadelphia, drinking coffee at night and smoking cigarettes, circling all the words in Howl with different colored pencils depending on the part of speech.  It was awesome.


I spend a lot of time in diners writing down ideas.  They're great for brainstorming, you can be there as long as you want, someone knows your name and brings you coffee all night long.  All for a couple bucks.  I remember spending nights then reading Howl and looking for patterns in sentences I might mimick.  It was all pretty over my head, especially on the programming side, so I decided to just make a few different rules to construct a sentence, given the way parts of speech could follow each other.  Here's the entire algorithm for writing poems:


# Strunk checks to see what words are valid for input by looking at
 
# the part of speech of the previous word used
 
sub strunk{
 
$privy = $_[1] - 1;
 
$prevword = $poem[$_[0]][$privy];
 
$nowword = $_[1] + 1;
 
# if there's only one word on the line
 
if($wordcount[$_[0]] < 2) {
 
@goods = (1, 2, 9);
 
$val = int( rand(3)) + 0;
 
return $goods[$val];
 
# if the previous word is an article
 
# NOTE: 10:22pm, testing a theory that clause lookouts only
 
# _really_ have to be in place if we're talking about the last
 
# word in a sentence...
 
} elsif($prevword == 0) {
 
if($wordcount[$_[0]] == $nowword) {
 
@goods = (5, 6, 7);
 
$val = int( rand(3)) + 0;
 
return $goods[$val];
 
} else {
 
@goods = (3, 4, 5, 6, 7);
 
$val = int( rand(5)) + 0;
 
return $goods[$val];
 
}
 
} elsif($prevword == 1) {
 
if($wordcount[$_[0]] == $nowword) {
 
                                @goods = (4, 5, 6, 7, 12);
 
                                $val = int( rand(5)) + 0;
 
                                return $goods[$val];
 
                        } else {
 
@goods = (3, 4, 5, 6, 7, 9, 10, 12);
 
$val = int( rand(8)) + 0;
 
return $goods[$val];
 
}
 
} elsif($prevword == 2) {
 
if($wordcount[$_[0]] == $nowword) {
 
# @goods = (4);
 
# $val = int( rand(3)) + 0;
 
# return $goods[$val];
 
return 4;
 
                        } else {
 
@goods = (4, 8, 9);
 
$val = int ( rand(3)) + 0;
 
return $goods[$val];
 
}
 
} elsif($prevword == 3) {
 
if($wordcount[$_[0]] == $nowword) {
 
                                @goods = (5, 6, 7, 12);
 
                                $val = int( rand(4)) + 0;
 
                                return $goods[$val];
 
                        } else {
 
@goods = (5, 6, 7, 12);
 
$val = int ( rand(4)) + 0;
 
return $goods[$val];
 
}
 
} elsif($prevword == 4) {
 
if($wordcount[$_[0]] == $nowword) {
 
# @goods = (5, 6, 7);
 
 # $val = int( rand(3)) + 0;
 
  # return $goods[$val];
 
    return 1;
 
                        } else {
 
@goods = (1, 2, 3, 4, 10);
 
$val = int ( rand(5)) + 0;
 
return $goods[$val];
 
}
 
} elsif($prevword > 4 && $prevword < 8) {
 
if($wordcount[$_[0]] == $nowword) {
 
# @goods = (5, 6, 7);
 
# $val = int( rand(3)) + 0;
 
# return $goods[$val];
 
return 4;
 
                        } else {
 
@goods = (9, 4);
 
$val = int ( rand(2)) + 0;
 
return $goods[$val];
 
}
 
} elsif($prevword == 8) {
 
if($wordcount[$_[0]] == $nowword) {
 
                                @goods = (4, 5, 6, 7);
 
                                $val = int( rand(4)) + 0;
 
                                return $goods[$val];
 
                        } else {
 
@goods = (3, 5, 6, 7, 10);
 
$val = int ( rand(5)) + 0;
 
return $goods[$val];
 
}
 
} elsif($prevword == 9) {
 
@goods = (0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11);
 
$val = int ( rand(11)) + 0;
 
return $goods[$val];
 
} elsif($prevword == 10) {
 
@goods = (5, 6, 7);
 
$val = int ( rand(3)) + 0;
 
return $goods[$val];
 
} elsif($prevword == 11) {
 
@goods = (1, 2);
 
$val = int ( rand(2)) + 0;
 
return $goods[$val];
 
} elsif($prevword == 12) {
 
@goods = (9, 4);
 
$val = int ( rand(2)) + 0;
 
return $goods[$val];
 
} else {
 
$val = int ( rand(12)) + 0;
 
return $val;
 
} 
}



I didn't really know about arrays and hashes, and so everything is based on number codes. It's about 8 times longer than it should be, here's how I'd write it in Javascript today:


// for each word in a sentence, pick a part of speech that can follow this word and then continue

// a word class
function Word(partOfSpeech) {
         
}


// a sentence class
function Sentence {
    
}


Here's how I started. It's an interesting problem, right? You could go a couple different ways. You could add a bunch of methods to the Word class to help determine what part of speech it is, but really that's part of the sentence. If this were a particle system, the words would be the particles, and the sentence is the emitter.

// 3.21.2013 - 8:36PM - Cafe Pamplona, Harvard Square, Cambridge, MA

OK.  Now I'm working on this in a coffee shop again.  This place rules.

So I began last time by starting to see how I was going to arrange my classes.  This is kind of an abstract thing we do in programming, and when it's first explained to you it's hard to understand.  There's more to it than just the inheritance aspect.  You can use it as a way to think conceptually and logically about the virtual mechanisms you're about to build.  In this case, we're making something that's going to _write_.  What should that look like?  What are the component parts?

Words, for sure.  We probably can stop at words, and don't need to deal with individual letters in any real way.  We're going to be assembling words in groups according to certain rules.  OK.  So we have Words, and we have Rules.  But what about at a higher altitude, what's our interface like?  If we were building a big machine that did this, we'd want a big crank on one side, a bunch of dials in the middle, and a roll of paper at the end where the poem comes out.  What's the best way to apply these rules?

Well, if you're me 10 years ago, you'd code a giant tangled if statement to do it, it'd start with the first word in a sentence, and pick a random part of speech for it.  Then it would go to the next word, and pick a part of speech that was _technically compatible_ with the previous word.  So, if you picked a transitive verb for your first word, like "ate", your next word could be an adjective like "hollow-eyed", or a noun like "windows".  Pretty much anything goes for transitive verbs.  But say the first word was an adverb instead, like "incomparably".  What can follow that?  Well, an adverb is a word that modifies a _verb_, an _adjective_ or another _adverb_.  Much more limited.  And since there really weren't all that many adverbs in Howl (looks like I have 17 here), you see them pop up an awful lot.

This works.  And often if you give a little spitshine to the number and case, it produces passable beatnik poetry.  Here, I'll fire it up:

    Beatnik Box v2.07 Alpha - Poem #52464

    9106424 36 41074 0424 3743741 8641 741 9854374 6941 3 105424 85 06 7416 696

     and my raftsman firmly yacketayakking peacefully
     Tangerian the Hanged Man
     impossibly her empty lots often
     an often vibrated peacefully
     stale south just waking Fugazzi's saintly become
     around hands impossibly hallucinating
     mountaintops strangely erase
     but beside plate peacefully hot world impossibly
     Madame Sosostris and endlessly praise
     expected
     her wreathes supernatural sprout tightly
     from seas
     the the dead
     backyard saintly fix Mrs. Equitone
     Footman but sailors

**snaps**

Super simple rules, that's all that's happening.  The program above is a machine that does this.  But in this one, there's no knobs, just a crank and a piece of paper.  This makes the poetry always have a particular style, with the same rules applied the same way every time, with the poem and maximum sentence length varying at random.  We need to expose these rules so we can experiment.  And we need to expose an easy way to vary our vocabulary for each poem.  We need a modular, flexible setup that's will let us add new rules to apply in different combinations.  Maybe we want a rhyming poem that only uses medical vocabulary.  Maybe we want haikus made up of words from Wayne's World 2.  Perhaps we want a sonnet's words rearranged as a limerick.  What should a machine like that look like?  We deserve this machine, and we can build it.

This is kind of the most fun part of programming.  You're in front of a white board, or at a diner with a notebook and a horrible stale coffee, and you're just thinking about how you'd build a machine.  Not worrying about how any of it will go together exactly, this is the stage where you get to just think in abstractions.

So, let's attack it from the position of the user.  Which knobs would we want to turn?

IDEAS:

1.  poem style [string selector], (too vague?)
2.  poem length range [min, max] - in lines (subject to limitations of the poem style, haiku's do not allow this)
3.  vocabulary [list of dictionaries]

Let's start with that.  How would we structure this with code?

It seems prudent that something like getPoem(style) is the way we'd want to interact with this.  We want to instantiate a particular type of object that will expose certain interfaces to us to modify.  If this were a machine, this might be a rack mount where you'd build a bunch of different modules that all had standardized DICTIONARY inputs and POETRY outputs.  We wanna put words into it, and get poems out of it.  It should expose a few standardized interfaces to us that it chooses.

But how should the heirarchy work?  What should our most granular type of poem do?  Let's sketch out our classes a bit more:

    // a poem class, no input params as of yet
    function Poem() {
        // a poem has a dictionary to query for words
        var dict = new Dictionary(["dog", "cat", "dinosaur"]);
        // and an array to store things in temporarily
        var poem = [];
    }

Our poem needs an array to store its words and sentences, and a dictionary of words to work with.  Now, in real life, poems don't know anything about the words they contain, it seems like our poem should query our Dictionary object when it needs to find words that match the criteria it needs.  So, for our default poem, let's recreate the simple grammatical algorithms used by the Beatnik Box.  Doing things in an object oriented way means that we don't lose our focus on the details of how some other object will perform our task for us.  Initially, pretend there is a Dictionary object that will do anything we want it to, and write some code that interacts with it in that way.  Later, we'll write some functions that do whatever we imagined.

So!  Let's make a generatePoem function, just roughly now, premature optimization is the devil:

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
            sentence[word] = new Word();
        }
    }

}

OK, lets' stop here.  This is the gist of how writing poems should work from the poem's point of view.  It just wants to fill an array with words.  The trick to recreate the Beatnik algorithm is to choose compatible words based on the previous word in the sentence.  So, our part of speech chooser needs access to our sentence, and our position in it.  Hmmm.  What's the best way to decouple this behavior to make exciting combinations of rules possible?

Premature optimization is the devil!  While it's good to be mindful of how a thing will scale eventually, when you're writing your first lines of code, it's more important to get something working that you can start to play with.  It's a careful balance as a programmer not to optimize too early, lest you begin optimizing and never actually produce code that compiles.

3.23.13 6:33pm - updates

OK, this is getting unwieldy already.  Let's split this into multiple files so we can work with it more easily.

OK, that's better, I did a little more cleanup as well, and now we're printing out things that look sort of like poems.

~/code/beatnik.js$ node main.js
Hello Hello Hello Hello Hello.
Hello Hello Hello Hello Hello.
Hello Hello.
Hello Hello Hello Hello Hello.
Hello Hello Hello Hello.
Hello.
Hello Hello Hello Hello.
Hello Hello.
Hello Hello Hello.
Hello Hello Hello Hello.

Now we just need to pick random words from a dictionary.