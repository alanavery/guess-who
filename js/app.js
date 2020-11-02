document.addEventListener('DOMContentLoaded', () => {

  let twoPlayers = false;
  let gameOver = false;
  let player1 = true;
  let player1Score = 0;
  let player2Score = 0;
  let player1MysteryPerson;
  let player2MysteryPerson;

  // Functions

  let assignMysteryPerson = () => {
    let randomNum1 = Math.floor(Math.random() * allPeople.length);
    let randomNum2 = Math.floor(Math.random() * allPeople.length);
    while (randomNum2 === randomNum1) {
      randomNum2 = Math.floor(Math.random() * allPeople.length);
    }
    player1MysteryPerson = allPeople[randomNum1];
    player2MysteryPerson = allPeople[randomNum2];
  };

  assignMysteryPerson();
  console.log(player1MysteryPerson, player2MysteryPerson);

  let handleUserQuestion = () => {
    let feature = 'hat';
    let adjective = '';
    if (feature === 'gender') {
      console.log(`Is your person a ${adjective}?`);
    } else if (feature.endsWith('s') || feature === 'hair') {
      console.log(`Does your person have ${adjective}${feature}?`);
    } else {
      console.log(`Does your person have a ${adjective}${feature}?`);
    }    
    if (player2MysteryPerson[feature].includes(adjective) || (!adjective && player2MysteryPerson[feature].length > 0)) {
      console.log('Yes.');
    } else {
      console.log('No.');
    }
  };

  handleUserQuestion();

});