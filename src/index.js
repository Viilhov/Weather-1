let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let dayTime = document.querySelector("#day-time");
dayTime.innerHTML = `${day} ${hours}:${minutes} hr`;

function showWeather(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#now-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#type").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#hum").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(city) {
  let apiKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
  let cityApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityApiUrl).then(showWeather);
}

function handleCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleCity);

function showLocalPosition(position) {
  let apiKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
  let lon = document.querySelector(position.coords.longitude);
  let lat = document.querySelector(position.coords.latitude);
  let localApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(localApiUrl).then(showWeather);
}

function showLocal(event) {
  navigator.geolocation.getCurrentPosition(showLocalPosition);
}

let localButton = document.querySelector("#local-weather");
localButton.addEventListener("click", showLocal);

search("Malaga");
