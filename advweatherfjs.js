const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const loc_name = document.querySelector(".location-country");

const location_not_found = document.querySelector(".location-not-found");

const weather_body = document.querySelector(".weather-body");

async function checkWeather(city) {
  const api_key = "your open-weather here!!!!!";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  console.log(weather_data);

  if (weather_data.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    futureforecast_box.style.display = "none";
    loc_name.innerHTML = "-";
    console.log("error");
    return;
  }

  console.log("run");
  location_not_found.style.display = "none";

  futureforecast_box.style.display = "flex";
  weather_body.style.display = "flex";
  loc_name.innerHTML = `${weather_data.name}, ${weather_data.sys.country}`;
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity} %`;
  wind_speed.innerHTML = `${weather_data.wind.speed} M/S`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "/advasset/cloud.png";
      break;
    case "Clear":
      weather_img.src = "/advasset/clear.png";
      break;
    case "Rain":
      weather_img.src = "/advasset/rain.png";
      break;
    case "Mist":
      weather_img.src = "/advasset/mist.png";
      break;
    case "Smoke":
      weather_img.src = "/advasset/smoke.png";
      break;
    case "Snow":
      weather_img.src = "/advasset/snow.png";
      break;
    case "Haze":
      weather_img.src = "/advasset/haze.png";
      break;
  }
}

function futureforecastdetails(
  i,
  dateclass,
  timeclass,
  weatherclass,
  tempclass,
  humidityclass,
  windclass,
  imgclass,
  future_weather_data_api
) {
  let datetime = future_weather_data_api.list[i].dt_txt;
  const datestr = datetime.split(" ")[0];
  const timestr = datetime.split(" ")[1];
  dateclass.innerHTML = datestr;
  timeclass.innerHTML = timestr;

  let ftemp = future_weather_data_api.list[i].main.temp;
  ftemp = Math.round(ftemp - 273.15);
  tempclass.innerHTML = ftemp + "°C";

  let fhumidity = future_weather_data_api.list[i].main.humidity;
  humidityclass.innerHTML = fhumidity + " %";

  let fwind = future_weather_data_api.list[i].wind.speed;
  windclass.innerHTML = fwind + "M/S";

  let fweather = future_weather_data_api.list[i].weather[0].description;
  weatherclass.innerHTML = fweather;

  switch (future_weather_data_api.list[i].weather[0].main) {
    case "Clouds":
      imgclass.src = "/advasset/cloud.png";
      break;
    case "Clear":
      imgclass.src = "/advasset/clear.png";
      break;
    case "Rain":
      imgclass.src = "/advasset/rain.png";
      break;
    case "Mist":
      imgclass.src = "/advasset/mist.png";
      break;
    case "Smoke":
      imgclass.src = "/advasset/smoke.png";
      break;
    case "Snow":
      imgclass.src = "/advasset/snow.png";
      break;
    case "Haze":
      imgclass.src = "/advasset/haze.png";
      break;
  }
}

async function futureforecast(city) {
  const api_key = "your open-weather api here!!!!!!";
  const futureurl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
  const future_weather_data = await fetch(`${futureurl}`).then((response) =>
    response.json()
  );
  console.log(future_weather_data);

  const date2 = document.querySelector(".date2");
  const time2 = document.querySelector(".time2");
  const weather2 = document.querySelector(".weather2");
  const temp2 = document.querySelector(".temp2");
  const humidity2 = document.querySelector(".humidity2");
  const wind2 = document.querySelector(".wind2");
  const img2 = document.querySelector(".forecastimg2");

  futureforecastdetails(
    5,
    date2,
    time2,
    weather2,
    temp2,
    humidity2,
    wind2,
    img2,
    future_weather_data
  );

  const date3 = document.querySelector(".date3");
  const time3 = document.querySelector(".time3");
  const weather3 = document.querySelector(".weather3");
  const temp3 = document.querySelector(".temp3");
  const humidity3 = document.querySelector(".humidity3");
  const wind3 = document.querySelector(".wind3");
  const img3 = document.querySelector(".forecastimg3");
  futureforecastdetails(
    12,
    date3,
    time3,
    weather3,
    temp3,
    humidity3,
    wind3,
    img3,
    future_weather_data
  );

  const date4 = document.querySelector(".date4");
  const time4 = document.querySelector(".time4");
  const weather4 = document.querySelector(".weather4");
  const temp4 = document.querySelector(".temp4");
  const humidity4 = document.querySelector(".humidity4");
  const wind4 = document.querySelector(".wind4");
  const img4 = document.querySelector(".forecastimg4");

  futureforecastdetails(
    19,
    date4,
    time4,
    weather4,
    temp4,
    humidity4,
    wind4,
    img4,
    future_weather_data
  );

  const date5 = document.querySelector(".date5");
  const time5 = document.querySelector(".time5");
  const weather5 = document.querySelector(".weather5");
  const temp5 = document.querySelector(".temp5");
  const humidity5 = document.querySelector(".humidity5");
  const wind5 = document.querySelector(".wind5");
  const img5 = document.querySelector(".forecastimg5");

  futureforecastdetails(
    26,
    date5,
    time5,
    weather5,
    temp5,
    humidity5,
    wind5,
    img5,
    future_weather_data
  );

  const date6 = document.querySelector(".date6");
  const time6 = document.querySelector(".time6");
  const weather6 = document.querySelector(".weather6");
  const temp6 = document.querySelector(".temp6");
  const humidity6 = document.querySelector(".humidity6");
  const wind6 = document.querySelector(".wind6");
  const img6 = document.querySelector(".forecastimg6");

  futureforecastdetails(
    33,
    date6,
    time6,
    weather6,
    temp6,
    humidity6,
    wind6,
    img6,
    future_weather_data
  );

  const date7 = document.querySelector(".date7");
  const time7 = document.querySelector(".time7");
  const weather7 = document.querySelector(".weather7");
  const temp7 = document.querySelector(".temp7");
  const humidity7 = document.querySelector(".humidity7");
  const wind7 = document.querySelector(".wind7");
  const img7 = document.querySelector(".forecastimg7");

  futureforecastdetails(
    39,
    date7,
    time7,
    weather7,
    temp7,
    humidity7,
    wind7,
    img7,
    future_weather_data
  );
}

const futureforecast_box = document.querySelector(".futureforecast");
searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
  futureforecast(inputBox.value);
});
