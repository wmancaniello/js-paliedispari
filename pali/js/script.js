// test
// alert("Ciao")

//  utilizzo il Prompt per chiedere la parola all'utente
const parolaUser = prompt("Scrivi una parola e verificherò se questa è palindroma");

//  Applico la function creata precedentemente, ovvero parolaPalindroma
const verificaParola = parolaPalindroma(parolaUser);

//  OUTPUT

// HTML
const result = document.getElementById("risultato")

// Console
if (verificaParola) {
    result.innerHTML = "La parola da te inserita putroppo non è palindroma.";
    console.log("La parola da te inserita è palindroma.");
} else {
    result.innerHTML = "La parola da te inserita putroppo non è palindroma.";
    console.log("La parola da te inserita putroppo non è palindroma.");
}


// sarebbe da fixare le maiuscole(?)