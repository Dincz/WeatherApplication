const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8d3fb7a22fmshc4d7543a6bc7c4fp1f072ejsnebe135f327aa",
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


//downward
const CommonCities = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      tempD1.innerHTML = response.temp;
      feels_likeD1.innerHTML = response.feels_like;
      humidityD1.innerHTML = response.humidity;
      min_tempD1.innerHTML = response.min_temp;

      max_tempD1.innerHTML = response.max_temp;
      wind_speedD1.innerHTML = response.wind_speed;
      wind_degreesD1.innerHTML = response.wind_degrees;
      sunriseD1.innerHTML = response.sunrise;
      sunsetD1.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};



Common = () => {
const cities=["Agra","Pune","Kolkata","Bangalore","Lucknow","Surat"];
for(city in cities){
 CommonCities(cities)
} 
}
Common();

// cities.forEach(city);

// const task_edit_el = document.createElement("button");
// task_edit_el.classList.add("edit");
// task_edit_el.innerHTML ="Edit";
//