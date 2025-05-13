const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timeText = document.getElementById('timer');

let timeLeft = 1500;
let intervalId;

const updateTime = () => {
    let minutesLeft = Math.floor(timeLeft / 60);
    let secondsLeft = timeLeft % 60;

    timeText.innerHTML = `${minutesLeft.toString().padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;

    timeLeft--;

    if (minutesLeft == 0 && secondsLeft == 0) {
        clearInterval(intervalId);
        intervalId = null;
        alert("Your session has completed!!")
        resetTimer()
    }
};

const startTimer = () => {
    if (!intervalId) {
        intervalId = setInterval(updateTime, 1000);
    }
};

const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
};

const resetTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
    timeLeft = 1500;
    timeText.innerHTML = "25:00";
};

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer)