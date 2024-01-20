function displayTemp(response) {
  let temperatureElement = document.querySelector("#local-temp");
  let temperature = response.data.temperature.current;
  let heading = document.querySelector("h1");
  heading.innerHTML = response.data.city;
  let feelsLike = document.querySelector("#feels-like-temp");
  let feelsTemp = response.data.temperature.feels_like;

  let humidity = document.querySelector("#humidity");
  let showHumidity = response.data.temperature.humidity;

  let windSpeed = document.querySelector("#windSpeed");
  let showWindSpeed = response.data.wind.speed;

  let conditions = document.querySelector("#conditions");
  let showConditions = response.data.condition.description;

  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  temperatureElement.innerHTML = Math.round(temperature);
  feelsLike.innerHTML = Math.round(feelsTemp);
  humidity.innerHTML = showHumidity;
  windSpeed.innerHTML = showWindSpeed;
  conditions.innerHTML = showConditions;
  time.innerHTML = formatDate(date);
}

function formatDate(date) {
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "d2fcf0to3278b4e6ab12b4d9a002d5f2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");

  searchCity(city.value);
}

let search = document.querySelector("#search-form");
search.addEventListener("submit", showCity);

searchCity("Paris");
