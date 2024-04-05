//  Scelta utente pari-dispari / numero tra 1 e 5
const userChoice = prompt("Pari o Dispari?");
const userNum = parseInt(prompt("Scegli un numero tra 1 e 5"));
const computerNum = getRndInteger(1, 5)
// test
// console.log(userChoice, userNum, computerNum);

const sum = userNum + computerNum;
const control = isEvenOdd(sum);
// test
console.log(sum, control);

let resultMessage = "";

if (userChoice === control) {
    resultMessage = "Congratulazioni hai vinto!"
} else {
    resultMessage = "Mi dispiace hai perso"
}

// OUTPUT
console.log(resultMessage);