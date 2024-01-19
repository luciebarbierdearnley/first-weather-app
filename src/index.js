function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  let heading = document.querySelector("h1");

  heading.innerHTML = city.value;
}

let search = document.querySelector("#search-form");
search.addEventListener("submit", showCity);
