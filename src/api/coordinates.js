export { findWeatherWithCoords };
import { getForecast } from "./result";

async function findWeatherWithCoords(latitude, longitude) {
  try {
    let parsedLocation = latitude + "," + longitude;
    const headURL =
      "http://api.weatherapi.com/v1/forecast.json?key=80aa09905c86464caa524725242105&q=";
    let tailURL = "&days=2&aqi=no&alerts=no";
    let url = headURL + parsedLocation + tailURL;
    let response = (await fetch(url)).json();
    let result = await getForecast(response);
    return result;
  } catch (error) {
    console.error("Problem occur in " + error);
  }
}
