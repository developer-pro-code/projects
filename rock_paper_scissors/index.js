const form = document.querySelector('form')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const result = document.querySelector('h2')
const reset = document.getElementById('reset')
const compResult = document.querySelector('#compres')

const computerChoices = ["rock", "paper", "scissors"]

let userScore = 0
let computerScore = 0

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const index = Math.floor((Math.random()*3))
    const computerChoice = computerChoices[index]

    //todo: write the logic for score
    if ((e.submitter.id === 'rock' && computerChoice === 'paper') || (e.submitter.id === 'paper' && computerChoice === 'scissors') || (e.submitter.id === 'scissors' && computerChoice === 'rock')) {
        computerScore++
    }else if((e.submitter.id === 'rock' && computerChoice === 'scissors') || (e.submitter.id === 'paper' && computerChoice === 'rock') || (e.submitter.id === 'scissors' && computerChoice === 'paper')){
        userScore++
    } 
    // console.log(computerChoice)
    // console.log(e.submitter.id)
    result.innerHTML = `Your score: ${userScore}` 
    compResult.innerHTML = `Computer score: ${computerScore}`
})
reset.addEventListener('click', ()=>{
    userScore = 0
    computerScore = 0
    result.innerHTML = `Your score: ${userScore}`;
    compResult.innerHTML = `Computer score: ${computerScore}`;
})
