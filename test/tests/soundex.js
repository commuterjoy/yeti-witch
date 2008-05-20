// unit tests for String.prototype.soundex
var t_soundex = function(){

	// check prototype has been loaded
	ok( "foo".soundex, "Soundex method is accessible");

	var london = "L535"

	// successes
	is( true, london == "london".soundex(), "Simple");
	is( true, london == "lONDoN".soundex(), "Mixed case");
	is( true, london == ".,lon123don".soundex(), "Non-alphabetic characters");
	is( true, london == "l on do n".soundex(), "Whitespace");

	// less than 4 characters should be zero-suffixed
	is( true, "L000" == "l".soundex(), "Single character");
	is( true, "L530" == "lond".soundex(), "4 characters"); 
			
	// various misspellings of the word London should all resolve to the same soundex key
	is( true, london == "londn".soundex(), "London i");
	is( true, london == "londdn".soundex(), "London ii");
	is( true, london == "lnodon".soundex(), "London iii");
	is( true, london == "londan".soundex(), "London iv");
	is( true, london == "lnodno".soundex(), "London v");
	
	// likewise, various mispellings that don't generate a correct key
	is( false, london == "kondon".soundex(), "London vi");
	is( false, london == "lpmdon".soundex(), "London vii");
	is( false, london == "lonzom".soundex(), "London viii");
		
}
t_soundex.suiteName = 'Soundex';
