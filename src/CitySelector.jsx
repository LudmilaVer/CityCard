import React from 'react';

const CitySelector = ({ cities, onCitySelect }) => {
  return (
    <div id="city-select-container">
      <label htmlFor="city-select">Выберите город:</label>
      <select id="city-select" onChange={(e) => onCitySelect(e.target.value)}>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;