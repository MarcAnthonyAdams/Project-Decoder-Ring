# Project-decoder-ring

This application takes in a string and converts it to a secret code, it can also take in a secret code string, and decode it to English. The intended user is anyone who enjoys sending encoded messages. There are three different ways of encoding and decoding messages, Ceasar shift, Polybius square and Substitution cypher.

## Encoders

### Ceasar Shift

The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".

When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

### Polybius Square

The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like.

In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left. For example, in the above table, the letter "B" would be represented by the numerical pair "21".

When decoding the message, each pair of numbers is translated using the coordinates

### Substitution Cipher

The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet; otherwise, it will be difficult for them to decode the message.

For example, in the image above, the word "HELLO" would be translated as follows:

"H" becomes "R".
"E" becomes "M".
"L" becomes "W".
"O" becomes "L".

This would result in the code "RMWWL". 

To decode this message, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.

## Technical

The front end was designed with HTML5 and CSS, and the back end algorithms were created with Vanilla Javascript and Node.js

## Setup

Fork and clone this onto your machine.

**Run npm install.**

**npm start** 
Runs the app in the development mode. Open�http://localhost:3000�to view it in the browser.





