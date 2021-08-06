console.log()

var nome = prompt("cognome")
var cognome = prompt("nome")
var colore = prompt("colore")


document.getElementById("il-tuo-cognome").innerHTML = cognome;
document.getElementById("il-tuo-nome").innerHTML = nome;
document.getElementById("il-tuo-colore").innerHTML = colore + 21;
