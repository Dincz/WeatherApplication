const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d3fb7a22fmshc4d7543a6bc7c4fp1f072ejsnebe135f327aa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = async (city) => {
  try {
  cityName.innerHTML = city;
  const response = await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  );
  const data = await response.json();
  console.log(data);
  temp.innerHTML = data.temp;
  temp2.innerHTML = data.temp;
  feels_like.innerHTML = data.feels_like;
  humidity.innerHTML = data.humidity;
  humidity2.innerHTML = data.humidity;
  min_temp.innerHTML = data.min_temp;
  max_temp.innerHTML = data.max_temp;
  wind_speed.innerHTML = data.wind_speed;
  wind_speed2.innerHTML = data.wind_speed;
  wind_degrees.innerHTML = data.wind_degrees;
  sunrise.innerHTML = data.sunrise;
  sunset.innerHTML = data.sunset;
 }
 catch (err) {
  console.error(err);
}
  };

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Mumbai");

const CommonCities = async (city) => {
  try{
  const response = await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  );
  const data = await response.json();
  console.log(data);
      const tbody = document.querySelector("tbody");
      const tr = document.createElement("tr");
      const properties = ["cityName","temp", "feels_like", "humidity", "min_temp", "max_temp", "wind_speed", "wind_degrees", "sunrise", "sunset"];
      properties.forEach(property => {
        const td = document.createElement("td");
        td.innerHTML = data[property] === undefined ? city : data[property];
        tr.append(td);
      });
      tbody.append(tr);
    }
    catch (err) {
      console.error(err);
  }
};

  const Common = () => {
    const cities = ["Agra", "Bangalore", "Chennai", "Delhi", "Mumbai"];
    cities.forEach(city => {
      CommonCities(city);
    });
  };
  Common();

  ///aync,fetch*1,properties.
  //try to add in common cities