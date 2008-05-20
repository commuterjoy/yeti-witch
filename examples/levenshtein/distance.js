/**
 * 
 * Gives the Levenshtein distance between two strings.
 * 
 * Eg:
 * 	java -jar js.jar examples/levenshtein/distance.js 'beatls' 'beatles'
 *
 * @author Matt Chadburn <matt@commuterjoy.co.uk>
 */

load("lib/levenshtein.js");

function main( arg ){
	return new String(arg[0]).levenshtein(new String(arg[1]));
}

// invoke
print(main( arguments ));
quit();
