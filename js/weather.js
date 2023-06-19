import { config } from "./apikey.js";

const WEATHER_API = config.apikey;

const weatherBox = document.querySelector("#weather-box");
const city = weatherBox.querySelector("#city");
const weather = weatherBox.querySelector("#weather");
const temp = weatherBox.querySelector("#temp");
const tempMin = weatherBox.querySelector("#tempMin");
const tempMax = weatherBox.querySelector("#tempMax");
const tempFeel = weatherBox.querySelector("#tempFeel");


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
      tempMin.innerText = data.main.temp_min;
      tempMax.innerText = data.main.temp_max;
      tempFeel.innerText = data.main.feels_like;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
