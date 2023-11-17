/*Stampiamo i numeri da 1 a 100*/

for (let i = 0 ; i < 101; i++) {


/*Dobbiamo suddividerli in multipli di 3 e 5 scrivendo un testo affianco ai numeri con i multipli richiesti*/

if ( i % 5 == 0 && i % 3 == 0 ) {

    console.log(i + " - FizzBuzz");

} 

else if (i % 5 == 0) {
    
    console.log(i + " - Buzz");

}

else if (i % 3 == 0) {

    console.log(i + " - Fizz");

} 

else {
    console.log(i);
}

    
}




