const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timeText = document.getElementById('timer');

let timeElapsed = 0
let intervalId

const updateTime = () => {
    timeElapsed++

    let hoursElapsed = Math.floor(timeElapsed/3600)
    let minutesElapsed = Math.floor(timeElapsed/60)
    let secondsElapsed = timeElapsed % 60

    timeText.innerHTML = `${hoursElapsed.toString().padStart(2, "0")}:${minutesElapsed.toString().padStart(2, "0")}:${secondsElapsed.toString().padStart(2, "0")}`

    if(hoursElapsed == 24){
        resetTimer()
    }
}

const startTimer = () => {
    if(!intervalId){
        intervalId = setInterval(updateTime, 1000);
    }
}

const stopTimer = () => {
    clearInterval(intervalId)
    intervalId = null
}

const resetTimer = () => {
    timeElapsed = 0
    stopTimer()
    timeText.innerHTML = `00:00:00`;
}

start.addEventListener('click', startTimer)
stop.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer)