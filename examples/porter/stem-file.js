/**
 * Stem a file containing a new-line-seperated list of words
 * 
 * Eg.
 * 	// diff the output of this against 'test/data/stemmer/output' - Martin Porter's testsuite.
 * 	java -jar js.jar examples/porter/stem-file.js "test/data/stemmer/input"
 * 
 * @author Matt Chadburn <matt@commuterjoy.co.uk>
 */

load("lib/porter-stemmer.js");

importPackage(java.io);
 
/**
 * 
 * @param {Object} test
 */
function main( args ){
	
	var f = args[0];

	try {	
		var dictionary = new BufferedReader(new FileReader(f));
		}
	catch (e if e instanceof JavaException) { // all Java errors are of this type to JS
		print(e.name +':'+ e.message);
		return 0;
		}
	
	// print each original and porter stemmed word
	var line;	
	while ((line = dictionary.readLine()) != null) {
		var p = new String(line).porterStemmer();
		print(p);
		}
	}

// invoke 
quit( main( arguments ));
