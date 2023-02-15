// Fetch weather data from OpenWeatherMap API
async function getWeatherData(city) {
    const apiKey = "d6a34fbe71595dd6fae8003c59c4db6c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Render current weather information
  function renderCurrentWeather(data) {
    const cityName = data.name;
    const date = new Date();
    const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    
    document.querySelector("#city-name").textContent = cityName;
    document.querySelector("#date").textContent = date.toLocaleDateString();
    document.querySelector("#weather-icon").innerHTML = `<img src="${weatherIcon}" alt="Weather icon">`;
    document.querySelector("#temperature").textContent = `Temperature: ${temperature} °C`;
    document.querySelector("#humidity").textContent = `Humidity: ${humidity}%`;
    document.querySelector("#wind-speed").textContent = `Wind Speed: ${windSpeed} m/s`;
  }
  
  // Submit form to search for a city
  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const city = document.querySelector("#city").value;
    const data = await getWeatherData(city);
    
    renderCurrentWeather(data);
  });
  