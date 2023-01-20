let nomeUtente = prompt('Qual è il tuo nome?');
let cognomeUtente = prompt('Qual è il tuo cognome?');
let colorePreferito = prompt('Qual è il tuo colore preferito?');

document.getElementById('welcome').innerHTML = `
La tua password è ${nomeUtente + cognomeUtente + colorePreferito + Math.floor(Math.random() * 100)} e qui c'è altro testo.
`

// 'La tua password è ' + nomeUtente + cognomeUtente + colorePreferito + Math.floor(Math.random() * 100);

