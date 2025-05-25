const game = document.querySelector(".game");
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const results = document.querySelector(".results");
const correct = document.querySelector(".correct");
const wrong = document.querySelector(".wrong");
const score = document.querySelector(".score");
const play_again = document.querySelector(".play_again");
const category = document.querySelector('.category');

//dataset for questions
// const data = [
//   {
//     ques: "What is the capital city of India?",
//     options: [
//       { answer: "New Delhi", isTrue: true },
//       { answer: "Mumbai", isTrue: false },
//       { answer: "Sasaram", isTrue: false },
//       { answer: "Pune", isTrue: false }
//     ]
//   },
//   {
//     ques: "What is the city of India?",
//     options: [
//       { answer: " Delhi", isTrue: true },
//       { answer: "Mumbai", isTrue: false },
//       { answer: "Sasaram", isTrue: false },
//       { answer: "Pune", isTrue: false }
//     ]
//   },
//   {
//     ques: "What is the capital of India?",
//     options: [
//       { answer: "New Delhi", isTrue: true },
//       { answer: "mum", isTrue: false },
//       { answer: "Sasaram", isTrue: false },
//       { answer: "Pune", isTrue: false }
//     ]
//   },
//   {
//     ques: "What is the capital city of India?",
//     options: [
//       { answer: "New Delhi", isTrue: true },
//       { answer: "Mumbai", isTrue: false },
//       { answer: "Sasaram", isTrue: false },
//     ]
//   }
// ];

//variable declaration
let quesNumber = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let gameScore = 0;
let answerChosen = "";

const data = [];
const apiUrl = 'https://the-trivia-api.com/v2/questions'

fetch(apiUrl).then(res => res.json()).then(api_data => {
  api_data.forEach((element) => {
    const obj = {
      ques: element.question.text,
      options: [
        { answer: element.correctAnswer, isTrue: true },
      ],
      category: element.category,
      difficulty: element.difficulty
    };
    element.incorrectAnswers.forEach((incorrectAnswer) => {
      obj.options.push({ answer: incorrectAnswer, isTrue: false });
    });
    data.push(obj);
  });

  //shuffling the options
  const shuffleOptions = () => {
    let length = data[quesNumber].options.length;
    let randomPos = Math.floor(Math.random() * length);
    let temp = data[quesNumber].options[0];
    data[quesNumber].options[0] = data[quesNumber].options[randomPos];
    data[quesNumber].options[randomPos] = temp;
    console.log(data[0].options);
  };
  
  //checking for correct and wrong answers function
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
    question.textContent = `Q${quesNumber + 1}: ${data[queNumber].ques}`;
    category.textContent = `Category=> ${data[queNumber].category}`;
    //calling the shuffleOptions function
    shuffleOptions();
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

  //adding event listener to the submit button and related functionality
  submit.addEventListener('click', () => {
    if (answerChosen == undefined || answerChosen == "") {
      alert("please choose an option");
      return;
    }
    if (answerChosen == "true") rightAnswers++;
    else wrongAnswers++;
    answerChosen = "";
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
  };

  playAgain();
});
