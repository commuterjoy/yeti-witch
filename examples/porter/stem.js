/**
 * 
 * Stems a given string according to Mr Porter's algorithm.
 * 
 * Eg.
 *  // these two words have the same stem
 *  java -jar js.jar examples/porter/stem.js 'probably'
 *  java -jar js.jar examples/porter/stem.js 'probabilities'
 *  
 * @author Matt Chadburn <matt@commuterjoy.co.uk>
 */

load("lib/porter-stemmer.js");

function main( arg ){
	return new String(arg[0]).porterStemmer();
}

// invoke
print(main( arguments ));
quit();
