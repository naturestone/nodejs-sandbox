/**
 * NodeJS Sample Application
 */

 // Define a global literal
const greetings = 'Hallo NodeJS';
const guides = 'https://nodejs.org/en/docs/guides/'

// A hello world sample
console.log(`Say: ${greetings}\n${guides}`);

// The directory and file name of the current module
console.log(`Dirname: ${__dirname}`);
console.log(`Filename: ${__filename}`);

// Simple numeric Datatypes
var pi = 3.1415;    // Fließkommazahl
var r = 5;          // Integer
console.log(`Calculate(pi*r): ${pi*r}`);
console.log(`Calculate(r*r): ${r*r}`);
console.log(`Calculate(r+r): ${r+r}`);

// Arrays
var arr = [1, 2, 3, 'red', 'green', 'blue'];
console.log(`Length: ${arr.length}`);
arr.forEach(element => {
    // Ausgabe ohne Linefeed
    process.stdout.write(`${element}; `); 
});
process.stdout.write("\n");

var dict = [
    {"ID": 0, "NAME": "root" },
    {"ID": 123, "NAME": "super" },
    {"ID": 156, "NAME": "oper" }
];
dict.forEach(element => {
    console.log(`${element.ID}, ${element.NAME};`);
});

// Define a new function
function nothing() {
    // do nothing;
    return;
};

// Loops
for (i = 0; i < 5; i++); 
while (i > 0) i--;

// Conditions
if (r < pi) 
    nothing(); 
else
    nothing();

// Select condition
switch(r) {
    case 5:
        nothing()
        break;
    case 1:
        nothing()
        break;
    default:
        break;
};

// Simple input
process.stdin.once('data', (chunk) => { 
    console.log("Input: " + chunk.toString()) 
});


// End of NodeJS: app.js