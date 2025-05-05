const computerNumber = Math.floor((Math.random()*100+1))
const guesses = document.querySelector('.lastResult')
const message = document.querySelector('.message')
const form = document.querySelector('form')
const guess = document.querySelector('.guessField')
const prevGuess = document.querySelector('.guesses')
const lowhigh = document.querySelector('.lowhigh')

const previousValues = new Array()

form.addEventListener('submit', function (e){
    e.preventDefault()

    const guessValue = parseInt(document.querySelector('.guessField').value)

    if(guessValue <= 100){
        previousValues.push(guessValue)
    }
    
    if(isNaN(guessValue) || guessValue < 1 || guessValue > 100){
        alert('Number should be valid')
    } else{
        const result = (guessValue === computerNumber)
        if(result){
            message.innerHTML = "you got it right"
            lowhigh.style.display = 'none'
        }
        else{
            guesses.innerHTML = parseInt(guesses.innerHTML)-1;
            prevGuess.innerHTML = `${previousValues}`
            message.innerHTML = 'You got it wrong. try again'
            form.reset()
            if(guessValue > computerNumber){
                lowhigh.innerHTML = 'high'
            }else{
                lowhigh.innerHTML = 'low'
            }
        }
    }
    if(parseInt(guesses.innerHTML) === 0){
        guess.disabled = true
        lowhigh.style.display = 'none'
        message.innerHTML = 'you are out of attempts'
        const finalMessage = document.createElement('div')
        finalMessage.appendChild(document.createTextNode(`Computer guessed ${computerNumber}`))
        document.body.appendChild(finalMessage)
    }
})