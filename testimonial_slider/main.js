const image = document.getElementById('image')
const description = document.getElementById('description')
const div = document.querySelector('div')

async function testimonial() {
    try {
        const respone = await fetch('https://dummyjson.com/quotes');
        const data = await respone.json()
        
    } catch (error) {
        console.log('something went wrong')
    }
}

testimonial()