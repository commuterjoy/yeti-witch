/**
 * @author chadbm01
 */

/**
 * 
 * 	to execute: java -jar js.jar test.js
 *
 */

load("lib/anagram.js");
load("lib/caverphone.js");
load("lib/levenshtein.js");
load("lib/metaphone.js");
load("lib/porter-stemmer.js");
load("lib/soundex.js");
load("lib/soundex-refined.js");

importPackage(java.io);
/**
 * java -jar js.jar ./examples/soundex-location.js london
 */

function main( d, args ){
	
	var dictionary = new BufferedReader(new FileReader("dictionary/stations"));
	
	// 
	var lookup_s = [];
	var lookup_m = [];
	var lookup_c = [];
	var line;
	
	var input = new String(arguments[0]);
	
	var metaphoneKeyLength = 5;
	
	//
	var input_s = input.soundex();
	var input_m = input.metaphone(metaphoneKeyLength);
	var input_c = input.caverphone();	
	
	while ((line = dictionary.readLine()) != null) {
		
		var s = new String(line).soundex();
		var sr = new String(line).soundexRefined();
		var m = new String(line).metaphone(metaphoneKeyLength);
		var c = new String(line).caverphone();
		var l = input.levenshtein(new String(line));
		
		if ( s == input_s ){
			var o = { line: line, levenshtein: l, soundex: s, soundexRefined: sr };
			lookup_s.push(o);
			}
		
		}
	
	print('-----------------');

	// sort the results of the soundex/metephone ... comparison by levenshtein distance
	
	lookup_s.sort(intSort);
	
	// TODO 
	if ( input.isAnagram() ){
		lookup_s.unshift(input)
		}
	
	// 
	
	//lookup_m.sort(intSort);
	//lookup_c.sort(intSort);			
	
	print("Soundex");
	print(" [match],[levenshtein],[soundex],[soundex diff],[soundex refined]")
	for (var i=0; i<lookup_s.length; i++) {
		print(' '+lookup_s[i].line + ',' + lookup_s[i].levenshtein +','+ lookup_s[i].soundex +','+ diff(input, lookup_s[i].line) +','+ lookup_s[i].soundexRefined);
		}
					
	}

// invoke 

quit( main( arguments ));

/**
 * 
 * @param {Object} a
 * @param {Object} b
 */
function intSort(a, b) {		
  if(a.levenshtein > b.levenshtein)
    return 1;
  if(a.levenshtein < b.levenshtein)
    return -1;
  return 0;
			}

			
			
			
function diff( x, y  ){
	
	var a = new String(x);
	var b = new String(y);
	
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