import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

const states = new Map([
  ['Alabama', { learners: 15, license: 16, dropout: 17, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Alaska', { learners: 14, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Arizona', { learners: 16, license: 16, dropout: 18, marriage: 18, consent: 18, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Arkansas', { learners: 14, license: 18, dropout: 17, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['California', { learners: 15, license: 18, dropout: 18, marriage: 18, consent: 18, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Colorado', { learners: 15, license: 17, dropout: 17, marriage: 18, consent: 17, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Connecticut', { learners: 16, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Delaware', { learners: 16, license: 18, dropout: 16, marriage: 18, consent: 18, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['District of Columbia', { learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Florida', { learners: 15, license: 18, dropout: 16, marriage: 18, consent: 18, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 16 }],
  ['Georgia', { learners: 15, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 17, drinkingAlcohol: 21, tattoo: 18 }],
  ['Hawaii', { learners: 15, license: 17, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Idaho', { learners: 14, license: 16, dropout: 16, marriage: 18, consent: 18, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 14 }],
  ['Illinois', { learners: 15, license: 18, dropout: 17, marriage: 18, consent: 17, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Indiana', { learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Iowa', { learners: 14, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Kansas', { learners: 14, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Kentucky', { learners: 16, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Louisiana', { learners: 15, license: 17, dropout: 18, marriage: 18, consent: 17, gambling: 21, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Maine', { learners: 15, license: 16, dropout: 17, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Maryland', { learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Massachusetts', { learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Michigan', { learners: 14, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 17, drinkingAlcohol: 21, tattoo: 18 }],
  ['Minnesota', { learners: 15, license: 17, dropout: 17, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Mississippi', { learners: 15, license: 16, dropout: 17, marriage: 21, consent: 16, gambling: 21, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Missouri', { learners: 15, license: 18, dropout: 17, marriage: 18, consent: 17, gambling: 18, adultCharge: 17, drinkingAlcohol: 21, tattoo: 18 }],
  ['Montana', { learners: 14, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Nebraska', { learners: 15, license: 18, dropout: 18, marriage: 19, consent: 17, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Nevada', { learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 21, adultCharge: 21, drinkingAlcohol: 21, tattoo: 18 }],
  ['New Hampshire', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['New Jersey', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 16 }],
  ['New Mexico', { learners: 15, license: 18, dropout: 17, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['New York', { learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 16, drinkingAlcohol: 21, tattoo: 18 }],
  ['North Carolina', { learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 16, drinkingAlcohol: 21, tattoo: 18 }],
  ['North Dakota', { learners: 14, license: 21, dropout: 18, marriage: 18, consent: 16, gambling: 21, adultCharge: 21, drinkingAlcohol: 21, tattoo: 18 }],
  ['Ohio', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Oklahoma', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Oregon', { learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Pennsylvania', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Puerto Rico', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Rhode Island', { learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['South Carolina', { learners: 16, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 21, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['South Dakota', { learners: 14, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 21, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Tennessee', { learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Texas', { learners: 15, license: 17, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 17, drinkingAlcohol: 21, tattoo: 18 }],
  ['Utah', { learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Vermont', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Virgin Islands', { learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Virginia', { learners: 15, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Washington', { learners: 15, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['West Virginia', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Wisconsin', { learners: 15, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 17, drinkingAlcohol: 21, tattoo: 18 }],
  ['Wyoming', { learners: 15, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 }],
  ['Yukon', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 }],
  ['Northwest Territories', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 }],
  ['Nunavut', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 }],
  ['British Columbia', { learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 }],
  ['Alberta', { learners: 14, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 18, tattoo: 18 }],
  ['Saskatchewan', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 }],
  ['Manitoba', { learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 18, tattoo: 18 }],
  ['Ontario', { learners: 16, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 }],
  ['Quebec', { learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 18, tattoo: 18 }],
  ['New Brunswick', { learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 }],
  ['Nova Scotia', { learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 }],
  ['Prince Edward Island', { learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 }],
  ['Newfoundland and Labrador', { learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 }],
]);

const stateAbbreviations = {
  'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR', 'California': 'CA',
  'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE', 'District of Columbia': 'DC',
  'Florida': 'FL', 'Georgia': 'GA', 'Hawaii': 'HI', 'Idaho': 'ID', 'Illinois': 'IL',
  'Indiana': 'IN', 'Iowa': 'IA', 'Kansas': 'KS', 'Kentucky': 'KY', 'Louisiana': 'LA',
  'Maine': 'ME', 'Maryland': 'MD', 'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN',
  'Mississippi': 'MS', 'Missouri': 'MO', 'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV',
  'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM', 'New York': 'NY',
  'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH', 'Oklahoma': 'OK', 'Oregon': 'OR',
  'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC', 'South Dakota': 'SD',
  'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT', 'Vermont': 'VT', 'Virginia': 'VA',
  'Washington': 'WA', 'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY',
  'Yukon': 'YT', 'Northwest Territories': 'NT', 'Nunavut': 'NU', 'British Columbia': 'BC', 'Alberta': 'AB',
  'Saskatchewan': 'SK', 'Manitoba': 'MB', 'Ontario': 'ON', 'Quebec': 'QC', 'New Brunswick': 'NB',
  'Nova Scotia': 'NS', 'Prince Edward Island': 'PE', 'Newfoundland and Labrador': 'NL'
};

const renderMap = (filteredStates, homeState, filterKey) => {
  const stateAbbrArray = [
    ['YT', 'NT', 'NU'],
    ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL'],
    ['WA', 'OR', 'ID', 'MT', 'ND', 'MN', 'WI', 'MI', 'NY', 'VT', 'NH', 'ME'],
    ['CA', 'NV', 'UT', 'WY', 'SD', 'IA', 'IL', 'IN', 'OH', 'PA', 'NJ', 'CT', 'RI', 'MA'],
    ['AK', 'HI', 'AZ', 'CO', 'NE', 'MO', 'KY', 'WV', 'VA', 'MD', 'DE'],
    ['NM', 'KS', 'AR', 'TN', 'NC', 'SC'],
    ['TX', 'OK', 'LA', 'MS', 'AL', 'GA'],
    ['FL']
  ];

  return (
    <div className="map-grid-container">
      <div className="map-grid">
        {stateAbbrArray.map((row, rowIndex) => (
          <div className="map-row" key={rowIndex}>
            {row.map(stateAbbr => {
              const stateName = Object.keys(stateAbbreviations).find(key => stateAbbreviations[key] === stateAbbr);
              const isHighlighted = filteredStates.has(stateName);
              const isHomeState = stateName === homeState;
              const isBlackout = states.get(stateName)?.[filterKey] === 999;
              let className = 'state';

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
      <div className="category-header">
        <h2>{title}</h2>
      </div>
      {renderMap(new Set(filteredStates.map(([name]) => name)), homeState, filterKey)}
    </>
  );
};

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [homeState, setHomeState] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [darkMode, setDarkMode] = useState(true); // Enable dark mode by default
  const [language, setLanguage] = useState('en'); // Default language is English

  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

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

  const labels = {
    en: {
      title: 'Unlocked States/Provinces',
      ageInput: 'Enter your age',
      homeStateInput: 'Enter your home state/province',
      categories: {
        learners: "Learner’s Permit",
        license: "Regular License",
        dropout: "Minimum Dropout Age",
        marriage: "Marriage Age",
        consent: "Age of Consent",
        gambling: "Gambling Age",
        drinkingAlcohol: "Drinking Alcohol",
        tattoo: "Getting a Tattoo",
        adultCharge: "Age Can Be Charged as Adult"
      }
    },
    fr: {
      title: 'États/Provinces Déverrouillés',
      ageInput: 'Entrez votre âge',
      homeStateInput: 'Entrez votre état/province d\'origine',
      categories: {
        learners: "Permis d'apprenti",
        license: "Permis régulier",
        dropout: "Âge minimum de décrochage",
        marriage: "Âge de mariage",
        consent: "Âge de consentement",
        gambling: "Âge de jeu",
        drinkingAlcohol: "Consommation d'alcool",
        tattoo: "Se faire tatouer",
        adultCharge: "Âge pour être jugé comme adulte"
      }
    },
    es: {
      title: 'Estados/Provincias Desbloqueados',
      ageInput: 'Ingrese su edad',
      homeStateInput: 'Ingrese su estado/provincia de origen',
      categories: {
        learners: "Permiso de Aprendiz",
        license: "Licencia Regular",
        dropout: "Edad Mínima de Abandono Escolar",
        marriage: "Edad para Casarse",
        consent: "Edad de Consentimiento",
        gambling: "Edad para Apostar",
        drinkingAlcohol: "Consumo de Alcohol",
        tattoo: "Hacerse un Tatuaje",
        adultCharge: "Edad para Ser Juzgado como Adulto"
      }
    }
  };

  return (
    <div className="app-container dark-mode">
      <div className="language-dropdown">
        <select value={language} onChange={handleLanguageChange}>
          <option value="en"><span role="img" aria-label="USA">🇺🇸🇨🇦</span> English</option>
          <option value="fr"><span role="img" aria-label="Quebec">🇫🇷🇨🇦</span> Français</option>
          <option value="es"><span role="img" aria-label="Mexico">🇪🇸🇲🇽</span> Español</option>
        </select>
      </div>
      <h1>{labels[language].title}</h1>

      <div className="input-group">
        <label htmlFor="age-input">{labels[language].ageInput}</label>
        <input id="age-input" type="number" onChange={handleChange} className="age-input" value={inputValue} min="0" max="99" />
      </div>
      <div className="input-group autocomplete-container">
        <label htmlFor="home-state-input">{labels[language].homeStateInput}</label>
        <input id="home-state-input" type="text" onChange={handleHomeStateChange} className="home-state-input" value={homeState} />
        {suggestions.length > 0 && (
          <ul className="autocomplete-list">
            {suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      {Object.keys(labels[language].categories).map((key) => (
        <div className="category-container" key={key}>
          <CategoryMap title={labels[language].categories[key]} filterKey={key} inputValue={inputValue} homeState={homeState} />
        </div>
      ))}
    </div>
  );
};

export default App;
