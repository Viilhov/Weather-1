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

function search(event) {
  event.preventDefault();
  let apiKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
  let city = document.querySelector("#city-input").value;
  let unit = "&units=metric";
  let cityApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${unit}`;
  console.log(cityApiUrl);
  axios.get(cityApiUrl).then(showWeather);

  //let searchInput = document.querySelector("#city-input");
  //let h1 = document.querySelector("#city-name");
  //h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
