/**
 * 
 * Gives the Refined Soundex code of a given string.
 * 
 * Eg.
 *  java -jar js.jar examples/soundex-refined/get_code.js 'beatls'
 *
 * @author Matt Chadburn <matt@commuterjoy.co.uk>
 */

load("lib/soundex-refined.js");

function main( arg ){
	return new String(arg[0]).soundexRefined();
}

// invoke
print(main( arguments ));
quit();
