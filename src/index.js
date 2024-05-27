import "./assets/style.css";
import { findWeatherWithCoords } from "./api/coordinates";
import { findWeather } from "./api/location";
// save time -> fetch the promise first then use that for the whole system ?
let weatherPromise;
window.addEventListener("load", (event) => {
  event;
  navigator.geolocation.getCurrentPosition((position) => {
    weatherPromise = findWeatherWithCoords(
      position.coords.latitude,
      position.coords.longitude
    );
    weatherPromise.then((value) => {
      console.log(value);
    });
  });
});

let findLocation = document.querySelector("#FindLocation");
let Form = document.querySelector("#Form");
console.log(Form);
findLocation.addEventListener("change", (event) => {
  event.preventDefault();
  console.log(findLocation.value);
  weatherPromise = findWeather(findLocation.value);
  weatherPromise.then((value) => {
    console.log(value);
  });
});

//  setTimeout(() => {
//   let first = findWeather("New York");
//   let second = findWeather("Paris");
//   let third = findWeather("Dubai");
//   let fourth = findWeather("Seoul");
//   let fifth = findWeather("india");

//   first.then((value) => {
//     let weather = value.current.condition.text;
//     console.log(weather);
//   });
//   second.then((value) => {
//     let weather = value.current.condition.text;
//     console.log(weather);
//   });
//   third.then((value) => {
//     let weather = value.current.condition.text;
//     console.log(weather);
//   });
//   fourth.then((value) => {
//     let weather = value.current.condition.text;
//     console.log(weather);
//   });
//   fifth.then((value) => {
//     let weather = value.current.condition.text;
//     console.log(weather);
//   });
// }, 2000);
