/**
 * 
 * Determins if two given strings are anagramatic
 * 
 * Eg:
 * 	java -jar js.jar examples/anagram/is.js 'fawlty towers' 'flowery twats'
 *
 * @author Matt Chadburn <matt@commuterjoy.co.uk>
 */

load("lib/anagram.js");

function main( arg ){
	return ( new String(arg[0]).isAnagram(new String(arg[1])) ) ? 1 : 0; // return 1 and 0 as more common exit codes
}

// invoke
print(main( arguments ));
quit();
