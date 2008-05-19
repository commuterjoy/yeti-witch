// unit tests for String.prototype.caverphone
var t_caverphone = function(){

	// check prototype has been loaded
	ok( "foo".caverphone, "Caverphone method is accessible");
	
	// two examples from the orginal paper - http://caversham.otago.ac.nz/files/working/ctp150804.pdf
	is( true, "STFNSN1111" == "Stevenson".caverphone(), "Stevenson");
	is( true, "PTA1111111" == "Peter".caverphone(), "Peter");
	
	// successes
	is( true, 1111111111 == "".caverphone(), "Empty string"); 
	is( true, "STFNSN1111" == "StEvENSon".caverphone(), "Mixed case");
	is( true, "STFNSN1111" == "Stev:-12enson9".caverphone(), "Non alphabetic characters (should be expunged)");
			
	// failures	
	is( false, "PTA" == "Peter".caverphone(), "Forgot to append the one's");
	is( false, "PTA1111111111" == "Peter".caverphone(), "Forgot to trim the string to first 10 characters");
	
}
t_caverphone.suiteName = "Caverphone";
