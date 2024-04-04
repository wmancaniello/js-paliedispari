// test
//  alert("Ciao")

//  Scelta utente pari-dispari / numero tra 1 e 5
const userPariDispari = prompt("Pari o Dispari?");
const userNumero = parseInt(prompt("Scegli un numero tra 1 e 5"));

console.log(userPariDispari, typeof userPariDispari);
console.log(userNumero, typeof userNumero);

//  Tramite la funzione generiamo un numero random per il computer
const computerNumero = rndNumber();
console.log(computerNumero, typeof computerNumero);