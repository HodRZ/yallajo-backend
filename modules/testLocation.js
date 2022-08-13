"use strict";
const axios = require("axios");

async function handleApi(req, res) {
  const searchQuery = req.query.searchQuery;
  let latitude;
  let longitude;
  const dataCollection = {};

  // console.log(searchQuery);
  // res.send(searchQuery);
  try {
    const cityLocation = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${searchQuery}&format=json`
    );
    latitude = cityLocation.data[0].lat;
    longitude = cityLocation.data[0].lon;
    // dataCollection[cityLocation] = cityLocation;/
    dataCollection.lat = cityLocation.data[0].lat;
    dataCollection.lon = cityLocation.data[0].lon;
    // console.log(cityLocation.data[0]);
    const mapSrc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${latitude},${longitude}&zoom=13`;
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
    // dataCollection.push(weatherData);
  } catch (error) {
    // errorHandler(error, res);
  }
  // console.log(dataCollection[1]);

  try {
    const unsplash = await axios.get(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.ACCESS_KEY_UNSPLASH}&query=${searchQuery}`
    );
    const imgArr = unsplash.data.results[0].urls.regular;
    dataCollection.cityImg = imgArr;
  } catch (error) {
    // errorHandler(error, res);
  }
  //   console.log(searchQuery);
  //   res.send(searchQuery);
  res.send(dataCollection);
}

// class Images {
//   constructor(img) {
//     this.img_url = img.urls.regular;
//   }
// }
class Forecast {
  constructor(day) {
    this.date = day.datetime;
    this.description = day.weather.description;
  }
}

module.exports = { handleApi };

// const mapSrc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${lat},${lon}&zoom=18`;
// const display_name = cityLocation.data[0].display_name;
// const latitude = cityLocation.data[0].lat;
// const longitude = cityLocation.data[0].lon;
// const map_Src = mapSrc;
// console.log(display_name, latitude);
