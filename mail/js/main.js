/*
1) creare un'array con una serie di e-mail
2) chiedere all'utente la sua e-mail
3) se la sua mail è inserita anche nell'array consentirgli l'accesso altrimenti negarlo.
4) stampare un messaggio con l'esito
*/

const yourMail = prompt("Inserisci la tua e-mail.")
console.log(yourMail);

const mailsAllowed = ['pippo.pluto@yahoo.it', 'topolino.pluto@gmail.com', 'paperino007@hotmail.it'];
console.log(mailsAllowed);

for (let i = 0; i < mailsAllowed.length; i++){
    
    if (mailsAllowed[i] !== yourMail){

        document.getElementById('login').innerHTML =`la tua e-mail: ${yourMail} non risulta nel nostro server. Accesso non consentito.`;
        console.log(mailsAllowed[i]);

    }else if (mailsAllowed[i] == yourMail){

        document.getElementById('login').innerHTML =`la tua e-mail: ${yourMail}  risulta nel nostro server. Accesso  consentito.`;
        console.log(mailsAllowed[i]);
    }else{
        
    }

}