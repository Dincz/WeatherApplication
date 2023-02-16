const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d3fb7a22fmshc4d7543a6bc7c4fp1f072ejsnebe135f327aa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

//FETCHES WEATHER DATA

const fetcher = async (city) =>{
  const response =  await fetch(
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

  //OUTPUTS DATA OF COMMONCITIES

// const CommonCities = async (data, city) => {
//       console.log(data);
//       const tbody = document.querySelector("tbody");
//       const tr = document.createElement("tr");
//       const properties = ["cityName","temp", "feels_like", "humidity", "min_temp", "max_temp", "wind_speed", "wind_degrees", "sunrise", "sunset"];
//       properties.forEach(property => {
//         const td = document.createElement("td");
//         td.innerHTML = data[property] === undefined ? city : data[property];
//         tr.append(td);
//       });
//       tbody.append(tr);
//     };
//LIST OF COMMON CITIES

    // const Common = async () => { 
    //   const cities = ["Agra", "Bangalore", "Chennai", "Delhi", "Mumbai"];
    //   for (const city of cities) {
    //     const data = await fetcher(city); 
    //     CommonCities(data, city); 
    //   }
    // };
    
    // Common(); // Call the Common function
    

  ///aync===fetch*1,properties.
  //try to add in common cities
  // catch (err) {
  //   console.error(`The Error was thrown : ${err}`);

    //new addition
    // const object = data;
    // console.log(Object.keys(object));
    //old

    // const test = async (data, city) => {
    //   console.log(data);
    //   const keys = [];
    //   for (const key in data){
    //     keys.push(key);
    //   }
    //   console.log(keys);
    //   const tbody = document.querySelector("tbody");
    //   const tr = document.createElement("tr");
    //   keys.forEach(key=> {
    //     const td = document.createElement("td");
    //     td.innerHTML = data[keys] === undefined ? city : data[keys];
    //     tr.append(td);
    //   });
    //   tbody.append(tr);
    // };

    // const testing = async () => { 
    //   const cities = ["Agra"];
    //   for (const city of cities) {
    //     const data = await fetcher(city); 
    //     test(data, city); 
    //   }
    // };
    // testing();
    const test = (data, city, tbody) => {
  console.log(data);
  const keys = Object.keys(data);
  console.log(keys);
  const tr = document.createElement("tr");
  const citytd = document.createElement("td");
  citytd.innerHTML = city;
  tr.append(citytd);
  keys.forEach(key => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = data[key];
    tr.append(td);
  });
  tbody.append(tr);
};

const testing = async () => {
  const cities = ["goa","Agra", "Bangalore", "Chennai", "Delhi", "Mumbai"];
  const tbody = document.querySelector("tbody");
  for (const city of cities) {
    const data = await fetcher(city);
    test(data, city, tbody);
  }
};
testing();
