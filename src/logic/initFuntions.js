import { findWeatherWithCoords } from "../api/coordinates";
import { findWeather } from "../api/location";

export { conduct };

let conduct = function () {
  let findLocation = document.querySelector("#FindLocation");
  let locationDisplay = document.querySelector("#Location");
  let TemperatureSwitch = document.querySelector("#TemperatureSwitch");
  let DistanceSwitch = document.querySelector("#DistanceSwitch");
  let SubmitBtn = document.querySelector("#SubmitBtn");
  let TomorrowSTomorrow = document.querySelector("#TomorrowSTomorrow");

  let scopeLocation;
  let forecastDayOne = true;
  let unit = "F";
  let distanceUnit = "K";
  const weatherConditions = [
    { condition: "Sunny", color: "#FFD700" },
    { condition: "Rain", color: "#4682B4" },
    { condition: "Thunderstorm", color: "#808080" },
    { condition: "Snow", color: "#FFFFFF" },
    { condition: "Cloudy", color: "#A9A9A9" },
    { condition: "Clear", color: "#87CEEB" },
    { condition: "Fog", color: "#696969" },
    { condition: "Overcast", color: "#708090" },
    { condition: "Hail", color: "#DCDCDC" },
  ];

  // Search function
  SubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (findLocation.value == "") {
      return;
    }
    scopeLocation = findLocation.value;
    DisplayCUrrentLocation();
  });

  // switch day
  TomorrowSTomorrow.addEventListener("click", () => {
    forecastDayOne == true ? (forecastDayOne = false) : (forecastDayOne = true);
    DisplayCUrrentLocation();
  });

  // switch distance unit
  DistanceSwitch.addEventListener("click", () => {
    distanceUnit == "K" ? (distanceUnit = "M") : (distanceUnit = "K");
    DistanceSwitch.textContent = "Current Speed Unit " + distanceUnit;
    DisplayCUrrentLocation();
  });

  // switch temperature unit
  TemperatureSwitch.addEventListener("click", () => {
    unit == "F" ? (unit = "C") : (unit = "F");
    TemperatureSwitch.textContent = "Current Unit " + unit;
    DisplayCUrrentLocation();
  });

  // Display user location
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
      let dayTwoData = data.dayTwo;
      inputCurrent(CurrentData);
      if (forecastDayOne) {
        inputDayOne(dayOneData);
      } else {
        inputDayOne(dayTwoData);
      }
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
    changeBackground(CurrentData.weather);
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

  function changeBackground(input) {
    let body = document.querySelector("body");
    input = input.split(" ");
    input.forEach((weather) => {
      deCapitalizeFirstLetter(weather);
      weatherConditions.forEach((element) => {
        let condition = deCapitalizeFirstLetter(element.condition);
        if (weather == condition) {
          console.log(condition);
          body.style.backgroundColor = element.color;
        }
      });
    });
  }

  function inputDayOne(dayOneData) {
    let dayOne = document.querySelector("#Day");
    dayOne.innerHTML = "";
    for (const key in dayOneData) {
      if (Object.hasOwnProperty.call(dayOneData, key)) {
        const element = dayOneData[key];
        if (unit == "C") {
          Day(dayOne, key, element[0], element[2]);
        } else {
          Day(dayOne, key, element[1], element[2]);
        }
      }
    }
  }
  let Day = function (DayDiv, Time, Weather, iconSrc) {
    let dayContainer = document.createElement("div");
    dayContainer.classList.add("inDay");
    let timeDiv = document.createElement("h3");
    timeDiv.classList.add("Time");
    timeDiv.textContent = Time;
    let weatherDiv = document.createElement("h3");
    weatherDiv.classList.add("Weather");
    weatherDiv.textContent = Weather;
    let icon = document.createElement("img");
    icon.src = iconSrc;
    dayContainer.appendChild(timeDiv);
    dayContainer.appendChild(weatherDiv);
    dayContainer.appendChild(icon);
    DayDiv.appendChild(dayContainer);
    return dayContainer;
  };

  function deCapitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  DataToView(getDefaultLocation());
};
