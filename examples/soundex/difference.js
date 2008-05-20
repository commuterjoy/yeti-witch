/**
 * 
 * Returns the difference between the SOUNDEX values of two character expressions as an integer.
 * 
 * The integer returned is the number of characters in the SOUNDEX values
 * that are the same. The return value ranges from 0 through 4, with 4 indicating
 * the SOUNDEX values are identical.
 * 
 *  - inspired by : http://www.mail-archive.com/commons-dev@jakarta.apache.org/msg31614.html
 * 
 * Eg.
 * 
 *  The soundex values of these words are identical, so the value returned is '4'
 *   java -jar js.jar examples/soundex/difference.js 'dead' 'ded'
 * 
 * 	The soundex values differs slightly, so the value is '3'
 *   java -jar js.jar examples/soundex/difference.js 'threw' 'through'
 *   
 *  The soundex values differs slightly, so the value is '0'
 *   java -jar js.jar examples/soundex/difference.js 'witch' 'trumpet'
 *
 * @author Matt Chadburn <matt@commuterjoy.co.uk>
 */

load("lib/soundex.js");

function main( arg ){
	
	var a = new String(arg[0]);
	var b = new String(arg[1]);
	
	var soundexa = a.soundex();
	var soundexb = b.soundex();
	
	var alength = a.length;
	var res = 0 
	
    for (var i=0; i<soundexa.length; i++) {
        if (soundexa.charAt(i) == soundexb.charAt(i)) {
            res++;
        }
    }

	return res;
}

// invoke
print(main( arguments ));
quit();
