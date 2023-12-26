function updatedWeather(response) {
  let temperatureNumber = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let weatherCity = document.querySelector("#weather-city");
  let weatherDescription = document.querySelector("#description");
  let weatherHumidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#icon");
  weatherCity.innerHTML = response.data.city;
  time.innerHTML = formatDate(date);
  weatherDescription.innerHTML = response.data.condition.description;
  weatherHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed} km/h`;
  temperatureNumber.innerHTML = Math.round(temperature);
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon"}/>`;
}
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "b5dca18t5009430fdddbc6b9afdb4d2o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updatedWeather);
}

function searchResult(event) {
  event.preventDefault();
  let formCity = document.querySelector("#form-city");
  searchCity(formCity.value);
}

function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weather-forecast-day">
       <div class="weather-forecast-date">${day}</div>
          <div class="weather-forecast-icon">🌤️</div>
          <div class="weather-forecast-temp">
            <span class="weather-forecast-temp-max">
            <strong>18°</strong>
            </span>
            <span class="weather-forecast-temp-min">12°</span>
          </div> 
      </div>`;
  });

  let forecasElement = document.querySelector("#weather-forecast");
  forecasElement.innerHTML = forecastHtml;
}

let searchForm = document.querySelector("#form-search");
searchForm.addEventListener("submit", searchResult);

searchCity("Tabanan");
displayForecast();
