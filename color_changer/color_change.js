const buttons = document.querySelectorAll('.box')
const body = document.querySelector('body')

buttons.forEach((button)=>{
    console.log(button)
    button.addEventListener('click', (e)=>{
        console.log(e)
        console.log(e.target)
        if (e.target["id"]) {
            body.style.backgroundColor = e.target["id"]
        }
    })
})