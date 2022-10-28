"use strict";

// Chiedere all’utente di inserire una parola

const userWord = prompt("Inserisci una parola/frase");

// Creare una funzione per capire se la parola inserita è palindroma
function palindrome(string) {
   let wordCounter = 0;
   for (let i = 0; i < string.length; i++) {
      console.log(string[i], string[string.length - 1 - i])
      if (string[i] === string[string.length - 1 - i]){
         wordCounter++;
         console.log(wordCounter);
      }
   }
   if (wordCounter === string.length){
      return true;
   } else {
      return false;
   }
}

if (palindrome(userWord)) {
   alert("La parola inserita è palindroma");
} else {
   alert("La parola non è palindroma");
}