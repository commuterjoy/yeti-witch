// unit tests for String.prototype.levenshtein
var t_levenshtein = function(){

	// check prototype has been loaded
	ok( "foo".levenshtein, "Levenshtein method is accessible");
	
	// simple tests designed to succeed
	is( true, 0 == "foo".levenshtein('foo'), "Same input");	
	is( true, 1 == "foo".levenshtein('ooo'), "Edit distance of 1");	
	is( true, 2 == "foo".levenshtein('dog'), "Edit distance of 2");	
	is( true, 0 == "foo".levenshtein('FOO'), "Case insenstive");
	is( true, 0 == "foo".levenshtein('F O O'), "Whitespace"); // should remove whitespace
	is( true, 0 == "foo".levenshtein('£F+O.O'), "Non-alpha characters"); // should remove whitespace
	is( true, 7 == "white city".levenshtein('yeti witch'), "Edit distance of 1");	
	
	// failures	
	is( false, "".levenshtein(""), "Empty string");
	is( false, "foo".levenshtein(), "Missing argument");
	is( false, "foo".levenshtein(''), "Empty argument");

}
t_levenshtein.suiteName = "Levenshtein";
