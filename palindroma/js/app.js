"use strict";

// Chiedere all’utente di inserire una parola
const userWord = prompt("Inserisci una parola/frase").toLowerCase();

// Creare una funzione per capire se la parola inserita è palindroma
function palindrome(string) {
   let equalLetterCounter = 0;
   for (let i = 0; i < string.length; i++) {
      // Comparazione prima lettera con ultima, seconda con penultima e via scalando
      console.log(string[i], string[string.length - 1 - i])
      if (string[i] === string[string.length - 1 - i]){
         // Incremento contatore per ogni lettera uguale a quella nella stessa posizione a partire dal fondo
         equalLetterCounter++;
         console.log(equalLetterCounter);
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