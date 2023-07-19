// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere.
let dist =parseInt (prompt ("Inserisca il numero di chilometri che vuole percorrere" ))
let price = dist * 0.21 ;
let finalPrice = price;

// Il programma chiede l'età del passeggero.
let ageUser = parseInt (prompt ("Per favore inserisci un\'età valida, compresa tra 12 e 99 anni"))
console.log(ageUser)
// Per scoprire il prezzo del biglietto =finalPrice :
// in base ai km che l'utente vuole percorrere e la sua eta 
if (ageUser < 18 ) {
    finalPrice =price - (price /100 * 20);
    console.log(ageUser, dist); 
}else if (ageUser >= 65) {
    finalPrice = price - (price /100 * 40);
    console.log(ageUser, dist); 
}
console.log(finalPrice)

document.getElementById('price').innerHTML = `Il prezzo riservato a Lei è di ${finalPrice.toFixed(1)} €`;

