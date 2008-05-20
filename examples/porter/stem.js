/**
 * 
 * Stems a given string according to Mr Porters algorithm.
 * 
 * Eg.
 *  java -jar js.jar examples/porter/stem.js 'witches'
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
