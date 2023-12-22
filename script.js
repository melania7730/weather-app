function updatedWeather(response) {
  let temperatureNumber = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let weatherCity = document.querySelector("#weather-city");
  let weatherDescription = document.querySelector("#description");
  let weatherHumidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let time = document.querySelector("time");
  let date = new Day(response.data.time * 1000);
  temperatureNumber.innerHTML = Math.round(temperature);
  weatherCity.innerHTML = response.data.city;
  time.innerHTML = formatDate(date);
  weatherDescription.innerHTML = response.data.condition.description;
  weatherHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed} km/h`;
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
  let day = days[date.getday()];
  return `${days}, ${hours}:${minutes}`;
  if (minutes < 10) {
    minutes`0${minutes}`;
  }
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
let searchForm = document.querySelector("#form-search");
searchForm.addEventListener("submit", searchResult);

searchCity("Denpasar");
