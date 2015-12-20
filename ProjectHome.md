# Yeti Witch #

This project adds several well known techniques for finding strings-that-almost-match-other-strings to the native Javascript String object, some of which are phonetic algorithms.

The supported list currently includes Soundex, Refined Soundex, Metaphone, Caverphone, Levenshtein distance, anagrams and Porter Stemming. All of these are primarily designed to work with the English language, although anagrams and Levenshtein are just string analysis so will work with anything.

The extensions are primarily designed to be executed under the [Rhino](http://www.mozilla.org/rhino/) scripting engine although porting them to different interpreters (to run in the browser or whatever) should be trivial.

## Tests ##

After checking out (or [downloading](http://code.google.com/p/yeti-witch/downloads/list)) the code you should probably execute the unit tests. This will determine whether your system will run the code.

```
 svn checkout http://yeti-witch.googlecode.com/svn/trunk/ yeti-witch-read-only
 cd ./yeti-witch
 java -jar js.jar test/run.js
```

To run the tests without clocking the test times use the _-noclock_ flag.

```
 java -jar js.jar test/run.js -noclock
```

If you want to use copy of Rhino in your classpath then remove the one distributed with Yeti. I've tested it on Rhino1\_7R2pre & Rhino1\_5, 1\_6R7 running under OSX 1.4.

## Examples ##

The **anagram** tool will compare two arguments and return a '1' if the strings are anagrams of one another,

```
 // prints '1' - ie. is an anagram
 java -jar js.jar examples/anagram/is.js 'fawlty towers' 'flowery twats'
```

You can print the **Caverphone** code of a given string,

```
 // prints 'WK11111111' 
 java -jar js.jar examples/caverphone/get_code.js 'witch'
```

The **Levenshtein** tool (AKA. edit distance) will return an integer representing the number of operations needed to transform a given string in to the second given string.

```
 // prints '1'
 java -jar js.jar examples/levenshtein/distance.js 'beatls' 'beatles'
```

Likewise, **metaphone** gives you the metaphone code for a given string. Providing a second argument will set the metaphone key length, which defaults to 4.

```
 // prints 'LNTNLM'
 java -jar js.jar examples/metaphone/get_code.js 'london olympia' 6
```

Porter's **stemming** algorithm will attempt to truncate spurious word endings in order to find word stems.

```
 // these two words have the same stem, 'probabl'
 java -jar js.jar examples/porter/stem.js 'probably'
 java -jar js.jar examples/porter/stem.js 'probabilities'
```

There's also a utility to stem an input file of new-line-seperated words.

```
 // prints a list of stemmed output 
 java -jar js.jar examples/porter/stem-file.js "test/data/stemmer/input"
```

Both **Soundex** and **Refined Soundex** have utilities that (a), print the soundex code of a given string,

```
 // prints, B342 and B10673
 java -jar js.jar examples/soundex/get_code.js 'beatls'
 java -jar js.jar examples/soundex-refined/get_code.js 'beatls'
```

... and (b), a _diff_ tool that, in Soundex's case return the number of characters that are the same in a two give soundex keys - and given the keys have a maximum length of 4 characters, 4 indicates an exact match while 0 a very inexact match,

```
 // the soundex values differs slightly, so printed value is '3'
 java -jar js.jar examples/soundex/difference.js 'threw' 'through'

 // The soundex values differs entirely, so the printed value is '0'
 java -jar js.jar examples/soundex/difference.js 'witch' 'trumpet'
```

While in Refined Soundex's case the difference is expressed as a decimalised percentage of the difference between the two codes.

```
 // prints 0.5, as their is a 50% difference in their Refined Soundex keys
 java -jar js.jar examples/soundex-refined/difference.js 'buzz' 'fuzz'
```

```
 // as above but reduce the key comparison to '3', which prints 0.25
 java -jar js.jar examples/soundex-refined/difference.js 'buzz' 'fuzz' 3
```

### XML Lookup ###

Given some of the operations are time intensive it may be quicker to generate a one-off lookup file containing a pre-defined list of words translated to their phonetic codes. So, for each word in a given file the **xml lookup** tool will produce an xml sequence containing the various Yeti-Witch algorithms,

```
 java -jar js.jar examples/lookup/xml.js 'dictionary/names.girls'
```

Using one of the shipped dictionaries this will print something like this,

```
 <lookup>
  <word>
    <stem>AALIYAH</stem>
    <word>AALIYAH</word> <!-- the original word -->
    <soundex>A400</soundex>
    <soundexRefined>A070</soundexRefined>
    <caverphone>ALA1111111</caverphone>
    <metaphone>ALY</metaphone>
  </word>
  <word>
    <stem>ABBIE</stem>
    <word>ABBIE</word>
    ...
 </lookup>
```

Anagrams and Levenshtein are excluded from this as they are both comparison operations that need a second (eg. user input) string.

## 'Yeti Witch' ? ##

Yeti Witch is an anagram of White City, the area of London where I work. The anagram can be found on the Central Line of the [London Underground anagram map](http://www.hometown.aol.co.uk/stationanagrams/london_underground_anagram_map.png) - credit: Barry Heck ;)

## Not Mine ##

The Caverphone and Metaphone methods are both Javascript ports of the algorithms written for the [Apache Codec](http://commons.apache.org/codec/) project. Likewise the Porter Stemmer and Levenshtein code has been adapted from previously released examples. Credits for these works and license details can be found at the head of each file in the [distribution](http://code.google.com/p/yeti-witch/source/checkout).
