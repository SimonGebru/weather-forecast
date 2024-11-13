const apiKey = "y5zT5sFh305qdWPf7jdPJsbfdLdEaAVe"; 
const options = {method: 'GET', headers: {accept: 'application/json'}};

async function fetchWeatherData() {
    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}&units=metric`;
    try {
        const response = await fetch(url, options);
        const data = await response.json(); 
        console.log(data); 
    } catch (err) {
        console.error(err); 
    }
}

document.getElementById('weatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    fetchWeatherData(city);
});


