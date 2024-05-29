export { getForecast };
let getForecast = async function (response) {
  let result = {};
  let bar = await response
    .then((value) => {
      let current = {
        location: value.location.name,
        localTime: value.location.localtime.slice(11),
        tempC: value.current.temp_c + "'C",
        tempF: value.current.temp_f + "'F",
        weather: value.current.condition.text,
        windM: value.current.wind_mph + " m/h",
        windK: value.current.wind_kph + " k/h",
        humidity: value.current.humidity + " grams/m3",
        cloud: value.current.cloud + " oktas",
      };

      let forecastDayOne = {};
      value.forecast.forecastday[0].hour.forEach((element) => {
        let time = element.time.slice(11);
        let value = element.temp_c + "'C";
        forecastDayOne[time] = value;
      });

      let forecastDayTwo = {};
      value.forecast.forecastday[1].hour.forEach((element) => {
        let time = element.time.slice(11);
        let value = element.temp_c + "'C";
        forecastDayTwo[time] = value;
      });

      result["current"] = current;
      result["dayOne"] = forecastDayOne;
      result["dayTow"] = forecastDayTwo;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};
