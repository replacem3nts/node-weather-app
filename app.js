const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const userInput = process.argv[2];

if (!userInput) {
  return console.log('You must provide a location!');
}

geocode(userInput, (error, { latitude, longitude, location } = {}) => {
  if (error) {
    return console.log('Error', error);
  }

  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log('Error', error);
    }
    console.log(location);
    console.log(forecastData);
  });
});
