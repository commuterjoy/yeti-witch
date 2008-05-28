/**
 * 
 * Returns the difference between two Refined Soundex values of two character expressions as an integer.
 * 
 * The integer returned is the number of characters in the Refined Soundex values
 * that are the same. The return value ranges from 0 through 1, with 1 indicating
 * the Refined values are identical and 0 indicating that no values are the same
 * 
 * Compare buzz with fuzz
 *  java -jar js.jar examples/soundex-refined/difference.js 'buzz' 'fuzz'
 *  
 * As above, but reduce the key comparision to 3 characters
 *   java -jar js.jar examples/soundex-refined/difference.js 'buzz' 'fuzz' 3
 * 
 *  - inspired by : http://www.mail-archive.com/commons-dev@jakarta.apache.org/msg31614.html
 *
 * @author Matt Chadburn <matt@commuterjoy.co.uk>
 */

load("lib/soundex-refined.js");

function main( arg, l ){
	
	var a = new String(arg[0]);
	var b = new String(arg[1]);
	
	var soundexa = a.soundexRefined();
	var soundexb = b.soundexRefined();
	
	//print(soundexa);
	//print(soundexb);
	
	var alength = a.length;
	var res = 0;
	
	// number of characters to compare from the start of the string
	var chars = l || soundexa.length;

	if ( chars > soundexa.length ){ // but not if the length greater than the string being compared
		chars =  soundexa.length;
	}
	
    for (var i=0; i<chars; i++) {
        if (soundexa.charAt(i) == soundexb.charAt(i)) {
            res++;
        }
    }

	return res;
}

// invoke
var a = main( arguments, arguments[2] );
// expressed as a % of difference to two decimal places - eg. 'fuzz' & 'fizz' are 100% the same according to soundex, 
// where as 'fuzz' & 'buzz' on 50% the same
print( Math.round(a / arguments[0].length * 100) / 100); 

quit();
