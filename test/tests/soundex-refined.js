// unit tests for String.prototype.soundex
var t_soundexRefined = function(){

	// check prototype has been loaded
	ok( "foo".soundexRefined, "Refined Soundex method is accessible");
	
	// successes
	is( true, "T6036084" == "testing".soundexRefined(), "Simple");
	
}
t_soundexRefined.suiteName = 'Refined Soundex';
