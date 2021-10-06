let randomNumber = Math.floor(Math.random() * 100) + 1;
randomNumber = randomNumber.toString();

let display = '?';

console.log(randomNumber);

alert(`Bienvenue, devine le ${display} qui represente le prix mystère !`);

let guessCount = 0;

while(display !== randomNumber) {
   
    let guess = prompt(`Devine '${display}'`);

    if(guess > randomNumber.toString()) {
        alert("c'est plus petit!");
        guessCount = guessCount + 1;
    }
    if(guess < randomNumber.toString()) {
        alert("c'est plus grand!");
        guessCount = guessCount + 1;
    }
    if(guess === randomNumber) {
        display = guess;
        guessCount = guessCount + 1;
    }
}

alert(`Bien joué, c'etait bien ${randomNumber}, tu as trouvé avec ${guessCount} essais!`);