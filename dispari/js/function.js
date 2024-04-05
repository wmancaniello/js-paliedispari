// test
//  alert("Ciao")

/**
 * Descrizione: generare un numero random compreso tra 1 e 5
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// test
// console.log(getRndInteger(1, 10));

/**
 * Descrizione: la funzione che definisce se un numero è pari o dispari
 * @param {number} numToCheck
 * @returns {string} "pari" se il numero è pari, "dispari" al contrario
 */
function isEvenOdd(numToCheck) {
  if (numToCheck % 2 === 0) {
    return "pari";
  } else {
    return "dispari"
  }
}
