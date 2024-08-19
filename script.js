
const apiKey = "70ba428bdd9aa87af7c734348822d09e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=London";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();
console.log("hello!");