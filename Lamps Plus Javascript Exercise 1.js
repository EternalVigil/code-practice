const sampleText = 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe; All mimsy were the borogoves, And the mome raths outgrabe.';

// Your Exercise 1 Code Below:

let parsedWordArray = wordParse(sampleText);
let capitalWordArray = capitalWordParse(parsedWordArray);
let lowerCaseArray = lowerCaseWordParse(parsedWordArray);
let firstLetterArray = firstLetterParse(parsedWordArray);
let letterStartArray = startsWithCheck('o', parsedWordArray);

//Function A
function wordParse(input) {
    console.log('parsed input');
    let parsedArray = input.split(' ');
    console.log(parsedArray);
    return parsedArray;
}

//Function B
function capitalWordParse(input) {
    console.log('this time: capitals only');
    let capitalWordArray = [];

    for (let i = 0; i < input.length; i++) {
        let capitalCheck = input[i].charAt(0);
        if (!isNaN(capitalCheck * 1)) {
            console.log('you gave me a number');
        } else if (capitalCheck == capitalCheck.toUpperCase()) {
            //console.log(input[i]);
            capitalWordArray.push(input[i]);
        }
    }
    console.log(capitalWordArray);
    return capitalWordArray;
}

//Function C
function lowerCaseWordParse(input) {
    console.log('lower case only');
    let lowerCaseArray = [];

    for (let i = 0; i < input.length; i++) {
        let lowerCaseCheck = input[i].charAt(0);

        if (!isNaN(lowerCaseCheck * 1)) {
            console.log('stop giving me numbers');
        } else if (lowerCaseCheck == lowerCaseCheck.toLowerCase()) {
            lowerCaseArray.push(input[i]);
        }
    }
    console.log(lowerCaseArray);
    return lowerCaseArray;
}

//Function D
function firstLetterParse(input) {
    console.log('just the first letter');

    let firstLetterArray = [];

    for (let i = 0; i < input.length; i++) {
        firstLetterArray.push(input[i].charAt(0));
    }

    console.log(firstLetterArray);
    return firstLetterArray;
}

//Function E
function startsWithCheck(letter, input) {
    console.log('same letter check');
    let sameLetterArray = [];
    for (let i = 0; i < input.length; i++) {

        console.log(letter + ' = ' + input[i].charAt(0) + '?');
        
        let letterCheck = letter.localeCompare(input[i].charAt(0), undefined, {sensitivity: 'accent'});

        if (letterCheck === 0) {
            console.log('starts with the same letter');
            sameLetterArray.push(input[i]);
        }
        else {
            console.log('does not start with the same letter');
        }
        console.log(letterCheck);
    }
    console.log(sameLetterArray);
    return sameLetterArray;
}
