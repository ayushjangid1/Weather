const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cadedfa593mshee215dde3402c75p14badfjsn17d075dae356",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Jaipur");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=France",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    temp_france.innerHTML = response.temp;
    feels_like_france.innerHTML = response.feels_like;
    humidity_france.innerHTML = response.humidity;
    // min_temp.innerHTML = response.min_temp;
    // max_temp.innerHTML = response.max_temp;
    wind_speed_france.innerHTML = response.wind_speed;
    // wind_degrees.innerHTML = response.wind_degrees;
    sunrise_france.innerHTML = response.sunrise;
    sunset_france.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Beijing",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    temp_beijing.innerHTML = response.temp;
    feels_like_beijing.innerHTML = response.feels_like;
    humidity_beijing.innerHTML = response.humidity;
    // min_temp.innerHTML = response.min_temp;
    // max_temp.innerHTML = response.max_temp;
    wind_speed_beijing.innerHTML = response.wind_speed;
    // wind_degrees.innerHTML = response.wind_degrees;
    sunrise_beijing.innerHTML = response.sunrise;
    sunset_beijing.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    temp_mumbai.innerHTML = response.temp;
    feels_like_mumbai.innerHTML = response.feels_like;
    humidity_mumbai.innerHTML = response.humidity;
    // min_temp.innerHTML = response.min_temp;
    // max_temp.innerHTML = response.max_temp;
    wind_speed_mumbai.innerHTML = response.wind_speed;
    // wind_degrees.innerHTML = response.wind_degrees;
    sunrise_mumbai.innerHTML = response.sunrise;
    sunset_mumbai.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    temp_chennai.innerHTML = response.temp;
    feels_like_chennai.innerHTML = response.feels_like;
    humidity_chennai.innerHTML = response.humidity;
    // min_temp.innerHTML = response.min_temp;
    // max_temp.innerHTML = response.max_temp;
    wind_speed_chennai.innerHTML = response.wind_speed;
    // wind_degrees.innerHTML = response.wind_degrees;
    sunrise_chennai.innerHTML = response.sunrise;
    sunset_chennai.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seoul",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    temp_seoul.innerHTML = response.temp;
    feels_like_seoul.innerHTML = response.feels_like;
    humidity_seoul.innerHTML = response.humidity;
    // min_temp.innerHTML = response.min_temp;
    // max_temp.innerHTML = response.max_temp;
    wind_speed_seoul.innerHTML = response.wind_speed;
    // wind_degrees.innerHTML = response.wind_degrees;
    sunrise_seoul.innerHTML = response.sunrise;
    sunset_seoul.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Los Angeles",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
  
      temp_losangeles.innerHTML = response.temp;
      feels_like_losangeles.innerHTML = response.feels_like;
      humidity_losangeles.innerHTML = response.humidity;
      // min_temp.innerHTML = response.min_temp;
      // max_temp.innerHTML = response.max_temp;
      wind_speed_losangeles.innerHTML = response.wind_speed;
      // wind_degrees.innerHTML = response.wind_degrees;
      sunrise_losangeles.innerHTML = response.sunrise;
      sunset_losangeles.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));