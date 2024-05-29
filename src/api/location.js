export { findWeather };
import { getForecast } from "./result";

async function findWeather(location) {
  let parsedLocation = location.replaceAll(" ", "_");
  const headURL =
    "http://api.weatherapi.com/v1/forecast.json?key=80aa09905c86464caa524725242105&q=";
  let tailURL = "&days=2&aqi=no&alerts=no";
  let url = headURL + parsedLocation + tailURL;
  let response = await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Some thing bad happen (maybe 400 bad request)");
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
  if (response != false) {
    let result = await getForecast(response);
    return result;
  } else {
    return false;
  }
}
