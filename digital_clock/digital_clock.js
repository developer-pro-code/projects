const clock = document.getElementById('clock')


setInterval(() => { //* this method runs the function after every specified interval
    let time = new Date().toLocaleTimeString('en-US', {hour12: true})
    clock.innerHTML = time    
}, 1000);