/**
 * @author chadbm01
 */

/**
 * 
 * 	to execute: java -jar js.jar test.js
 *
 */

load("lib/anagram.js");

importPackage(java.io);
 
/**
 * 
 * @param {Object} test
 */
function main( test ){
	
	var dictionary = new BufferedReader(new FileReader("dictionary/location.long"));
	var line;
	
	while ((line = dictionary.readLine()) != null) {
	
		if ( new String(line).isAnagram('oonnld') ){
			print(line);
		}	
	}
	
		// tests - need putting in to jsunit as assertions
		print( "londn".isAnagram('london') );
		print( "londdn".isAnagram('london') );
		print( "londan".isAnagram('london') );
		print( "londno".isAnagram('london') );
		print( "lnodon".isAnagram('london') );
		print( "lnodno".isAnagram('london') );
		print( "lno1231ASdno".isAnagram('london') );
		print( "llllllllll".isAnagram('london') );
		print( "lnoffdno".isAnagram('london') );
			
	}

// invoke 
quit( main( arguments ));
