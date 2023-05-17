let now = new Date();

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let dayTime = document.querySelector("#day-time");
dayTime.innerHTML = `${day} ${hours}:${minutes} hr`;

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-name");
  let currentCity = document.querySelector("#city-input");
  city.innerHTML = `${currentCity.value}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

function changeTemp(params) {
  let newTemp = document.querySelector("#now-temp");
  newTemp.innerHTML = "59";
}

let farenheight = document.querySelector("#far");
farenheight.addEventListener("click", changeTemp);

function celsTemp(params) {
  let newTemp = document.querySelector("#now-temp");
  newTemp.innerHTML = "15";
}
let celsius = document.querySelector("#cel");
celsius.addEventListener("click", celsTemp);
