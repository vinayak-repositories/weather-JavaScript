# weather-JavaScript

Here is a line-by-line explanation of the code:

**Lines 1-2:**

```javascript
const apiKey = "70ba428bdd9aa87af7c734348822d09e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
```

These lines define two constants:

- `apiKey`: This stores your OpenWeatherMap API key, which is required to access the weather data. Replace `"70ba428bdd9aa87af7c734348822d09e"` with your own API key.
- `apiUrl`: This is the base URL of the OpenWeatherMap API for fetching weather data. It includes parameters for metric units and the city name (to be appended later).

**Lines 4-5:**

```javascript
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
```

These lines use `document.querySelector()` to select two elements from the HTML document:

- `searchBox`: This selects the input element within a container with the class `"search"`. This is likely where the user will enter the city name they want to see the weather for.
- `searchBtn`: This selects the button element within a container with the class `"search"`. This button will likely trigger the weather lookup process when clicked.

**Line 6:**

```javascript
const weatherIcon = document.querySelector(".weather-icon")
```

This line uses `document.querySelector()` to select the element with the class `"weather-icon"`. This element is likely an image that will be used to display the weather icon based on the retrieved conditions.

**Lines 8-19:**

```javascript
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}
```

This code defines an asynchronous function called `checkWeather` that takes a city name as input. Here's what happens inside the function:

1. **Fetch weather data:**
   - It constructs the complete API URL by adding the city name and API key to the base URL (`apiUrl`).
   - It uses the `fetch` API to retrieve the weather data from the OpenWeatherMap API.
   - The `await` keyword ensures that the function waits for the fetch operation to complete before proceeding.
   - The response is stored in the `response` variable.
2. **Parse JSON data:**
   - The `.json()` method is called on the response to parse the JSON-formatted data into a JavaScript object.
   - The parsed data is stored in the `data` variable.
   - The `await` keyword ensures that the function waits for the JSON parsing to complete before proceeding.
3. **Log data (for debugging):**
   - The `console.log(data)` statement logs the entire weather data object to the browser console. This can be helpful for debugging purposes.
4. **Update UI elements:**
   - The function extracts specific weather information from the `data` object:
     - City name (`data.name`)
     - Temperature (`data.main.temp`)
     - Humidity (`data.main.humidity`)
     - Wind speed (`data.wind.speed`)
   - It uses `document.querySelector()` to select the HTML elements with classes
