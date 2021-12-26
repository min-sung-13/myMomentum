const API_KEY = "59f84e6b1e12240c25fbbfdfd9dce57b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        cityContainer.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);