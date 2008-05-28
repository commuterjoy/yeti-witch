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
	var m = arg[1] || 4;
	return new String(arg[0]).soundexRefined(m);
}

// invoke
print(main( arguments ));
quit();
