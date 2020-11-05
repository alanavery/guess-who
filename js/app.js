// document.addEventListener('DOMContentLoaded', () => {


// Variables and DOM elements

// let twoPlayers = false;
// let gameOver = false;
let player1 = true;
let player1Score = 0;
let player2Score = 0;
let player1MysteryPerson;
let player2MysteryPerson;
let possibilities = allPeople;
let computerFirstQuestion = true;
let feature;
let adjective;

let selectFeature = document.getElementById('feature');
let selectAdjective = document.getElementById('adjective');
let inputResponse = document.getElementById('user-response');
let inputGuess = document.getElementById('user-guess');
let buttonStart = document.getElementById('button-start');
let buttonAsk = document.getElementById('button-ask');
let buttonNext = document.getElementById('button-next');
let buttonAnswer = document.getElementById('button-answer');
let buttonGuess = document.getElementById('button-guess');
let buttonReset = document.getElementById('button-reset');
let secMysteryPerson = document.getElementById('sec-mystery-person');
let secQuestion = document.getElementById('sec-question');
let secGuess = document.getElementById('sec-guess');
let secOutcome = document.getElementById('sec-outcome');
let divUserQuestion = document.getElementById('div-user-question');
let divNextQuestion = document.getElementById('div-next-question');
let divUserResponse = document.getElementById('div-user-response');
let mysteryPerson = document.getElementById('mystery-person');
let currentQuestion = document.getElementById('current-question');
let currentResponse = document.getElementById('current-response');
let outcome = document.getElementById('outcome');

let questionType = document.getElementById('question-type'); // Version 3
let questionCenter = document.getElementById('question-center'); // Version 3

let allFeatures = Object.keys(allPeople[0]).filter(feature => {
  if (feature !== 'name' && feature !== 'gender') {
    return true;
  } else {
    return false;
  }
});

let allAdjectives = []; // Version 3
allPeople.forEach(person => {
  allFeatures.forEach(feature => {
    allAdjectives = allAdjectives.concat(person[feature]);
  });
});
allAdjectives = allAdjectives.filter((adjective, index) => {
  return allAdjectives.indexOf(adjective) === index;
});



// Helper functions

let createOptionElement = option => { // Version 3
  let newOptionElement = document.createElement('option');
  newOptionElement.value = option;
  newOptionElement.textContent = option;
  return newOptionElement;
};

