/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function () {
  const l1 = 6;
  const l2 = 12;
  const moltiplication = l1 * l2;
  console.log(moltiplication);
};
area();

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  let sum = n1 + n2;
  if (n1 === n2) {
    sum = sum * 3;
  }
  console.log(sum);
};
crazySum(12, 8);
crazySum(3, 3);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n1) {
  let difference = n1 - 19;
  if (n1 > 19) {
    difference = difference * 3;
  }
  console.log(difference);
};
crazyDiff(6);
crazyDiff(25);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  let truthy = "";
  if ((n >= 20 && n <= 100) || n === 400) {
    truthy = true;
  } else {
    truthy = false;
  }
  console.log(truthy);
};
boundary(2);
boundary(400);
boundary(87);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (string) {
  if (string.startsWith("EPICODE") >= 0) {
    console.log(string);
  } else {
    console.log("EPICODE" + string);
  }
};
epify("EPICODE");
epify("Daje");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n1) {
  if (n1 % 3 === 0 || n1 % 7 === 0) {
    console.log(n1, "è divisibile per 3 o per 7 ");
  } else {
    console.log(n1, "non è divisibile nè per 3 nè per 7");
  }
};
check3and7(14);
check3and7(26);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (word) {
  let word_split = word.split("");
  let reverseArray = word_split.reverse("");
  let joinArray = reverseArray.join("");
  console.log(joinArray);
};
reverseString("Hello");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (string) {
    let word = string.split("")
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);
        
      }
      return word.join("");
}
upperFirst("parola soldi giro cane")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (string){
    let splitString = string.split("")
    let removeLetters = splitString.slice(0 , -1)
    let joinLetters = removeLetters.join("")
    console.log (joinLetters)

}
cutString("favola")

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/ {};
