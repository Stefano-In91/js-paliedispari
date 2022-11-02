"use strict";

// Chiedere all’utente di inserire una parola
const userWord = prompt("Inserisci una parola/frase").toLowerCase();

// Creare una funzione per capire se la parola inserita è palindroma
function palindrome(string) {
  let equalLetterCounter = 0;
  for (let i = 0; i < string.length; i++) {
    // Comparazione prima lettera con ultima, seconda con penultima ecc
    if (string[i] === string[string.length - 1 - i]) {
      equalLetterCounter++;
    }
  }
  // Restituisco risultato Booleano su eguaglianza
  return equalLetterCounter === string.length;
}
// Risultato comparazione
if (palindrome(userWord)) {
  alert("La parola/frase è palindroma");
} else {
  alert("La parola/frase non è palindroma");
}

// Variante con ciclo while
function isPalindrome(string) {
  console.log("variante while");
  let counter = 0;
  do {
    if (string[counter] === string[string.length - 1 - counter]) {
      counter++;
    } else {
      return false;
    }
  } while (counter < string.length);
  return true;
}
if (isPalindrome(userWord)) {
  alert("La parola/frase è palindroma");
} else {
  alert("La parola/frase non è palindroma");
}
