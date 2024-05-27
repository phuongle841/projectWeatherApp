import "./assets/style.css";
import { findWeatherWithCoords } from "./api/coordinates";
import { findWeather } from "./api/location";
// save time -> fetch the promise first then use that for the whole system ?

let findLocation = document.querySelector("#FindLocation");
let Form = document.querySelector("#Form");
console.log(Form);
findLocation.addEventListener("change", (event) => {
  event.preventDefault();
  console.log(findLocation.value);
  findWeather(findLocation.value).then((value) => {
    console.log(value);
  });
});

function LocationController() {
  let left, right;
  let coordinates = navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    return [position.coords.latitude, position.coords.longitude];
  });
  console.log(coordinates);
  console.log(left);

  return;
}
class informationController {
  constructor() {}
  getInformation() {
    LocationController();
    return;
  }
}
let controller = new informationController();
controller.getInformation();

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
