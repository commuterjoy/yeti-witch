/**
 * @author chadbm01
 */

/**
 * 
 * 	to execute: java -jar js.jar test.js
 *
 */

load("lib/porter-stemmer.js");

importPackage(java.io);
 
/**
 * 
 * @param {Object} test
 */
function main( test ){
	
	var dictionary = new BufferedReader(new FileReader("test/data/stemmer/input"));
	
	var line;
	
	while ((line = dictionary.readLine()) != null) {
		
		var p = new String(line).porterStemmer();
		print(line + ':' + p);

		}
	}

// invoke 
quit( main( arguments ));
