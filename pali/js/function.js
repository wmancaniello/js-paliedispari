// test
// alert("Ciao")




/**
 * Descriptione: Verifichiamo se la parola è palindroma
 * @param {string} palindroma
 * @returns {boolean} True se è palindroma, se non lo è false
 */
function parolaPalindroma(palindroma) {
    // Per verificare se la parola è palindroma, controlliamo se al contrario è uguale
    const parolaAlContrario = palindroma.split('').reverse().join('');
    console.log(parolaAlContrario, typeof parolaAlContrario);
    
    return palindroma === parolaAlContrario
}