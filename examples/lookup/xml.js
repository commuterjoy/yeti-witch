/**
 * 
 * Generates 
 * 
 * This is quite slow for long lists at the moment.
 * 
 * Eg. 
 *  java -jar js.jar examples/lookup/json.js dictionary/names.girls
 * 
 * @author chadbm01
 */

importPackage(java.io);

// libraries
load("lib/anagram.js");
load("lib/caverphone.js");
load("lib/levenshtein.js");
load("lib/metaphone.js");
load("lib/porter-stemmer.js");
load("lib/soundex.js");
load("lib/soundex-refined.js");

function main( args ){

	var x = []; // array of the objects holding the encoded words
	var f = args[0]; // input file

	try {	
		var dictionary = new BufferedReader(new FileReader(f));
		}
	catch (e if e instanceof JavaException) {
		print(e.name +':'+ e.message);
		return 0;
		}
	
	var line;
	while ((line = dictionary.readLine()) != null) {
		
		var word = new String(line);
		var k = {};
		
		// load object with the phonetic etc. keys
		k['word'] = word;	
		k['caverphone'] = word.caverphone();
		k['metaphone'] = word.metaphone();
		k['stem'] = word.porterStemmer();
		k['soundex'] = word.soundex();
		k['soundexRefined'] = word.soundexRefined();
			
		x.push(k);
	}
	
	return x;
}

// entry point
var xml = _serializeToXML( main( arguments ) );
print(xml);

/**
 * Serializes, although not especially carefully, an array-of-objects to an XML string
 * 
 * @param {Array} keys An array.
 * @return {XML} The E4X object.
 */
function _serializeToXML( keys ){
	var xml = <lookup />;
	keys.forEach(function(item){
			var s = <word/>;
			for(var i in item){
				 var node = <{i}>{item[i]}</{i}>;  // weird e4x templating  - ref: http://developer.mozilla.org/en/docs/E4X_tutorial#Javascript_Variables;
				 s.appendChild(node); 
			}
			xml.appendChild(s);
		});
	return xml;
}




