// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setWinningCharacter = () => {
  winningCharacter = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Set charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // Generate the board of characters
  generateBoard();
  // Assign winning character with setWinningCharacter
  setWinningCharacter();
}

// Set currentQuestion object when you select something in the dropdown
const selectQuestion = () => {

  // Stores what category the question belongs to.
  const questionCategory = questions.options[questions.selectedIndex].parentNode.label;
 
  // Stores the actual value of the question selected
  const questionValue = questions.options[questions.selectedIndex].value;

  // Object with selected category and value
  currentQuestion = {
    category: questionCategory,
    value: questionValue,
  }
}

// Invoked when 'Find Out' button is clicked
// const checkQuestionOld = () => {

//   if (currentQuestion.category === 'hair' || currentQuestion.category === 'eyes'){
//     if (currentQuestion.value === winningCharacter.hair || currentQuestion.value === winningCharacter.eyes) {
//       alertMessage('true');
//       filterCharacters('keep');
//     } else {
//       alertMessage('false');
//       filterCharacters('remove');
//     }
//   } else if (currentQuestion.category === 'accessories' || currentQuestion.category === 'other') {
//     if (winningCharacter.accessories.includes(currentQuestion.value)){
//       alertMessage('true');
//       filterCharacters('keep');

//     } else {
//       alertMessage('false');
//       filterCharacters('remove');
//     }
//   }
// }


// Invoked when 'Find Out' button is clicked
const checkQuestion = () => {
  // status will be boolean - true or false
  let status = winningCharacter[currentQuestion.category].includes(currentQuestion.value)
  alertMessage(status);   
  filterCharacters(status);
  console.log(charactersInPlay);
}

// function for alerting the player
// TO DO create alert messages for the different attributes to avoid weird grammer
const alertMessage = (correct) => {
  if (correct) {
    alert (`Correct!`)
  } else {
    alert (`Nope, guess again!`)
  }
}

// Invoked after question is checked
const filterCharacters = (keep) => {
  if (keep) {
    charactersInPlay = charactersInPlay.filter((character) => { 
      return character[currentQuestion.category].includes(currentQuestion.value);
    });
  } else {
    charactersInPlay = charactersInPlay.filter((character) => { 
      return !character[currentQuestion.category].includes(currentQuestion.value);
    });
  }
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (character) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  let playerGuess = confirm(`Are you sure you want to guess that it's ${character}?`);
  // If the player wants to guess, invoke the checkMyGuess function.
  if (playerGuess) {
    checkMyGuess(character);
  } //else nothing
}

// If you confirm, this function is invoked
const checkMyGuess = (character) => {
  console.log("now I'll check if you're right");
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);
