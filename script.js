const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d3fb7a22fmshc4d7543a6bc7c4fp1f072ejsnebe135f327aa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
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
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
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
getWeather("Mumbai");








const CommonCities = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
  .then((response) => response.json())
    .then(response => {
      console.log(response);
      const tbody = document.querySelector("tbody");
      const tr = document.createElement("tr");
      const properties = ["cityName","temp", "feels_like", "humidity", "min_temp", "max_temp", "wind_speed", "wind_degrees", "sunrise", "sunset"];
      properties.forEach(property => {
        const td = document.createElement("td");
        td.innerHTML = response[property] || city;
        tr.append(td);
      });
      tbody.append(tr);
    })
    .catch(err => console.error(err));
};


  const Common = () => {
    const cities = ["Agra", "Bangalore", "Chennai", "Delhi", "Mumbai"];
    cities.forEach(city => {
      CommonCities(city);
    });
  };
  Common();