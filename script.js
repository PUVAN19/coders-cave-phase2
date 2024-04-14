function getWeather() {
  const location = document.getElementById('locationInput').value;
  const apiKey = 'baf6720a6a66febc004ea85e22e4b67a';
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
      document.getElementById('weatherInfo').innerText = 'Error fetching weather data';
    });
}

function displayWeather(weatherData) {
  const weatherInfo = document.getElementById('weatherInfo');
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  weatherInfo.innerHTML = `
    <h1>${weatherData.name}, ${weatherData.sys.country}</h1>
    <img src="${iconUrl}" alt="Weather Icon" ></img>
    <h2><p>Temperature: ${weatherData.main.temp}°C</p>
    <p>Weather: ${weatherData.weather[0].main}</p>
    <p>Description: ${weatherData.weather[0].description}</p></h2>
  `;
}


  