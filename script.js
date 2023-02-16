const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8d3fb7a22fmshc4d7543a6bc7c4fp1f072ejsnebe135f327aa",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

//FETCHES WEATHER DATA

const fetcher = async (city) => {
  const response = await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  );
  const data = await response.json();
  return data;
};

//FETCH DATA ABOUT THE CITY DATA WHICH IS INPUTTED

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

//commoncities persentation with DOM

const cityDOM = (data, city, tbody) => {
  console.log(data);
  const keys = Object.keys(data);
  keys.shift();
  console.log(keys);
  const tr = document.createElement("tr");
  const citytd = document.createElement("td");
  citytd.innerHTML = city;
  tr.append(citytd);
  keys.forEach((key) => {
    const td = document.createElement("td");
    td.innerHTML = data[key];
    tr.append(td);
  });
  tbody.append(tr);
};

//inputing common cities

const CommonCities = async () => {
  const cities = ["Goa", "Agra", "Bangalore", "Chennai", "Delhi", "Mumbai"];
  const tbody = document.querySelector("tbody");
  for (const city of cities) {
    const data = await fetcher(city);
    cityDOM(data, city, tbody);
  }
};


CommonCities();
