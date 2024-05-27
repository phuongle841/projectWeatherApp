export { findWeather };
import { getForecast } from "./result";

async function findWeather(location) {
  // this try catch do nothing?
  try {
    let parsedLocation = location.replaceAll(" ", "_");
    const headURL =
      "http://api.weatherapi.com/v1/forecast.json?key=80aa09905c86464caa524725242105&q=";
    let tailURL = "&days=2&aqi=no&alerts=no";
    let url = headURL + parsedLocation + tailURL;
    let response = await fetch(url);
    let result = getForecast(response);
    return result;
  } catch (error) {
    error;
    throw new Error("maybe trying to do with this error");
  }
}
