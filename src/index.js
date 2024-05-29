import "./assets/style.css";
import { findWeatherWithCoords } from "./api/coordinates";
import { findWeather } from "./api/location";

let findLocation = document.querySelector("#FindLocation");

findLocation.addEventListener("change", async (event) => {
  event.preventDefault();
  let result = await findWeather(findLocation.value);
  console.log(result);
  if (result == false) {
    console.log("bad request my bro");
  }
});

let getLocation = function () {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let weather = await findWeatherWithCoords(latitude, longitude);
      resolve(weather);
    });
  });
};
async function DataToView(location) {
  let data = await getLocation()
    .then((value) => {
      return value;
    })
    .catch((error) => {
      console.error(error);
    });
  let CurrentData = data.current;
  let dayOneData = data.dayOne;
  inputCurrent(CurrentData);
  inputDayOne(dayOneData);
}
function inputCurrent(CurrentData) {
  let Current = document.querySelector("#Current");
  let Location = Current.querySelector("#Location");
  Location.textContent = CurrentData.location;
  let Time = Current.querySelector("#Time");
  Time.textContent = CurrentData.localTime;
  let Temp = Current.querySelector("#Temp");
  Temp.textContent = CurrentData.tempC;
  let Weather = Current.querySelector("#Weather");
  Weather.textContent = CurrentData.weather;
  let Wind = Current.querySelector("#Wind");
  Wind.textContent = CurrentData.windM;
  let Humidity = Current.querySelector("#Humidity");
  Humidity.textContent = CurrentData.humidity;
  let Cloud = Current.querySelector("#Cloud");
  Cloud.textContent = CurrentData.cloud;
}
function inputDayOne(dayOneData) {
  let dayOne = document.querySelector("#Day");
  for (const key in dayOneData) {
    if (Object.hasOwnProperty.call(dayOneData, key)) {
      const element = dayOneData[key];
      Day(dayOne, key, element);
    }
  }
}
let Day = function (DayDiv, Time, Weather) {
  let dayContainer = document.createElement("div");
  dayContainer.classList.add("inDay");
  let timeDiv = document.createElement("h3");
  timeDiv.classList.add("Time");
  timeDiv.textContent = Time;
  let weatherDiv = document.createElement("h3");
  weatherDiv.classList.add("Weather");
  weatherDiv.textContent = Weather;
  dayContainer.appendChild(timeDiv);
  dayContainer.appendChild(weatherDiv);
  DayDiv.appendChild(dayContainer);
  return dayContainer;
};
DataToView();
