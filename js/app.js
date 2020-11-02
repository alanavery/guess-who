document.addEventListener('DOMContentLoaded', () => {

let twoPlayers = false;
let gameOver = false;
let player1 = true;
let player1Score = 0;
let player2Score = 0;
let player1MysteryPerson;
let player2MysteryPerson;

// Functions

let assignMysterPerson = () => {
  let randomNum1 = Math.floor(Math.random() * allPeople.length);
  let randomNum2 = Math.floor(Math.random() * allPeople.length);
  while (randomNum2 === randomNum1) {
    randomNum2 = Math.floor(Math.random() * allPeople.length);
  }
  player1MysteryPerson = allPeople[randomNum1];
  player2MysteryPerson = allPeople[randomNum2];
}

assignMysterPerson();
console.log(player1MysteryPerson, player2MysteryPerson);

});