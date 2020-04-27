// // ***charAt() method***

// ##step-01

const sentence = 'The quick brown fox jumps over the lazy dog.';
//const index = 6;
const index = 13;
console.log('The character at index ' + index + ' is ' + sentence.charAt(index));

// ##step-02

const indexNumber = 'why use js charAt method ?';
const indexIs = 25;

console.log('The Character at index number ' + indexIs + ' is ' + indexNumber.charAt(indexIs));

/** ----------------------------- */

//  ***concat method***

// step-01

const question1 = 'Question: Why use js concat method ?';
const answer1 = 'Answer: String concat() function is use to more string together in javaScript.';

console.log(question1.concat(' ', answer1));

// step-02
const stringType = 'Welcome to SCIC Programmer';
const stringNumber = 2020;

console.log(stringType.concat(' ', stringNumber));

/** ----------------------------- */

//  ***includes method***

// step-01
const includeSentence = 'The quick brown fox jumps over the lazy dog';

const includeWord = 'dogs';
console.log(`The word "${includeWord}" ${includeSentence.includes(includeWord) ? 'is' : 'is not'} in the sentence`);

// step-02
const includesQesAns = 'use js includes method? Ans: The includes() method determines whether a string contains a character of a specified string.';
const includesIdentify = 'specified string';

console.log(`the sentence "${includesIdentify}" ${includesQesAns.includes(includesIdentify) ? 'is' : 'is not'} in the sentence`);

/** ----------------------------- */
//  ***endsWith() method***

//step-01
const endsWithStr1 = 'Cats are the best!';
console.log(endsWithStr1.endsWith('bes', 16));

const endsWithStr2 = 'Cats are the best!';
console.log(endsWithStr2.endsWith('best', 15));

//step-02
const endsWithNumber1 = '9876502143';
console.log(endsWithNumber1.endsWith(4, 8));

/** ----------------------------- */
//  ***indexOf() method***

const paragraph1 = 'The quick brown fox jumps over the lazy dog. if the dog barked, was it really lazy?';
const indexOfSearch = 'the';
const indexOfFirst = paragraph1.indexOf(indexOfSearch);
console.log('The index of the first "' + indexOfSearch + '" from the beginner is ' + indexOfFirst);
console.log('The index of the 2nd "' + indexOfSearch + '" is ' + paragraph1.indexOf(indexOfSearch, indexOfFirst + 1));

/** ----------------------------- */
//  ***lastIndexOf() method***

const paragraph11 = 'The quick brown fox jumps over the lazy dog. if the dog barked, was it really lazy?';
const lastIndexOfSearch = 'the';

console.log('The index of the first "' + lastIndexOfSearch + '" from the end is ' + paragraph11.lastIndexOf(lastIndexOfSearch));

/** ----------------------------- */
//  *** String.replace() method ***

const strReplace = 'The replace() method searches a string for a specified value, or a regular expression, replace any string text anywhere replace.';
const selectStrRep = /string/gi;

console.log(strReplace.replace(selectStrRep, 'successfully_replace_string'));
console.log(strReplace.replace('string', 'Number'));
console.log(strReplace.replace(/replace/gi, 'replaces'));

/** ----------------------------- */
//  *** String.slice() method ***

const strSlice = 'The Slice() method selects the all elements at the given start argument , and ends at but does not include.';
console.log(strSlice.slice(78));
console.log(strSlice.slice(12, 26));
console.log(strSlice.slice(-3));
console.log(strSlice.slice(-11, -1));

/** ----------------------------- */
//  *** String.split() method ***

const strSplit = 'The split() method is used to split a string into an array of substring, and returns the new array.';

const splitWords = strSplit.split(' ');
console.log(splitWords[6]);

const splitChars = strSplit.split('');
console.log(splitChars[14]);

const splitCopy = strSplit.split();
console.log(splitCopy);

/** ----------------------------- */
//  *** String.startsWith() method ***

// step-01
const strStartWith =
  'In JavaScript, startsWith() is a string method that is used to determine whether a string starts with a specific sequence of characters.';
console.log(strStartWith.startsWith('whether'));
console.log(strStartWith.startsWith('In'));
console.log(strStartWith.startsWith('In', 1));
console.log(strStartWith.startsWith('JavaScript', 3));

/** ----------------------------- */
//  *** String.substr() method ***

const strSubStr = 'The substring() is an inbuilt function in JavaScript which returns a part of the given string from start index to end index.';

console.log(strSubStr.substr(0, 12));
console.log(strSubStr.substr(99));
console.log(strSubStr.substr(-17));
console.log(strSubStr.substr(0, 2));

/** ----------------------------- */
//  *** String.toLowerCase() method ***

const strToLowerCase =
  'The toLowerCase() method converts a string to lowercase letters. Note: The toLowerCase() method does not change the original string.';

console.log(strToLowerCase.toLowerCase());

/** ----------------------------- */
//  *** String.toUpperCase() method ***

const strToUpperCase = 'The toUpperCase() method converts a string to uppercase letters.';

console.log(strToUpperCase.toUpperCase());

/** ----------------------------- */
//  *** String.trimStart() , String.trimEnd() method ***

const strTrim1 =
  '        In JavaScript, trimStart() is a string method that is used to remove whitespace characters from the start of a string. include spaces, tabs, etc.';

const strTrim2 = '     Remove whitespace, tabs, etc   ';

console.log(strTrim1);
console.log(strTrim2.trimStart());

// trimEnd()

console.log(strTrim2);
console.log(strTrim2.trimStart());
console.log(strTrim2.trimEnd());
