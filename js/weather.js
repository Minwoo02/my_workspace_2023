function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  let weatherIcon = {
    "01": "fas fa-sun",
    "02": "fas fa-cloud-sun",
    "03": "fas fa-cloud",
    "04": "fas fa-cloud-meatball",
    "09": "fas fa-cloud-sun-rain",
    10: "fas fa-cloud-showers-heavy",
    11: "fas fa-poo-storm",
    13: "far fa-snowflake",
    50: "fas fa-smog",
  };
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(1)");
      const city = document.querySelector("#weather span:last-child");
      const weatherAPI = data.weather[0].main;
      if (weatherAPI === "Clouds") {
        icon.classList.add("fas", "fa-cloud-sun");
      } else if (weatherAPI === "Clear") {
        icon.classList.add("fas", "fa-sun");
      } else if (weatherAPI === "Thunderstorm") {
        icon.classList.add("fas", "fa-bolt");
      } else if (weatherAPI === "Drizzle") {
        icon.classList.add("fas", "fa-water");
      } else if (weatherAPI === "Rain") {
        icon.classList.add("fas", "fa-umbrella");
      } else if (weatherAPI === "Snow") {
        icon.classList.add("fas", "fa-snowflake");
      } else if (weatherAPI === "Atmosphere") {
        icon.classList.add("fas", "fa-smog");
      } else {
        icon.classList.add("fas", "fa-cloud");
      }
      city.innerText = `/ ${data.name}`;
      weather.innerText = ` ${weatherAPI}▪${data.main.temp} ℃`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
