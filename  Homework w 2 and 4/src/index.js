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

let cityApiKey = "b35c686ba9565ba0ab254c2230937552";
let unit = "&units=metric";
let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${cityApiKey}${unit}`;
