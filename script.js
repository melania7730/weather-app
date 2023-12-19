function updatedWeather(response) {
  let temperatureNumber = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let weatherCity = document.querySelector("#weather-city");
  weatherCity.innerHTML = response.data.city;
  temperatureNumber.innerHTML = Math.round(temperature);
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
