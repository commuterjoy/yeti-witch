/**
 * java -jar js.jar test/run.js
 * 
 * @author chadbm01
 */

importPackage(java.io);

// load application libraries
load("./lib/anagram.js");
load("./lib/caverphone.js");
load("./lib/levenshtein.js");
load("./lib/metaphone.js");
load("./lib/porter-stemmer.js");
load("./lib/soundex.js");

// load test runner
load("./test/runner.js");

// load the contents of the test directory via a bit of java.io.*
var dir = new File("./test/tests");
var tests = dir.listFiles();
for (var i in tests){
	var filePath = tests[i].getPath();
	if ( /\.js$/.test(filePath)){ // filter anything but .js file
		load(filePath);
		}
	}

// assign the loaded tests to the testCases 
var testCases = [
	t_anagrams,
	t_caverphone,
	t_levenshtein,
	t_metaphone,
	t_porterStemmer,
	t_soundex,
	];

// run
print(testrun(testCases));

