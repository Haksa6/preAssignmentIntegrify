import React from 'react'

const Searchbar = ({setSearch, fetchWeather, search}) => {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Pressed key');
      fetchWeather(search);
    }
  }

  return(
    <div>
      <input type="search" placeholder='Enter the name of the city' onKeyPress={handleKeyDown} onChange={e => setSearch(e.target.value)} />
      <button type="button" onClick={() => fetchWeather(search)}>Show Weather Info</button>
    </div>
  );
}

export default Searchbar;