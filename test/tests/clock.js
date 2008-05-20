// unit tests for clocking the performance of each algorithm
var t_clock = function(){
	
	// load the dictionary
	var dictionary = new BufferedReader(new FileReader("dictionary/location.long"));
		
	// number of items to benchmark against
	var l = 1000; 

	// isAnagram and Levenshtein require strings to compare against the object, the longer the string the slower the performance 
	var comparsionString = 'witch'; 
	
	// prototype method names
	var algorithms = ['isAnagram','caverphone','levenshtein','metaphone','porterStemmer','soundex', 'soundexRefined'];

	// populate a dictionary of terms
	var d = []; 	var n = 0;
	while ((line = dictionary.readLine()) != null ) {
		n++; if (n>l){ break; } // exit when full		
		d.push(new String(line));
	}	
		
	// for each method clock it's processing of the dictionary. 
	for(var i in algorithms){
	
		switch (algorithms[i]) {
	
			// the ones that operate on parameters
			case "isAnagram":
			case "levenshtein":
				clock(function(){
				for (var k=0, j=d.length; k<j; k++) {
					d[k][algorithms[i]](comparsionString);
					}},algorithms[i]+" on "+d.length+" items");	
				break;

			// the ones that don't
			default:
				clock(function(){
					for (var k=0, j=d.length; k<j; k++) {
						d[k][algorithms[i]]();
						}},algorithms[i]+" on "+d.length+" items");			
				
				break;
		}
	}
}
t_clock.suiteName = "Clocking Performance";

