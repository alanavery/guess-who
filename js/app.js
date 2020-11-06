// document.addEventListener('DOMContentLoaded', () => {


// Variables and DOM elements

// let twoPlayers = false;
// let gameOver = false;
// let p1 = true;
let score1 = 0;
let score2 = 0;
let p1Person;
let p2Person;
let possibilities = allPeople;
let computerFirstQuestion = true;
let feature;
let adjective;

// Sections

let secPopup = document.querySelector('.sec-popup');
let secMysteryPerson = document.querySelector('.sec-mystery-person');
let footer = document.querySelector('footer');
let secControls = document.querySelector('.sec-controls');
let secOutcome = document.querySelector('.sec-outcome');
let secPeople = document.querySelector('.sec-people');
let secQuestion = document.querySelector('.sec-question');

// Divs

let divP1Question = document.querySelector('.div-p1-question')
let divResponseButtons = document.querySelector('.div-response-buttons');

// Buttons

let buttonStart = document.querySelector('.button-start');
let buttonAsk = document.querySelector('.button-ask');
let buttonNext1 = document.querySelector('.button-next1');
let buttonNext2 = document.querySelector('.button-next2');
let buttonYes = document.querySelector('.button-yes');
let buttonNo = document.querySelector('.button-no');
let buttonGuess = document.querySelector('.button-guess');
let buttonPlayAgain = document.querySelector('.button-play-again');

// Inputs

let p1Guess = document.getElementById('p1-guess');



let selectFeature = document.querySelector('.feature');
let selectAdjective = document.querySelector('.adjective');
let inputResponse = document.querySelector('.user-response');
let mysteryPerson = document.querySelector('.mystery-person');
let currentQuestion = document.querySelector('.current-question');
let currentResponse = document.querySelector('.current-response');
let response1 = document.querySelector('.response1');
let response2 = document.querySelector('.response2');
let outcome = document.querySelector('.outcome');

let selectQuestionType = document.querySelector('.question-type'); // Version 3
let questionCenter = document.querySelector('.question-center'); // Version 3

let allFeatures = Object.keys(allPeople[0]).filter(feature => {
  if (feature !== 'name' && feature !== 'gender') {
    return true;
  } else {
    return false;
  }
});



// Helper functions

