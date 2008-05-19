/**
 * @author chadbm01
 */

load("lib/caverphone.js");
load("lib/levenshtein.js");
load("lib/metaphone.js");
load("lib/porter-stemmer.js");
load("lib/soundex.js");
load("lib/soundex-refined.js");

importPackage(java.io);
 
/**
 * 
 * @param {Object} test
 */
function main( test ){
	
	var dictionary = new BufferedReader(new FileReader("dictionary/location"));
	
	var lookup = {};
	var line;
	
	while ((line = dictionary.readLine()) != null) {
		
		var s = new String(line).soundex();
	//	var sr = new String(line).soundexRefined();
		var l = new String(line).levenshtein('london');
		var m = new String(line).metaphone();
			
		lookup[s];
		
		//print(line + ':' + soundex + ',' + metaphone + ',' + levenshtein);
		//print(line + ':' + "london".levenshtein(new String(line)));
		}

	// tests - need putting in to jsunit as assertions
	print( "londn".soundex() );
	print( "londdn".soundex() );
	print( "londan".soundex() );
	print( "londno".soundex() );
	print( "lnodon".soundex() );
	print( "lnodno".soundex() );

	print( "londn".caverphone() );
	print( "londdn".caverphone() );
	print( "londan".caverphone() );
	print( "londno".caverphone() );
	print( "lnodon".caverphone() );
	print( "lnodno".caverphone() );
	
	print( "Stevenson".caverphone() ); //STFNSN1111
	print( "Peter".caverphone() ); //PTA1111111

	print( "Stevenson".caverphone() ); //STFNSN1111
	print( "Peter".caverphone() ); //PTA1111111


	print("-----------------");
	print( "1." + "london".metaphone("whirl") );
	print( "2." + "london".metaphone("hello") );
	print( "3." + "london".metaphone("know") );
	print( "4." + "london".metaphone("xray") );
	
	print( "assert(LNTN): " + "london".metaphone("london") );
	}

// invoke 
quit( main( arguments ));
