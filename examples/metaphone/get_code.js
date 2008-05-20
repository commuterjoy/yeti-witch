/**
 * 
 * Gives the Metaphone code of a given string.
 * 
 * Eg.
 *  java -jar js.jar examples/metaphone/get_code.js 'yeti witch'
 *
 * @author Matt Chadburn <matt@commuterjoy.co.uk>
 */

load("lib/metaphone.js");

function main( arg ){
	return new String(arg[0]).metaphone();
}

// invoke
print(main( arguments ));
quit();
