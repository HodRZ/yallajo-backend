"use strict";
const axios = require("axios");

async function handleGetApiData(req, res) {
  const searchQuery = req.query.searchQuery;
  let latitude;
  let longitude;
  const dataCollection = {};


  try {
    const cityLocation = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${searchQuery}&format=json`
    ).catch(function (error) { console.log(error) });
    latitude = cityLocation.data[0].lat;
    longitude = cityLocation.data[0].lon;

    dataCollection.lat = cityLocation.data[0].lat;
    dataCollection.lon = cityLocation.data[0].lon;
    console.log(cityLocation);
    const mapSrc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.LOCATION_KEY}&center=${latitude},${longitude}&zoom=13`;
    dataCollection.map = mapSrc;
  } catch (error) {
    // errorHandler(error, res);
  }

  try {
    const cityWeather = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${process.env.WEATHER_API_KEY}`
    );
    const weatherData = cityWeather.data.data.map((item) => new Forecast(item));
    dataCollection.weatherForecast = weatherData;

  } catch (error) {
    // errorHandler(error, res);
  }


  try {
    const unsplash = await axios.get(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.ACCESS_KEY_UNSPLASH}&query=${searchQuery}`
    );
    const imgArr = unsplash.data.results[0].urls.regular;
    dataCollection.cityImg = imgArr;
  } catch (error) {
    // errorHandler(error, res);
  }
  console.log("form handleGetApiData");
  res.send(dataCollection);
}


class Forecast {
  constructor(day) {
    this.date = day.datetime;
    this.description = day.weather.description;
  }
}
module.exports = { handleGetApiData };