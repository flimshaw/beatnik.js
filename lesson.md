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




