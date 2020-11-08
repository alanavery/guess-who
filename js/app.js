document.addEventListener('DOMContentLoaded', () => {

  // Variables

  let score1 = 0;
  let score2 = 0;
  let p1Person;
  let p2Person;
  let possibilities = allPeople;
  let keyFeature;
  let keyAdjective;
  let allFeatures = Object.keys(allPeople[0]);
  let doesFeatures = allFeatures.filter(feature => feature !== 'name' && feature !== 'gender').sort();

  // Text elements

  let mysteryPerson = document.querySelector('.mystery-person');
  let currentQuestion = document.querySelector('.current-question');
  let response1 = document.querySelector('.response1');
  let response2 = document.querySelector('.response2');
  let outcome = document.querySelector('.outcome');
  let questionCenter = document.querySelector('.question-center');

  // Sections

  let secPopup = document.querySelector('.sec-popup');
  let secPeople = document.querySelector('.sec-people');

  // Divs

  let divP1Question = document.querySelector('.div-p1-question')
  let divResponseButtons = document.querySelector('.div-response-buttons');

  // Select menus

  let selectQuestionType = document.querySelector('.question-type');
  let selectFeature = document.querySelector('.feature');
  let selectAdjective = document.querySelector('.adjective');

  // Buttons

  let buttonStart = document.querySelector('.button-start');
  let buttonAsk = document.querySelector('.button-ask');
  let buttonNext1 = document.querySelector('.button-next1');
  let buttonNext2 = document.querySelector('.button-next2');
  let buttonGuess = document.querySelector('.button-guess');
  let buttonPlayAgain = document.querySelector('.button-play-again');

  // Inputs

  let p1Guess = document.getElementById('p1-guess');



  // Helper functions

  let pickRandomNum = maxNum => Math.floor(Math.random() * maxNum);

  let show = element => element.classList.remove('hidden');

  let hide = element => element.classList.add('hidden');

  let clearAll = () => {
    response1.textContent = '';
    response2.textContent = '';
    selectQuestionType.value = '';
    selectFeature.value = '';
    selectAdjective.value = '';
    hide(divP1Question);
    hide(divResponseButtons);
    hide(buttonAsk);
    hide(buttonNext1);
    hide(buttonNext2);
  };

  let getAdjectives = feature => {
    let allAdjectives = [];
    allPeople.forEach(person => allAdjectives.push(person[feature]));
    return allAdjectives.filter((adjective, index) => allAdjectives.indexOf(adjective) === index).sort();
  };

  let populateSelectMenu = (selectMenu, optionsArray) => {
    removeAllChildElements(selectMenu);
    optionsArray.forEach(option => {
      let newOption = document.createElement('option');
      newOption.textContent = option;
      newOption.value = option;
      selectMenu.appendChild(newOption);
    });
    selectMenu.value = '';
  };

  let removeAllChildElements = parent => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  let displayQuestion = () => {
    if (keyFeature === 'gender') {
      currentQuestion.textContent = `Is your person a ${keyAdjective}?`;
    } else if (keyFeature.endsWith('s') || keyFeature === 'hair') {
      if (typeof keyAdjective === 'string') {
        currentQuestion.textContent = `Does your person have ${keyAdjective} ${keyFeature}?`;
      } else {
        currentQuestion.textContent = `Does your person have ${keyFeature}?`;
      }
    } else {
      if (typeof keyAdjective === 'string') {
        currentQuestion.textContent = `Does your person have a ${keyAdjective} ${keyFeature}?`;
      } else {
        currentQuestion.textContent = `Does your person have a ${keyFeature}?`;
      }
    }
  };

  let checkForValidQuestion = () => {
    let bestPercentage = 0;
    allFeatures.forEach(feature => {
      let allAdjectives = [];
      possibilities.forEach(person => allAdjectives.push(person[feature]));
      getAdjectives(feature).forEach(uniqueAdjective => {
        let numAdjectives = allAdjectives.filter(adjective => adjective === uniqueAdjective).length;
        if (numAdjectives <= possibilities.length / 2 && numAdjectives / possibilities.length >= bestPercentage) {
          bestPercentage = numAdjectives / possibilities.length;
          keyFeature = feature;
          keyAdjective = uniqueAdjective;
        }
      });
    });
  };



  // Select menu/change functions

  let handleSelectQuestionType = () => {
    if (selectQuestionType.value === 'Does') {
      questionCenter.textContent = 'your person have';
      populateSelectMenu(selectFeature, doesFeatures);
      show(selectFeature);
      hide(selectAdjective);
    } else {
      questionCenter.textContent = 'your person a';
      populateSelectMenu(selectAdjective, getAdjectives('gender'));
      show(selectAdjective);
      hide(selectFeature);
    }
    hide(buttonAsk);
  };

  let handleSelectFeature = () => {
    keyFeature = selectFeature.value;
    if (keyFeature.endsWith('s') || keyFeature === 'hair') {
      questionCenter.textContent = 'your person have';
    } else {
      questionCenter.textContent = 'your person have a';
    }
    if (typeof allPeople[0][keyFeature] === 'string') {
      populateSelectMenu(selectAdjective, getAdjectives(keyFeature));
      show(selectAdjective);
      hide(buttonAsk);
    } else {
      show(buttonAsk);
      hide(selectAdjective);
    }
  };

  let handleSelectAdjective = () => {
    keyAdjective = selectAdjective.value;
    if (keyAdjective === 'woman' || keyAdjective === 'man') {
      keyFeature = 'gender';
    }
    show(buttonAsk);
  };



  // Button/click functions

  let assignMysteryPeople = () => {
    let randomNum1 = pickRandomNum(allPeople.length);
    let randomNum2 = pickRandomNum(allPeople.length);
    while (randomNum2 === randomNum1) {
      randomNum2 = pickRandomNum(allPeople.length);
    }
    p1Person = allPeople[randomNum1];
    p2Person = allPeople[randomNum2];
    mysteryPerson.textContent = `Your Mystery Person is ${p1Person.name}.`;
    hide(secPopup);
    hide(buttonStart);
    handleNext2();
    console.log(p1Person, p2Person); // Test
  };

  let handleAsk = () => {
    clearAll();
    if (!keyAdjective) {
      keyAdjective = true;
    }
    console.log(keyFeature); // Test
    console.log(keyAdjective); // Test
    displayQuestion();
    if (keyAdjective === p2Person[keyFeature]) {
      setTimeout(() => response2.textContent = 'Yes', 2000);
    } else {
      setTimeout(() => response2.textContent = 'No', 2000);
    }
    setTimeout(() => show(buttonNext1), 4000);
  };

  let handleNext1 = () => {
    keyAdjective = '';
    keyFeature = '';
    clearAll();
    currentQuestion.textContent = '';
    checkForValidQuestion();
    console.log(keyFeature); // Test
    console.log(keyAdjective); // Test
    setTimeout(displayQuestion, 2000);
    setTimeout(() => show(divResponseButtons), 4000);
  };

  let handleResponse = (event) => {
    clearAll();
    if (event.target.textContent === 'Yes') {
      response1.textContent = 'Yes';
      possibilities = possibilities.filter(person => person[keyFeature] === keyAdjective);
    } else if (event.target.textContent === 'No') {
      response1.textContent = 'No';
      possibilities = possibilities.filter(person => person[keyFeature] !== keyAdjective);
    }
    setTimeout(() => {
      if (possibilities.length === 1) {
        outcome.textContent = `I want to make a guess: ${p1Person.name} is your Mystery Person! I win!`; // Future feature 1
        show(secPopup);
        show(buttonPlayAgain);
        hide(divP1Question);
        clearText();
        hideButtons();
      } else {
        response2.textContent = 'Okay';
        show(buttonNext2);
        console.log(possibilities); // Test
      }
    }, 2000);
  };

  let handleNext2 = () => {
    keyAdjective = '';
    keyFeature = '';
    clearAll();
    currentQuestion.textContent = '';
    selectQuestionType.value = 'Does';
    handleSelectQuestionType();
    show(divP1Question);
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



  // Input functions

  let handleP1Guess = () => {
    clearAll();
    if (p1Guess.value === p2Person.name) {
      outcome.textContent = `${p2Person.name} is correct! You win!`;
    } else {
      outcome.textContent = `${p1Guess.value} is not correct. My Mystery Person is ${p2Person.name}. Sorry, you lose.`;
    }
    p1Guess.value = '';
    show(secPopup);
    show(buttonPlayAgain);
  };


  // Event listeners

  selectQuestionType.addEventListener('change', handleSelectQuestionType);
  selectFeature.addEventListener('change', handleSelectFeature);
  selectAdjective.addEventListener('change', handleSelectAdjective);
  buttonStart.addEventListener('click', assignMysteryPeople);
  buttonAsk.addEventListener('click', handleAsk);
  buttonNext1.addEventListener('click', handleNext1);
  divResponseButtons.addEventListener('click', handleResponse);
  buttonNext2.addEventListener('click', handleNext2);
  buttonPlayAgain.addEventListener('click', handlePlayAgain);
  secPeople.addEventListener('click', fadePerson);
  buttonGuess.addEventListener('click', handleP1Guess);

});



// Future features
// 1. Have the computer guess its last possibility, instead of the actual solution. In order for this to work, you'll need to check the accuracy of every question the user asked.