import './App.css';
import Searchbar from './components/Searchbar'
import Weather from './components/Weather';
import Notification from './components/Notification';
import React, { useState } from 'react'
import axios from 'axios';

const App = () => {
  
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchWeather = async (city) => {
    try{
      //get key
      const key = 'DxEc0mT0p9eEq3nAw13FUTOAXG5IAJGh';
      const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`);
      setCity(response.data[0].LocalizedName)
      console.log(response.data);
      console.log(response.data[0].LocalizedName)
      console.log(response.data[0].Key);

      //get weather
      const locationKey = response.data[0].Key;
      const response2 = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${key}`);
      console.log(response2.data)
      console.log(response2.data.DailyForecasts[0].Temperature.Minimum.Value)
      setWeather(response2.data);
    }
    catch (error){
      console.log(error);
      setWeather(null);
      setErrorMessage(`${error.message}! Something went wrong check correct spelling`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
  }

  return (
    <div className='main'>
      <Searchbar setSearch={setSearch} fetchWeather={fetchWeather} search={search}/>
      <Notification errorMessage={errorMessage} />
      {weather === null ? <></> : <Weather weather={weather} city={city}/>}
    </div>
  );
}

export default App;