let populateSelectMenu = (selectMenu, optionsArray) => { // Version 3
  removeAllChildElements(selectMenu);
  optionsArray.forEach(option => {
    let newOption = document.createElement('option');
    newOption.textContent = option;
    newOption.value = option;
    selectMenu.appendChild(newOption);
  });
  if (selectQuestionType.value === 'Does' && selectMenu === selectAdjective) {
    let blankOption = document.createElement('option');
    blankOption.textContent = 'Leave blank';
    blankOption.value = 'blank';
    selectMenu.appendChild(blankOption);
  }
  selectMenu.value = '';
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

let handleSelectQuestionType = () => { // Version 3
  hide(buttonAsk);
  if (selectQuestionType.value === 'Does') {
    questionCenter.textContent = 'your person have';
    show(selectFeature);
    hide(selectAdjective);
    populateSelectMenu(selectFeature, allFeatures);
  } else {
    questionCenter.textContent = 'your person a';
    show(selectAdjective);
    hide(selectFeature);
    let gender = ['woman', 'man'];
    populateSelectMenu(selectAdjective, gender);
  }
};

let handleSelectFeature = () => { // Version 3
  show(buttonAsk);
  feature = selectFeature.value;
  if (feature.endsWith('s') || feature === 'hair') {
    questionCenter.textContent = 'your person have';
  } else {
    questionCenter.textContent = 'your person have a';
  }
  let allAdjectives = [];
  allPeople.forEach(person => {
    allAdjectives = allAdjectives.concat(person[feature]);
  });
  allAdjectives = allAdjectives.filter((adjective, index) => {
    return allAdjectives.indexOf(adjective) === index;
  });
  if (selectQuestionType.value === 'Does' && allAdjectives.length) {
    show(selectAdjective);
    populateSelectMenu(selectAdjective, allAdjectives);
  } else {
    hide(selectAdjective);
  }
};

let handleSelectAdjective = () => { // Version 3
  adjective = selectAdjective.value;
  if (adjective === 'woman' || adjective === 'man') {
    show(buttonAsk);
    feature = 'gender';
  } else if (adjective === 'blank') {
    adjective = '';
    selectAdjective.value = '';
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

let clearText = () => {
  response1.textContent = '';
  response2.textContent = '';
  currentQuestion.textContent = '';
};

let hideButtons = () => {
  hide(divResponseButtons);
  hide(buttonAsk);
  hide(buttonNext1);
  hide(buttonNext2);
};



// Primary functions

let assignMysteryPeople = () => {
  let randomNum1 = pickRandomNum(allPeople.length);
  let randomNum2 = pickRandomNum(allPeople.length);
  while (randomNum2 === randomNum1) {
    randomNum2 = pickRandomNum(allPeople.length);
  }
  p1Person = allPeople[randomNum1];
  p2Person = allPeople[randomNum2];
  mysteryPerson.textContent = `Your Mystery Person is ${p1Person.name}.`;
  handleNext2();
  hide(secPopup);
  hide(buttonStart);
  console.log(p1Person, p2Person);
};

let handleAsk = () => {
  console.log(adjective, feature);
  hide(divP1Question);
  hide(buttonAsk);
  setTimeout(displayQuestion, 1000);
  if (adjective && p2Person[feature].includes(adjective) || (!adjective && p2Person[feature].length > 0)) {
    setTimeout(() => response2.textContent = 'Yes', 3000);
  } else {
    setTimeout(() => response2.textContent = 'No', 3000);
  }
  setTimeout(() => show(buttonNext1), 5000);
};

let handleNext1 = () => {
  currentQuestion.textContent = '';
  response2.textContent = '';
  hide(buttonNext1);
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
  setTimeout(displayQuestion, 2000);
  setTimeout(() => show(divResponseButtons), 4000);
};

let handleResponse = (event) => {
  setTimeout(() => {
    if (event.target.classList[0] === 'button-yes') {
      response1.textContent = 'Yes';
      possibilities = possibilities.filter(person => person[feature].includes(adjective));
    } else if (event.target.classList[0] === 'button-no') {
      response1.textContent = 'No';
      possibilities = possibilities.filter(person => !person[feature].includes(adjective));
    }
    hide(divResponseButtons);
  }, 1000);
  setTimeout(() => {
    if (possibilities.length === 1) {
      outcome.textContent = `I want to make a guess: ${p1Person.name} is your Mystery Person! I win!`; // Future feature 1
      show(secPopup);
      show(buttonPlayAgain);
      hide(divP1Question);
      clearText();
      hideButtons();
    } else {
      console.log(possibilities); // Test
      setTimeout(() => show(buttonNext2), 2000);
    }
  }, 2000);
};

let handleNext2 = () => {
  selectQuestionType.value = 'Does';
  handleSelectQuestionType();
  show(divP1Question);
  clearText();
  hideButtons();
};

let handleP1Guess = () => {
  if (p1Guess.value === p2Person.name) {
    outcome.textContent = `${p2Person.name} is correct! You win!`;
  } else {
    outcome.textContent = `${p1Guess.value} is not correct. My Mystery Person is ${p2Person.name}. Sorry, you lose.`;
  }
  p1Guess.value = '';
  show(secPopup);
  show(buttonPlayAgain);
  hide(divP1Question);
  clearText();
  hideButtons();
};

let handlePlayAgain = () => {
  possibilities = allPeople;
  computerFirstQuestion = true;
  assignMysteryPeople();
}

let fadePerson = (event) => {
  if (event.target.classList[0]) {
    event.target.classList.remove('faded');
  } else {
    event.target.classList.add('faded');
  }
};



// Event listeners

buttonStart.addEventListener('click', assignMysteryPeople);
buttonAsk.addEventListener('click', handleAsk);
buttonNext1.addEventListener('click', handleNext1);
buttonNext2.addEventListener('click', handleNext2);
divResponseButtons.addEventListener('click', handleResponse);
buttonGuess.addEventListener('click', handleP1Guess);
buttonPlayAgain.addEventListener('click', handlePlayAgain);
secPeople.addEventListener('click', fadePerson);
selectQuestionType.addEventListener('change', handleSelectQuestionType); // Version 3
selectFeature.addEventListener('change', handleSelectFeature); // Version 3
selectAdjective.addEventListener('change', handleSelectAdjective); // Version 3



// });





// Future features
// 1. Have the computer guess its last possibility, instead of the actual solution. In order for this to work, you'll need to check the accuracy of every question the user asked.