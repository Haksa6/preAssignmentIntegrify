import React from 'react'
import '../App.css';


const Weather = ({weather, city}) => {
  console.log(weather)
  return(
    <>
      <div className="weatherContainer">
        <h2 className="weatherCity">
        {city}
        </h2>
        <div className="weatherTemp">
        {weather.DailyForecasts[0].Temperature.Minimum.Value}°F - {weather.DailyForecasts[0].Temperature.Maximum.Value}°F
        </div>
        <div className="weatherPhrase">
        {weather.DailyForecasts[0].Day.IconPhrase}
        </div>
      </div>
    </>
  );
}

export default Weather;