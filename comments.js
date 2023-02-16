const populateCityWeatherTable = async() => {
  const table = document.createElement('table');
  const cities= ['Agra', 'Bangalore','chennai','delhi','mumbai'];
  for await (const city of cities){
      const response =  await fetch(
        'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,
        options
      )
      const data = await response.json();
      const dataKeys = Object.keys(data);

      const tr = document.createElement('tr');

      const cityData = document.createElement('td');
      const cityName = document.createTextNode(city);
      cityData.appendChild(cityName);
      tr.appendChild(cityData);

      for (key of dataKeys) {
        const htmlAttribute = document.createElement('td');
        const attributeText = document.createTextNode(data[key]);

        htmlAttribute.appendChild(attributeText);
        tr.appendChild(htmlAttribute);
      }

      table.appendChild(tr);
  }
  document.body.appendChild(table);
}

// populateCityWeatherTable()

// const CommonCities = (city) => {
//   fetch(
//     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       const tbody = document.querySelector('tbody');
//       const tr = document.createElement('tr');
//       const temp = document.createElement("td");
//       const feelsLike = document.createElement("td");
//       const humidity = document.createElement("td");
//       const minTemp = document.createElement("td");
//       const maxTemp = document.createElement("td");
//       const windSpeed = document.createElement("td");
//       const windDegrees = document.createElement("td");
//       const sunrise = document.createElement("td");
//       const sunset = document.createElement("td");
//       tbody.append(tr);
//       temp.innerHTML = response.temp;
//       feelsLike.innerHTML = response.feels_like;
//       humidity.innerHTML = response.humidity;
//       minTemp.innerHTML = response.min_temp;
//       maxTemp.innerHTML = response.max_temp;
//       windSpeed.innerHTML = response.wind_speed;
//       windDegrees.innerHTML = response.wind_degrees;
//       sunrise.innerHTML = response.sunrise;
//       sunset.innerHTML = response.sunset;
//     })
//     .catch((err) => console.error(err));
// };


submit.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await fetcher(city.value);
  console.log(data);
  cityName.innerHTML = city.value;
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
});