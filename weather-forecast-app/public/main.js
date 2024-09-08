// main.js
document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.querySelector('#weather-form');
    const cityInput = document.querySelector('#city');
    const weatherOutput = document.querySelector('#weather-output');

    weatherForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const city = cityInput.value;
        
        try {
            const response = await fetch(`http://localhost:3000/weather?city=${city}`);
            const data = await response.json();
            
            if (data.error) {
                weatherOutput.innerHTML = `<p>Error: ${data.error}</p>`;
            } else {
                weatherOutput.innerHTML = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            }
        } catch (error) {
            weatherOutput.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });
});
