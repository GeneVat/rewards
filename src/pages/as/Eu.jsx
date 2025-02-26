import React, { useState } from 'react';
import '../App.css'; // Import the CSS file
import { states, stateAbbreviations, stateAbbrArray } from './MapData-Eu.js'
import { labels } from '../LanguageData.js'
import LanguageDropdown from '../components/LanguageDropdown.jsx';  // Import the new component

const renderMap = (filteredStates, homeState, filterKey) => {
  return (
    <div className="map-grid-container">
      <div className="map-grid grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-1">
        {stateAbbrArray.map((row, rowIndex) => (
          <div className="map-row flex" key={rowIndex}>
            {row.map(stateAbbr => {
              const stateName = Object.keys(stateAbbreviations).find(key => stateAbbreviations[key] === stateAbbr);
              const isHighlighted = filteredStates.has(stateName);
              const isHomeState = stateName === homeState;
              const isBlackout = states.get(stateName)?.[filterKey] === 999;
              let className = 'state text-sm sm:text-base';

              if (isBlackout) className += ' blackout';
              else if (isHomeState && isHighlighted) className += ' home-highlight';
              else if (isHomeState) className += ' home';
              else if (isHighlighted) className += ' highlight';

              return (
                <span key={stateAbbr} className={className}>
                  {stateAbbr}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const CategoryMap = ({ title, filterKey, inputValue, homeState }) => {
  const filteredStates = Array.from(states.entries()).filter(([name, data]) => data[filterKey] <= Number(inputValue));
  return (
    <>
      <div className="category-header mb-4">
        <h2 className="text-lg sm:text-xl">{title}</h2>
      </div>
      {renderMap(new Set(filteredStates.map(([name]) => name)), homeState, filterKey)}
    </>
  );
};

export function Eu() {
  const [inputValue, setInputValue] = useState('');
  const [homeState, setHomeState] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [language, setLanguage] = useState('en'); // Default language is English

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 99)) {
      setInputValue(value);
    }
  };

  const handleHomeStateChange = (event) => {
    const value = event.target.value;
    setHomeState(value);
    setSuggestions(value.length > 0 ? Object.keys(stateAbbreviations).filter(state => state.toLowerCase().startsWith(value.toLowerCase())) : []);
  };

  const handleSuggestionClick = (suggestion) => {
    setHomeState(suggestion);
    setSuggestions([]);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-neutral-900 relative max-w-full mx-4 sm:mx-8 lg:mx-20 my-5 rounded-2xl">
      <LanguageDropdown language={language} handleLanguageChange={handleLanguageChange} />
      <a className="content-center inline-block m-2 bg-green-700 text-white no-underline text-lg rounded-lg text-center cursor-pointer px-7 py-2" href='https://genevat.github.io/rewards2/'>Home</a>
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-center">{labels[language].title}</h1>

      <div className="input-group mb-4 w-full sm:w-auto">
        <label htmlFor="age-input" className="block text-sm sm:text-base mb-2">{labels[language].ageInput}</label>
        <input id="age-input" type="number" onChange={handleChange} className="age-input w-full sm:w-60 px-3 py-2 rounded-lg border border-gray-300" value={inputValue} min="0" max="99" />
      </div>
      <div className="input-group autocomplete-container mb-4 w-full sm:w-auto">
        <label htmlFor="home-state-input" className="block text-sm sm:text-base mb-2">{labels[language].homeStateInput}</label>
        <input id="home-state-input" type="text" onChange={handleHomeStateChange} className="home-state-input w-full sm:w-60 px-3 py-2 rounded-lg border border-gray-300" value={homeState} />
        {suggestions.length > 0 && (
          <ul className="autocomplete-list bg-white border border-gray-300 rounded-lg max-h-40 overflow-y-auto w-full sm:w-60 mt-2">
            {suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)} className="px-3 py-2 cursor-pointer hover:bg-gray-200">
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <>
        {Object.keys(labels[language].categories).map((key) => (
          <div className="category-container mb-8" key={key}>
            <CategoryMap title={labels[language].categories[key]} filterKey={key} inputValue={inputValue} homeState={homeState} />
          </div>
        ))}
      </>
    </div>
  );
}
