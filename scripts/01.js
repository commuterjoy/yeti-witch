/**
 * @author chadbm01
 */

/**
 * 
 * 	to execute: java -jar js.jar test.js
 *
 */

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

function main( args ){
	
	var dictionary = new BufferedReader(new FileReader("dictionary/location.long"));
	
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
		var m = new String(line).metaphone(metaphoneKeyLength);
		var c = new String(line).caverphone();
		var l = input.levenshtein(new String(line));
		
		if ( s == input_s ){
			var o = { line: line, levenshtein: l };
			lookup_s.push(o);
			}
						
		if ( m == input_m ){
			var o = { line: line, levenshtein: l };
			lookup_m.push(o);
			}
			
		if ( c == input_c ){
			var o = { line: line, levenshtein: l };
			lookup_c.push(o);
			}
		
		}
	
	print('-----------------');

	// sort the results of the soundex/metephone ... comparison by levenshtein distance
	lookup_s.sort(intSort);
	lookup_m.sort(intSort);
	lookup_c.sort(intSort);			
	
	print("Soundex");
	for (var i=0; i<lookup_s.length; i++) {
		print(' '+lookup_s[i].line + ', ' + lookup_s[i].levenshtein);
		}
	print("Metaphone");
	for (var i=0; i<lookup_m.length; i++) {
		print(' '+lookup_m[i].line + ', ' + lookup_m[i].levenshtein);
		}
	print("Caverphone");
	for (var i=0; i<lookup_c.length; i++) {
		print(' '+lookup_c[i].line + ', ' + lookup_c[i].levenshtein);
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
