// unit tests for String.prototype.porterStemmer
var t_porterStemmer = function(){

	// check prototype has been loaded
	ok( "foo".porterStemmer, "Porter Stemmer method is accessible");

	// test the stemming with an array of terms, and their post-stemmed counterparts - randomly taken from Mr Porters test suite
	var terms = ['abusing','alarbus','antipholus','apostrophas','berowne','borrowed','braved','brimful','conducted','custom','dalliance','dowager','drummer','flat','governors','headland','imagining','kicky','monastic','mountainous','nerve','ottoman','perversely','priamus','princely','rhyming','satyr','savageness','straitly','swear','towering','unsaluted','uproar','walking'];
	var tests = ['abus','alarbu','antipholu','apostropha','berown','borrow','brave','brim','conduct','custom','dallianc','dowag','drummer','flat','governor','headland','imagin','kicki','monast','mountain','nerv','ottoman','pervers','priamu','princ','rhyme','satyr','savag','straitli','swear','tower','unsalut','uproar','walk'];
	
	for(var i in terms){
		is( true, tests[i] == new String(terms[i]).porterStemmer(), terms[i]);
	}
}
t_porterStemmer.suiteName = 'Porter Stemmer';