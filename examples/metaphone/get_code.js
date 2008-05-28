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
	var m = arg[1] || 4;
	return new String(arg[0]).metaphone(m);
}

// invoke
print(main( arguments ));
quit();
