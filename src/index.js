import "./assets/style.css";
import { findWeatherWithCoords } from "./api/coordinates";
import { findWeather } from "./api/location";

let findLocation = document.querySelector("#FindLocation");
let TemperatureSwitch = document.querySelector("#TemperatureSwitch");
let DistanceSwitch = document.querySelector("#DistanceSwitch");
let scopeLocation;
let unit = "F";
let distanceUnit = "K";

let testEnter = document.querySelector("#test");
testEnter.addEventListener("keydown", (event) => {
  console.log(event);
});

findLocation.addEventListener("keydown", (event) => {
  event.preventDefault();
  console.log(event.key);
});

DistanceSwitch.addEventListener("click", () => {
  if (distanceUnit == "K") {
    distanceUnit = "M";
  } else {
    distanceUnit = "K";
  }
  DistanceSwitch.textContent = "Current Speed Unit " + unit;
  DisplayCUrrentLocation();
});

TemperatureSwitch.addEventListener("click", () => {
  if (unit == "F") {
    unit = "C";
  } else {
    unit = "F";
  }
  TemperatureSwitch.textContent = "Current Unit " + unit;
  DisplayCUrrentLocation();
});

function DisplayCUrrentLocation() {
  try {
    clearOutPreviousContent();
    let location = getLocationWithSearch(scopeLocation);
    scopeLocation = findLocation.value;
    location.then((value) => {
      if (value == false) {
        console.log("this value is a bad request");
      }
    });
    DataToView(location);
  } catch (error) {
    console.log(error);
  }
}

findLocation.addEventListener("change", async (event) => {
  if (findLocation.value == "") {
    return;
  }
  event.preventDefault();
  clearOutPreviousContent();
  let location = getLocationWithSearch(findLocation.value);
  scopeLocation = findLocation.value;
  location.then((value) => {
    if (value == false) {
      console.log("this value is a bad request");
    }
  });
  DataToView(location);
});

let getDefaultLocation = function () {
  let result = new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let weather = await findWeatherWithCoords(latitude, longitude);
      resolve(weather);
    });
  });
  return result;
};

async function getLocationWithSearch(location) {
  let result = new Promise((resolve) => {
    async function fetchData() {
      let weather = await findWeather(location);
      if (weather == false) {
        console.log("bad request");
      }
      resolve(weather);
    }
    fetchData();
  });
  return result;
}
async function DataToView(location) {
  try {
    let data = await location
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
  } catch (error) {
    // call the display function
    notifyBadRequest();
    console.log(error);
  }
}
function clearOutPreviousContent() {
  document.querySelector("#Form>h3").classList.remove("display");
}
function notifyBadRequest() {
  let notifyBanner = document.querySelector("#Form>h3");
  console.log(notifyBanner);
  notifyBanner.classList.add("display");
}

function inputCurrent(CurrentData) {
  let Current = document.querySelector("#Current");
  let Location = Current.querySelector("#Location");
  Location.textContent = CurrentData.location;
  scopeLocation = CurrentData.location;
  let Time = Current.querySelector("#Time");
  Time.textContent = CurrentData.localTime;
  let Temp = Current.querySelector("#Temp");

  if (unit == "F") {
    Temp.textContent = CurrentData.tempF;
  } else if (unit == "C") {
    Temp.textContent = CurrentData.tempC;
  }

  let Weather = Current.querySelector("#Weather");
  Weather.textContent = CurrentData.weather;
  let Wind = Current.querySelector("#Wind");

  if (distanceUnit == "K") {
    Wind.textContent = CurrentData.windK;
  } else if (distanceUnit == "M") {
    Wind.textContent = CurrentData.windM;
  }

  let Humidity = Current.querySelector("#Humidity");
  Humidity.textContent = CurrentData.humidity;
  let Cloud = Current.querySelector("#Cloud");
  Cloud.textContent = CurrentData.cloud;
}
function inputDayOne(dayOneData) {
  let dayOne = document.querySelector("#Day");
  dayOne.innerHTML = "";
  for (const key in dayOneData) {
    if (Object.hasOwnProperty.call(dayOneData, key)) {
      const element = dayOneData[key];
      if (unit == "C") {
        Day(dayOne, key, element[0]);
      } else {
        Day(dayOne, key, element[1]);
      }
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
DataToView(getDefaultLocation());
