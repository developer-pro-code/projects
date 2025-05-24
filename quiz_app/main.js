const game = document.querySelector(".game");
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const results = document.querySelector(".results");
const correct = document.querySelector(".correct");
const wrong = document.querySelector(".wrong");
const score = document.querySelector(".score");
const play_again = document.querySelector(".play_again");

//dataset for questions
const data = [
  {
    ques: "What is the capital city of India?",
    options: [
      { answer: "New Delhi", isTrue: true },
      { answer: "Mumbai", isTrue: false },
      { answer: "Sasaram", isTrue: false },
      { answer: "Pune", isTrue: false }
    ]
  },
  {
    ques: "What is the city of India?",
    options: [
      { answer: " Delhi", isTrue: true },
      { answer: "Mumbai", isTrue: false },
      { answer: "Sasaram", isTrue: false },
      { answer: "Pune", isTrue: false }
    ]
  },
  {
    ques: "What is the capital of India?",
    options: [
      { answer: "New Delhi", isTrue: true },
      { answer: "mum", isTrue: false },
      { answer: "Sasaram", isTrue: false },
      { answer: "Pune", isTrue: false }
    ]
  },
  {
    ques: "What is the capital city of India?",
    options: [
      { answer: "New Delhi", isTrue: true },
      { answer: "Mumbai", isTrue: false },
      { answer: "Sasaram", isTrue: false },
    ]
  }
];

//variable declaration
let quesNumber = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let gameScore = 0;
let answerChosen = "";

//checking for correct and wrong answers function
//--FIXME: UPDATE THE SCORE VARIABLE AND MAKE SURE IT ONLY UPDATES ONCE PER CHOICE 
const checkAnswer = () => {
  answers.addEventListener('click', (e) => {
    if (e.target.tagName === "INPUT" && e.target.type === "radio") {
      answerChosen = e.target.value;
    }
  });
};
checkAnswer();


//display the question
const displayQues = (queNumber) => {
  question.textContent = data[queNumber].ques;
  data[queNumber].options.forEach((option) => {
    const div = document.createElement('div');
    const element = document.createElement('input');
    const optionVal = document.createTextNode(`${option.answer}`);
    element.setAttribute('type', 'radio');
    element.setAttribute('name', 'options');
    element.value = option.isTrue;
    div.appendChild(element);
    div.appendChild(optionVal);
    answers.appendChild(div);
  });
};
//calling the displayQues function
displayQues(quesNumber);

//play again function
const playAgain = () => {
  play_again.addEventListener('click', () => {
    quesNumber = 0;
    rightAnswers = 0;
    wrongAnswers = 0;
    gameScore = 0;
    answerChosen = "";

    correct.textContent = '';
    wrong.textContent = '';
    score.textContent = '';
    answers.innerHTML = '';

    results.style.display = 'none';
    game.style.display = 'flex';

    displayQues(quesNumber);
  });
  //adding event listener to the submit button and related functionality
};

submit.addEventListener('click', () => {
  if(answerChosen == undefined || answerChosen == ""){
    alert("please choose an option")
    return
  }
  if (answerChosen == "true") rightAnswers++;
  else wrongAnswers++;
  answerChosen = ""
  if (quesNumber == data.length - 1) {
    correct.textContent = `Correct: ${rightAnswers}`;
    wrong.textContent = `Wrong: ${wrongAnswers}`;
    gameScore = 10 * rightAnswers + (-0.25) * wrongAnswers;
    score.textContent = `Score: ${gameScore}`;
    game.style.display = 'none';
    results.style.display = 'flex';
  } else {
    quesNumber++;
    const divs = Array.from(answers.querySelectorAll('div'));
    divs.forEach((div) => div.remove());
    displayQues(quesNumber);
  }
});

playAgain();