import React, { useState, useEffect } from 'react';
import './App.css';
import { labels } from './data/LanguageData.js';
import LanguageDropdown from './components/LanguageDropdown.jsx';
import { useParams, useNavigate } from 'react-router-dom';

const renderMap = (filteredStates, homeState, filterKey, states, stateAbbreviations, stateAbbrArray) => {
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
              let className = 'state inline-block w-[35px] h-[35px] text-center leading-[35px] transition-[background-color] duration-[0.3s,color] delay-[0.3s] text-[#e0e0e0] bg-[#3c3c3c] box-border text-sm rounded-md';

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

const CategoryMap = ({ title, filterKey, inputValue, homeState, id }) => {
  const [mapData, setMapData] = useState(null);
  const [loadingError, setLoadingError] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate for redirection

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const module = await import(`./data/MapData-${id}.js`);  // Dynamically import the correct map data file
        setMapData(module);  // Assuming module exports states, stateAbbreviations, stateAbbrArray
        setLoadingError(false); // Reset error if successful
      } catch (error) {
        console.error('Failed to load map data:', error);
        setLoadingError(true); // Set error state
        navigate('/error'); // Redirect to an error page
      }
    };

    fetchMapData();
  }, [id, navigate]);  // Trigger on change of id

  if (!mapData) {
    return <div>Loading map data...</div>;
  }

  const { states, stateAbbreviations, stateAbbrArray } = mapData;
  const filteredStates = Array.from(states.entries()).filter(([name, data]) => data[filterKey] <= Number(inputValue));

  return (
    <>
      <div className="flex flex-col items-center w-full pb-[15px] border-b-2 border-b-[#444] border-solid mb-4">
        <h1 className="text-lg sm:text-xl">{title}</h1>
      </div>
      {renderMap(new Set(filteredStates.map(([name]) => name)), homeState, filterKey, states, stateAbbreviations, stateAbbrArray)}
    </>
  );
};

export function Map() {
  const { id } = useParams();  // Get the dynamic id from the URL
  const [inputValue, setInputValue] = useState('');
  const [homeState, setHomeState] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [language, setLanguage] = useState('en');

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
      <a className="content-center inline-block m-2 bg-green-700 text-white no-underline text-lg rounded-lg text-center cursor-pointer px-7 py-2" href='https://genevat.github.io/rewards/'>
        {labels[language].homeButton} 
      </a>

      <div className="input-group mb-4 w-full sm:w-auto">
        <label htmlFor="age-input" className="block text-sm sm:text-base mb-2 ">{labels[language].ageInput}</label>
        <input id="age-input" type="number" onChange={handleChange} className="text-lg w-full box-border transition-[border-color] duration-[0.3s,box-shadow] delay-[0.3s] text-center text-[#e0e0e0] bg-[#2c2c2c] mb-[18px] p-3 rounded-[10px] border-2 border-solid border-[#444]" value={inputValue} min="0" max="99" />
      </div>

      <div className="input-group autocomplete-container mb-4 w-full sm:w-auto">
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
            <CategoryMap title={labels[language].categories[key]} filterKey={key} inputValue={inputValue} homeState={homeState} id={id} />
          </div>
        ))}
      </>
    </div>
  );
}
