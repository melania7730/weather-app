function searchResult(event) {
  event.preventDefault();
  let weatherCity = document.querySelector("#weather-city");
  let formCity = document.querySelector("#form-city");
  weatherCity.innerHTML = formCity.value;
}
let searchForm = document.querySelector("#form-search");
searchForm.addEventListener("submit", searchResult);
