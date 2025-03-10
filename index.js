/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";



// Your code here...



console.log(`La primera aparición de la letra "j" es en la posición ${string1.indexOf('j')}`)

/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
letterC= string2.indexOf('C');
letterO= string2.indexOf('O');
letterL= string2.indexOf('L');
word = string2[letterC]+string2[letterO]+string2[letterO]+string2[letterL];

console.log(`El valor de la variable "word" es ${word}`)


/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...

let batmanCancion =  `${string3.repeat(4)} Batman!` ; 

console.log(`La entradilla de Batman es ${batmanCancion}`);


/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...

let posicion = fruit.indexOf('pineapple');
let fruta = fruit.slice(posicion)
console.log(`Mi fruta favorita es ${fruta}`)

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


// Check the first headline
// Your code here ...
console.log(`La cadena ${funnyHeadline1} incluye la palabra 'oxygen'? ${funnyHeadline1.includes('oxygen')}`);


// Check the second headline
// Your code here ...
console.log(`La cadena ${funnyHeadline2} incluye la palabra 'oxygen'? ${funnyHeadline2.includes('oxygen')}`);


/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...

console.log(`La longitud de la cadena "${string4}" es de ${string4.length} caracteres`)

// b) Print the last character in the string
// Your code here ...

console.log(`El ultimo caracter de la cadena "${string4}" es "${string4.slice(-1)}" caracteres`)