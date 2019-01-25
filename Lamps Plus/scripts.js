// Once finished with the HTML/CSS complete Exercise 1 and Exercise 2 below
// ES6 is available in this pen

/*
Exercise 1

Using native JavaScript methods, implement a set of functions and/or statements that demonstrate the following features

 A) given a string, provide an array of words
 B) given an array of words, provide an array of capitalized words from that array
 C) given an array of words, provide an array of words that are lower case from that array
 D) given an array of words, provide an array of the first letter of each word from that array
 E) given an array of words, and a character (example: 'm'), provide an array of words that begin with that character (case insensitive)
 F) given an array of words, and a character (example: 't'), provide a count of the number of words from that array that begin with that character (case sensitive)
 G) given a string, provide an object where each key is a character in the string and each value is the number of times that character (case insensitive) is present in the string. Example: “Hello there” returns 
{"h":2,"e":3,"l":2,"o":1," ":1,"t":1,"r":1}

To demonstrate these features, use the variable sampleText provided below, and log to the console the feature numeral (A, B, C, etc), followed by the return values of each operation.

For Example: console.log('A', wordsFromString(sampleText));

*/
const sampleText = 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe; All mimsy were the borogoves, And the mome raths outgrabe.';

// Your Exercise 1 Code Below:

let parsedWordArray = wordParse(sampleText);
console.log(parsedWordArray);

let capitalWordArray = capitalWordParse(parsedWordArray);
console.log(capitalWordArray);

let lowerCaseArray = lowerCaseWordParse(parsedWordArray);
console.log(lowerCaseArray);

let firstLetterArray = firstLetterParse(parsedWordArray);
console.log(firstLetterArray);

let letterStartArray = startsWithCheck('o', parsedWordArray);
console.log(letterStartArray);

let caseBasedStartArray = caseBasedStartCheck('A', parsedWordArray);
console.log(caseBasedStartArray);

let occurrenceAmount = occurrenceCheck('Hello THerE Did NOT seE yOu THeRe!...');
console.log(occurrenceAmount);

//Function A
function wordParse(input) {
    let parsedArray = input.split(' ');
    return parsedArray;
}

//Function B
function capitalWordParse(input) {
    let capitalWordArray = [];

    for (let i = 0; i < input.length; i++) {
        let capitalCheck = input[i].charAt(0);
        if (!isNaN(capitalCheck * 1)) {} else if (capitalCheck == capitalCheck.toUpperCase()) {
            capitalWordArray.push(input[i]);
        }
    }
    return capitalWordArray;
}

//Function C
function lowerCaseWordParse(input) {
    let lowerCaseArray = [];

    for (let i = 0; i < input.length; i++) {
        let lowerCaseCheck = input[i].charAt(0);

        if (!isNaN(lowerCaseCheck * 1)) {} else if (lowerCaseCheck == lowerCaseCheck.toLowerCase()) {
            lowerCaseArray.push(input[i]);
        }
    }
    return lowerCaseArray;
}

//Function D
function firstLetterParse(input) {
    let firstLetterArray = [];

    for (let i = 0; i < input.length; i++) {
        firstLetterArray.push(input[i].charAt(0));
    }

    return firstLetterArray;
}

//Function E
function startsWithCheck(letter, input) {
    let sameLetterArray = [];
    for (let i = 0; i < input.length; i++) {
        let letterCheck = letter.localeCompare(input[i].charAt(0), undefined, { sensitivity: 'accent' });
        if (letterCheck === 0) {
            sameLetterArray.push(input[i]);
        }
    }
    return sameLetterArray;
}

//Function F
function caseBasedStartCheck(letter, input) {
    let caseStartWithArray = [];
    if (!isNaN(letter * 1)) {} else if (letter == letter.toUpperCase()) {

        for (let i = 0; i < capitalWordArray.length; i++) {
            if (letter == capitalWordArray[i].charAt(0)) {
                caseStartWithArray.push(capitalWordArray[i]);
            }
        }
    } else if (letter == letter.toLowerCase()) {

        for (let i = 0; i < lowerCaseArray.length; i++) {
            if (letter == lowerCaseArray[i].charAt(0)) {
                caseStartWithArray.push(lowerCaseArray[i]);
            }
        }
    }

    if (caseStartWithArray.length < 1) {
        let noMatchWarning = 'No Matches Found';
        return noMatchWarning;
    }
    return caseStartWithArray;
}

//Function G - was not sure if punctionation would be factored into occurrence counts 
function occurrenceCheck(input) {
    let occurrenceCount = {};
    let modString = input.toUpperCase();
    modString.replace(/\S/g, (letter) => {
        if (isNaN(occurrenceCount[letter])) {
            occurrenceCount[letter] = 1;
        } else {
            occurrenceCount[letter]++;
        }
    });
    return occurrenceCount;
}


/*
Exercise 2
Write a function that validates the donation input field in the HTML form, returning true if the value is a number greater than zero, and false for any other input.
Then, bind an anonymous function to the Give Now button, that performs a console.log with the return value of your validator function.
*/

let checkAmount = (input) => {
    let parseInput = parseInt(input);
    if (parseInput > 0) {
        return true;
    } else {
        return false;
    }
}

let validatedAmount = () => {
    document.querySelector('.donateNow').addEventListener('click', () => {
        let inputAmount = document.querySelector('.donateAmount').value;
        console.log(checkAmount(inputAmount));
    });
}
validatedAmount();