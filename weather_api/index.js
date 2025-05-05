const cityName = document.querySelector('input');
const form = document.querySelector('form');
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    async function weatherCallApi(city) {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e388ce9065f742ceb64211949251904&q=${city}&aqi=no`);
            const data = await response.json();
            newDiv.innerHTML = `<h1>${data.current.feelslike_c}<sup>◦</sup>C</h1>`;
        } catch (error) {
            newDiv.textContent = 'something went wrong!!'
        }
    }

    weatherCallApi(cityName.value);
});