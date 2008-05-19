// unit tests for String.prototype.anagram
var t_anagrams = function(){
	
	// check prototype has been loaded
	ok( "foo".isAnagram, "Anagram method is accessible");
	
	// simple tests designed to succeed
	is( true, "foo".isAnagram('oof'), "Simple anagrams - backwards");
	is( true, "foo".isAnagram('ofo'), "Simple anagrams - random");
	is( true, "foo".isAnagram('foo'), "Simple anagrams - same as input");
	is( true, "f".isAnagram("f"), "Simple anagrams - single characters");
	is( true, "foo".isAnagram('oFO'), "Mixed casing");
	is( true, ".,foo123".isAnagram('3.o1,2of'), "Non-alphabetic characters");
	is( true, "Fawlty Towers".isAnagram('Flowery Twats'), "Whitespace");
	is( true, "yeti witch, burst racoon, fleshstudio".isAnagram('White City, Barons Court, Southfields'), "Long string");
	is( true, new String(931413501).isAnagram('931413501'), "Anagramatic numbers"); // ie. automatically casting int to string

			
	// failures	
	is( false, "".isAnagram(""), "Empty string");
	is( false, "foo".isAnagram(), "Missing argument");
	is( false, "foo".isAnagram(''), "Empty argument");
	is( false, "foo".isAnagram(123), "Argument with wrong datatype (int)");
	is( false, "foo".isAnagram('fooo'), "Bad argument length");
	is( false, "foo".isAnagram('doo'), "Wrong characters");

}
t_anagrams.suiteName = "Anagrams";