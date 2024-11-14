const apiKey = "y5zT5sFh305qdWPf7jdPJsbfdLdEaAVe"; 
const options = {method: 'GET', headers: {accept: 'application/json'}};

const weatherConditions = {
    0: "Unknown",
    1000: "Clear, Sunny",
    1100: "Mostly Clear",
    1101: "Partly Cloudy",
    1102: "Mostly Cloudy",
    1001: "Cloudy",
    2000: "Fog",
    2100: "Light Fog",
    4000: "Drizzle",
    4001: "Rain",
    4200: "Light Rain",
    4201: "Heavy Rain",
    5000: "Snow",
    5001: "Flurries",
    5100: "Light Snow",
    5101: "Heavy Snow",
    6000: "Freezing Drizzle",
    6001: "Freezing Rain",
    6200: "Light Freezing Rain",
    6201: "Heavy Freezing Rain",
    7000: "Ice Pellets",
    7101: "Heavy Ice Pellets",
    7102: "Light Ice Pellets",
    8000: "Thunderstorm"
};

function getWeatherMessage(condition) {
    if (condition.includes("Clear") || condition.includes("Sunny")) {
        return "Det ser ut att bli en solig dag! Glöm inte solglasögonen!";
    } else if (condition.includes("Rain") || condition.includes("Drizzle")) {
        return "Det verkar regna. Ta med ett paraply!";
    } else if (condition.includes("Snow")) {
        return "Det snöar! Klä dig varmt om du ska ut.";
    } else if (condition.includes("Thunderstorm")) {
        return "Det är åska i luften. Var försiktig om du går ut!";
    } else {
        return "Ha en bra dag, oavsett väder!";
    }
}

async function fetchWeatherData(city) {
    const apiKey = "y5zT5sFh305qdWPf7jdPJsbfdLdEaAVe";
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}&units=metric`;

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Kunde inte hämta vädret för ${city}. Statuskod: ${response.status}`);
        }
        const data = await response.json();
        
       
        const locationName = data.location.name || city;
        const temperature = data.data.values.temperature;
        const weatherCode = data.data.values.weatherCode;

        const condition = weatherConditions[weatherCode] || "Unknown weather";

        const weatherMessage = getWeatherMessage(condition);

        document.getElementById("weatherResult").innerHTML = `
            <strong>Stad:</strong> ${locationName}<br>
            <strong>Temperatur:</strong> ${temperature} °C<br>
            <strong>Väderförhållanden:</strong> ${condition} <br>
            <strong>Meddelande:</strong> ${weatherMessage}
        `;
    } catch (err) {
        console.error(err);
        document.getElementById("weatherResult").innerText = `Fel: ${err.message}`;
    }
}

document.getElementById('weatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        fetchWeatherData(city); 
    } else {
        document.getElementById("weatherResult").innerText = "Ange en giltig stad.";
    }
});


