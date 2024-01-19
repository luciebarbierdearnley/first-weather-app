function displayTemp(response) {
  let temperatureElement = document.querySelector("#local-temp");
  let temperature = response.data.temperature.current;
  let heading = document.querySelector("h1");
  heading.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
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
