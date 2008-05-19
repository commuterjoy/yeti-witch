// unit tests for String.prototype.metaphone
var t_metaphone = function(){
	
	// check prototype has been loaded
	ok( "foo".metaphone, "Metaphone method is accessible");

	var london = "LNTN";
	
	// successes
	is( true, london == "london".metaphone(), "Simple");
	is( true, london == "lONDoN".metaphone(), "Mixed case");
	is( true, london == ".,lon123don".metaphone(), "Non-alphabetic characters");
	is( true, london == "l on do n".metaphone(), "Whitespace");
	is( true, "L" == "l".metaphone(), "Single character");  // nb. different to soundex
	is( true, "Floccinaucinihilipilification".metaphone(20).length == 15, "Key length");  // nb. different to soundex

	// various misspellings of the word London should all resolve to the same metaphone key
	is( true, london == "londn".metaphone(), "London i");
	is( true, london == "londdn".metaphone(), "London ii");
	is( true, london == "lnodon".metaphone(), "London iii");
	is( true, london == "londan".metaphone(), "London iv");
	is( true, london == "lnodno".metaphone(), "London v");

	// likewise, various mispellings that don't generate a correct key
	is( false, london == "kondon".metaphone(), "London vi");
	is( false, london == "lpmdon".metaphone(), "London vii");
	is( false, london == "lonzom".metaphone(), "London viii");
	
	// various misspellings of the word Birmingham with different key lengths 
	is( true, "BRMNKM" == "birmingham".metaphone(6), "London ix");
	is( true, "BRMNK" == "birmingham".metaphone(5), "London x");
	is( true, "BRMN" == "birmingham".metaphone(4), "London xi");

	is( true, "LNT" == "londan".metaphone(3), "London xii");
	is( true, "L" == "lnodno".metaphone(1), "London xiii");

	// metaphone has specific rules for some first letters 
	is( true, "WRL" == "whirling".metaphone(3), "WH prefix");
	is( true, "NWN" == "knowing".metaphone(3), "KN prefix");
	is( true, "NMT" == "pneumatic".metaphone(3), "PN prefix");
	is( true, "RNX" == "wrench".metaphone(3), "WR prefix"); // nb. special rule for CH too 
	is( true, "SR" == "xray".metaphone(3), "X prefix");
	is( true, "E0" == "aethe".metaphone(3), "AE prefix");
	
	// a selection of other words that test various functions
	is( true, "RX" == "ratio".metaphone(3), "regionMatch");
	is( true, "ANT0S" == "antithesis".metaphone(5), "TH");
	is( true, "XKX" == "chcachcccc".metaphone(3), "Correct C trimming");

}
t_metaphone.suiteName = 'Metaphone';
