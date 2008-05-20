/**
 * 
 * java -jar js.jar examples/soundex.js 'lodnon'
 * 
 * @author chadbm01
 */

importPackage(java.io);

load("lib/anagram.js","lib/caverphone.js","lib/levenshtein.js","lib/metaphone.js","lib/porter-stemmer.js","lib/soundex.js");

function main( ){
	
	var input_s = new String(arguments[0]).soundex();
	var dictionary = new BufferedReader(new FileReader("dictionary/location.long"));

	while ((line = dictionary.readLine()) != null ) {
		if(new String(line).soundex() == input_s){
			print(line);			
		}
	}	
	
	return true;
}

// invoke
var clockStart = new Date();
main( arguments );
var clockEnd = new Date();
print("---------------\nClocked at: "+ ((clockEnd - clockStart)/1000)+"s");