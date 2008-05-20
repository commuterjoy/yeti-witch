/**
 * 
 * Gives the Caverphone code of a given string.
 * 
 * Eg.
 *  java -jar js.jar examples/caverphone/get_code.js 'witch'
 *
 * @author Matt Chadburn <matt@commuterjoy.co.uk>
 */

load("lib/caverphone.js");

function main( arg ){
	return new String(arg[0]).caverphone();
}

// invoke
print(main( arguments ));
quit();
