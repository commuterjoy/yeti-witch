/**
 * http://svn.apache.org/viewvc/commons/proper/codec/trunk/src/java/org/apache/commons/codec/language/RefinedSoundex.java?view=markup
 * r651573
 * @author chadbm01
 */

String.prototype.soundexRefined = function(){

        if (this == null){ 
            return null;
        }

        var str = this.toUpperCase().replace(/[^A-Z]/g, "");

        if (this.length == 0) {
            return str;
        }

        var sBuf = new String();
        sBuf += (str.charAt(0));
		
	   
        var last, current;
        last = '*';

        for (var i = 0; i < str.length; i++) {
			
			current = getMappingCode(str.charAt(i));
			//print(current);
				
            if (current == last) {
                continue;
            } else if (current != 0) {
                sBuf += current;
            }

            last = current;
        }

        return sBuf.toString();
    }


function getMappingCode(c) {

	// array: emulate toCharArray
	var US_ENGLISH_MAPPING = "01360240043788015936020505".split("");
	var lookup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	for(var j = 0; j < lookup.length; j++){
		if ( lookup[j] == c ){
			return US_ENGLISH_MAPPING[j];
			}
		}
	return 0;
    }
