/**
 * 
 * Gives the Soundex code of a given string.
 * 
 * Eg.
 *  java -jar js.jar examples/soundex/get_code.js 'beatls'
 *
 * @author Matt Chadburn <matt@commuterjoy.co.uk>
 */

load("lib/soundex.js");

function main( arg ){
	return new String(arg[0]).soundex();
}

// invoke
print(main( arguments ));
quit();
