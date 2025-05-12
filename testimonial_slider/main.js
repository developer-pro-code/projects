const image = document.getElementById('image')
const description = document.getElementById('description')
const div = document.querySelector('div')

async function testimonial() {
    try {
        const respone = await fetch('https://dummyjson.com/quotes');
        const data = await respone.json()
        // console.log(data)
        const totalLength = data.quotes.length
        description.innerHTML = `${data.quotes[0].quote}`
        let index = 1
        let intervalId
        function logging(){
            if(index >= totalLength){
                clearInterval(intervalId)
                intervalId = null
            }else{
                description.innerHTML = `${data.quotes[index].quote}`
                index++
            }
        }
        intervalId = setInterval(logging, 5000);
        
    } catch (error) {
        console.log('something went wrong')
    }
}

testimonial()
    // / opt / cursor / assets / cursor.png;