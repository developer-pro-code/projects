const start = document.getElementById('start')
const stop = document.getElementById('stop')

//random color generator
function randomColor(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

function setRandomColor(){
    document.querySelector('body').style.backgroundColor = randomColor()
}

let intervalId;
start.addEventListener('click', ()=>{
    if(!intervalId){
        intervalId = setInterval(setRandomColor, 1000)
    }
})

stop.addEventListener('click', ()=>{
    clearInterval(intervalId)
    intervalId = null 
})