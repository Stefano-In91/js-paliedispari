"use strict";

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice;
do {
   userChoice = prompt("Pari o Dispari?").toLowerCase();
} while ( userChoice != "pari" && userChoice != "dispari" )

let userNumber;
do {
   userNumber = Number(prompt("Scegli un numero da 1 a 5"));
} while ( userNumber > 5 || userNumber == 0 )

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}
const pcNumber = getRandomIntInclusive(1, 5);
// Sommiamo i due numeri
const sum = userNumber + pcNumber;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven(number) {
   if (number % 2 == 0){
      return true;
   } else {
      return false;
   }
}
// Dichiariamo chi ha vinto.
if ( (userChoice == "pari" && isEven(sum)) || (userChoice == "dispari" && !isEven(sum)) ) {
   alert(`La somma del tuo numero e quello del pc è ${sum}, avendo scelto ${userChoice} hai vinto`);
} else {
   alert(`La somma del tuo numero e quello del pc è ${sum}, avendo scelto ${userChoice} hai perso`);
}