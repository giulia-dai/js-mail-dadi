/*
1) chiedere all'utente di inserire un numero da 1 a 6
2) se il computer ha fatto un numero superiore vince lui altrimente vince l'utente
*/

let utenteNumero = parseInt(prompt ('Inserisci un numero da 1 a 6'));
console.log(utenteNumero);

let pcNumero = Math.floor(Math.random ()* 6) + 1;
console.log(pcNumero);

if (utenteNumero > 6){
    alert("Valore massimo consentito: 6.");


}else if (utenteNumero < 1){
   alert("Valore minimo consentito: 1.");

}else{
    console.log(utenteNumero);
}


if (pcNumero > utenteNumero) {

document.getElementById('risultato').innerHTML = `Ha vinto il computer con: ${pcNumero} contro: ${utenteNumero} RIPROVA!`;

}else {
document.getElementById('risultato').innerHTML = `Hai vinto con: ${utenteNumero} contro: ${pcNumero}!`;

}