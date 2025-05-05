const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const message = document.querySelector('#message')

    const heightVal = isNaN(height) || height < 0 || height === ''
    const weightVal = isNaN(weight) || weight < 0 || weight === ''
    
    if(heightVal){
        result.innerHTML = 'please enter a valid height'
    }
    else if(weightVal){
        result.innerHTML = 'please enter a valid weight'
    }
    if(heightVal && weightVal){
        result.innerHTML = 'height and weight values can\'t be empty'
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.textContent = bmi
    }
    
    if(parseInt(result.textContent) < 18.6){
        message.textContent = 'you are underweight'
    } else if(parseInt(result.textContent) >= 18.6 && parseInt(result.textContent) <= 24.9){
        message.textContent = 'you are perfect'
    } else{
        message.textContent = 'you are overweight'
    }
})