let removeAllChildElements = parent => { // Version 3
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

let show = element => {
  element.classList.remove('hidden');
};

let hide = element => {
  element.classList.add('hidden');
};

let pickRandomNum = maxNum => {
  return Math.floor(Math.random() * maxNum);
};

let checkForValidQuestion = () => {
  let test1 = possibilities.some(person => person[feature].length);
  let test2 = possibilities.every(person => person[feature].includes(adjective));
  if (!test1) {
    return false;
  } else if (test2) {
    return false;
  } else {
    return true;
  }
};



// Display functions

let displayUserQuestion = () => { // Version 3
  if (questionType.value === 'Does') {
    questionCenter.textContent = 'your person have';
    show(selectFeature);
    hide(selectAdjective);
    removeAllChildElements(selectAdjective);
    let blankOption = createOptionElement('blank')
    allFeatures.forEach(feature => {
      let newOptionElement = createOptionElement(feature);
      selectFeature.appendChild(newOptionElement);
    });
  } else {
    questionCenter.textContent = 'your person a';
    show(selectAdjective);
    hide(selectFeature);
    removeAllChildElements(selectAdjective);
    let gender = ['woman', 'man'];
    gender.forEach(adjective => {
      let newOptionElement = createOptionElement(adjective);
      selectAdjective.appendChild(newOptionElement);
    });
  }
};

let displayQuestion = () => {
  if (feature === 'gender') {
    currentQuestion.textContent = `Is your person a ${adjective}?`;
  } else if (feature.endsWith('s') || feature === 'hair') {
    if (!adjective) {
      currentQuestion.textContent = `Does your person have ${feature}?`;
    } else {
      currentQuestion.textContent = `Does your person have ${adjective} ${feature}?`;
    }
  } else {
    if (!adjective) {
      currentQuestion.textContent = `Does your person have a ${feature}?`;
    } else {
      currentQuestion.textContent = `Does your person have a ${adjective} ${feature}?`;
    }
  }
};

let displayGameScreen1 = () => {
  // Show
  show(secMysteryPerson);
  show(buttonStart);
  // Hide
  hide(secQuestion);
  hide(secGuess);
  hide(secOutcome);
  // Clear text
  mysteryPerson.textContent = '';
};

let displayGameScreen2 = () => {
  displayUserQuestion(); // Version 3
  // Show
  show(secQuestion);
  show(secGuess);
  show(divUserQuestion);
  // Hide
  hide(buttonStart);
  hide(divNextQuestion);
  hide(divUserResponse);
  // Clear text
  currentQuestion.textContent = '';
  currentResponse.textContent = '';
  selectFeature.value = '';
  selectAdjective.value = '';
  inputGuess.value = '';
};

let displayGameScreen3 = () => {
  // Show
  show(divNextQuestion);
  // Hide
  hide(divUserQuestion);
};

let displayGameScreen4 = () => {
  // Show
  show(divUserResponse);
  // Hide
  hide(divNextQuestion);
  // Clear text
  currentResponse.textContent = '';
  inputResponse.value = '';
};

let displayGameScreen5 = string => {
  // Show
  show(secOutcome);
  // Hide
  hide(secMysteryPerson);
  hide(secQuestion);
  hide(secGuess);
  // Set text
  outcome.textContent = string;
};



// Primary functions

let assignMysteryPerson = () => {
  let randomNum1 = pickRandomNum(allPeople.length);
  let randomNum2 = pickRandomNum(allPeople.length);
  while (randomNum2 === randomNum1) {
    randomNum2 = pickRandomNum(allPeople.length);
  }
  player1MysteryPerson = allPeople[randomNum1];
  player2MysteryPerson = allPeople[randomNum2];
  mysteryPerson.textContent = `Your Mystery Person is ${player1MysteryPerson.name}.`;
  displayGameScreen2();
  console.log(player1MysteryPerson, player2MysteryPerson); // Test
};

let handleUserQuestion = () => {
  feature = selectFeature.value;
  adjective = selectAdjective.value;
  displayQuestion();
  if (player2MysteryPerson[feature].includes(adjective) || (!adjective && player2MysteryPerson[feature].length > 0)) {
    currentResponse.textContent = 'Yes.';
  } else {
    currentResponse.textContent = 'No.';
  }
  displayGameScreen3();
};

let handleComputerQuestion = () => {
  if (computerFirstQuestion) {
    feature = 'gender';
    adjective = 'man';
    computerFirstQuestion = false;
  } else {
    // Pick a feature ————————————————————
    feature = allFeatures[pickRandomNum(allFeatures.length)];
    // Pick an adjective ————————————————————
    let searchableValues = [];
    possibilities.forEach(person => {
      searchableValues = searchableValues.concat(person[feature]);
    });
    adjective = searchableValues[pickRandomNum(searchableValues.length)];
    // Check if the feature and adjective are valid ————————————————————
    let validQuestion = checkForValidQuestion();
    while (!validQuestion) {
      feature = allFeatures[pickRandomNum(allFeatures.length)];
      let searchableValues = [];
      possibilities.forEach(person => {
        searchableValues = searchableValues.concat(person[feature]);
      });
      adjective = searchableValues[pickRandomNum(searchableValues.length)];
      validQuestion = checkForValidQuestion();
    }
  }
  displayQuestion();
  displayGameScreen4();
};

let handleUserResponse = () => {
  if (inputResponse.value === 'yes') {
    possibilities = possibilities.filter(person => person[feature].includes(adjective));
  } else {
    possibilities = possibilities.filter(person => !person[feature].includes(adjective));
  }
  if (possibilities.length === 1) {
    displayGameScreen5(`I want to make a guess: ${player1MysteryPerson.name} is your Mystery Person! I win!`); // Future feature 1
  } else {
    displayGameScreen2();
    console.log(possibilities); // Test
  }
};

let handleUserGuess = () => {
  if (inputGuess.value === player2MysteryPerson.name) {
    displayGameScreen5(`${player2MysteryPerson.name} is correct! You win!`);
  } else {
    displayGameScreen5(`${inputGuess.value} is not correct. My Mystery Person is ${player2MysteryPerson.name}. Sorry, you lose.`);
  }
};

let handleGameOver = () => {
  possibilities = allPeople;
  computerFirstQuestion = true;
  displayGameScreen1();
}



// Event listeners

buttonStart.addEventListener('click', assignMysteryPerson);
buttonAsk.addEventListener('click', handleUserQuestion);
buttonNext.addEventListener('click', handleComputerQuestion);
buttonAnswer.addEventListener('click', handleUserResponse);
buttonGuess.addEventListener('click', handleUserGuess);
buttonReset.addEventListener('click', handleGameOver);

questionType.addEventListener('change', displayUserQuestion); // Version 3



// });





// Future features
// 1. Have the computer guess its last possibility, instead of the actual solution. In order for this to work, you'll need to check the accuracy of every question the user asked.