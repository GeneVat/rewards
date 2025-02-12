import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

const states = [
  { name: 'Alabama', learners: 15, license: 16, dropout: 17, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Alaska', learners: 14, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Arizona', learners: 16, license: 16, dropout: 18, marriage: 18, consent: 18, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Arkansas', learners: 14, license: 18, dropout: 17, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'California', learners: 15, license: 18, dropout: 18, marriage: 18, consent: 18, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Colorado', learners: 15, license: 17, dropout: 17, marriage: 18, consent: 17, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Connecticut', learners: 16, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Delaware', learners: 16, license: 18, dropout: 16, marriage: 18, consent: 18, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'District of Columbia', learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Florida', learners: 15, license: 18, dropout: 16, marriage: 18, consent: 18, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 16 },
  { name: 'Georgia', learners: 15, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 17, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Hawaii', learners: 15, license: 17, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Idaho', learners: 14, license: 16, dropout: 16, marriage: 18, consent: 18, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 14 },
  { name: 'Illinois', learners: 15, license: 18, dropout: 17, marriage: 18, consent: 17, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Indiana', learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Iowa', learners: 14, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Kansas', learners: 14, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Kentucky', learners: 16, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Louisiana', learners: 15, license: 17, dropout: 18, marriage: 18, consent: 17, gambling: 21, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Maine', learners: 15, license: 16, dropout: 17, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Maryland', learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Massachusetts', learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Michigan', learners: 14, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 17, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Minnesota', learners: 15, license: 17, dropout: 17, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Mississippi', learners: 15, license: 16, dropout: 17, marriage: 21, consent: 16, gambling: 21, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Missouri', learners: 15, license: 18, dropout: 17, marriage: 18, consent: 17, gambling: 18, adultCharge: 17, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Montana', learners: 14, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Nebraska', learners: 15, license: 18, dropout: 18, marriage: 19, consent: 17, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Nevada', learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 21, adultCharge: 21, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'New Hampshire', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'New Jersey', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 16 },
  { name: 'New Mexico', learners: 15, license: 18, dropout: 17, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'New York', learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 16, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'North Carolina', learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 16, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'North Dakota', learners: 14, license: 21, dropout: 18, marriage: 18, consent: 16, gambling: 21, adultCharge: 21, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Ohio', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Oklahoma', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Oregon', learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Pennsylvania', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Puerto Rico', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Rhode Island', learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'South Carolina', learners: 16, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 21, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'South Dakota', learners: 14, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 21, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Tennessee', learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Texas', learners: 15, license: 17, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 17, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Utah', learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Vermont', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Virgin Islands', learners: 15, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Virginia', learners: 15, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Washington', learners: 15, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'West Virginia', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Wisconsin', learners: 15, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 17, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Wyoming', learners: 15, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 21, tattoo: 18 },
  { name: 'Yukon', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 },
  { name: 'Northwest Territories', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 },
  { name: 'Nunavut', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 },
  { name: 'British Columbia', learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 },
  { name: 'Alberta', learners: 14, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 18, tattoo: 18 },
  { name: 'Saskatchewan', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 },
  { name: 'Manitoba', learners: 15, license: 16, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 18, tattoo: 18 },
  { name: 'Ontario', learners: 16, license: 18, dropout: 18, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 },
  { name: 'Quebec', learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 18, adultCharge: 18, drinkingAlcohol: 18, tattoo: 18 },
  { name: 'New Brunswick', learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 },
  { name: 'Nova Scotia', learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 },
  { name: 'Prince Edward Island', learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 },
  { name: 'Newfoundland and Labrador', learners: 16, license: 18, dropout: 16, marriage: 18, consent: 16, gambling: 19, adultCharge: 18, drinkingAlcohol: 19, tattoo: 18 },
];

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

const renderMap = (filteredStates, homeState, inputValue, filterKey) => {
  const stateAbbrArray = `
    AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME
    MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI
    SC SD TN TX UT VT VA WA WV WI WY YT NT NU BC AB SK MB ON QC NB
    NS PE NL
  `.split(/\s+/).filter(Boolean);

  const grid = [];
  for (let i = 0; i < 8; i++) {
    const row = stateAbbrArray.slice(i * 9, (i + 1) * 9);
    grid.push(row);
  }

  return (
    <div className="map-grid-container">
      <div className="map-grid">
        {grid.map((row, rowIndex) => (
          <div className="map-row" key={rowIndex}>
            {row.map(stateAbbr => {
              const stateName = Object.keys(stateAbbreviations).find(key => stateAbbreviations[key] === stateAbbr);
              const isHighlighted = filteredStates.has(stateName);
              const isHomeState = stateName === homeState;
              const isBlackout = states.find(state => state.name === stateName && state[filterKey] === 999);
              let className = 'state';

              if (isBlackout) {
                className += ' blackout'; // Blackout state
              } else if (isHomeState && isHighlighted) {
                className += ' home-highlight'; // Both home and highlighted
              } else if (isHomeState) {
                className += ' home'; // Just home state
              } else if (isHighlighted) {
                className += ' highlight'; // Just highlighted
              }

              return (
                <span
                  key={stateAbbr}
                  className={className}
                >
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
  const filteredStates = states.filter(state => state[filterKey] <= Number(inputValue));
  return (
    <>
      <div className="category-header">
        <h2>{title}</h2>
      </div>
      {renderMap(new Set(filteredStates.map(state => state.name)), homeState, inputValue, filterKey)}
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
    if (value.length > 0) {
      const suggestionList = Object.keys(stateAbbreviations).filter(state =>
        state.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(suggestionList);
    } else {
      setSuggestions([]);
    }
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
          <option value="en">
            <span role="img" aria-label="USA">🇺🇸🇨🇦</span> English
          </option>
          <option value="fr">
            <span role="img" aria-label="Quebec">🇫🇷🇨🇦</span> Français
          </option>
          <option value="es">
            <span role="img" aria-label="Mexico">🇪🇸🇲🇽</span> Español
          </option>
        </select>
      </div>
      <h1>{labels[language].title}</h1>

      <div className="input-group">
        <label htmlFor="age-input">{labels[language].ageInput}</label>
        <input
          id="age-input"
          type="number"
          onChange={handleChange}
          className="age-input"
          value={inputValue}
          min="0"
          max="99"
        />
      </div>
      <div className="input-group autocomplete-container">
        <label htmlFor="home-state-input">{labels[language].homeStateInput}</label>
        <input
          id="home-state-input"
          type="text"
          onChange={handleHomeStateChange}
          className="home-state-input"
          value={homeState}
        />
        {suggestions.length > 0 && (
          <ul className="autocomplete-list">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="category-container">
        <CategoryMap
          title={labels[language].categories.learners}
          filterKey="learners"
          inputValue={inputValue}
          homeState={homeState}
        />
      </div>
      <div className="category-container">
        <CategoryMap
          title={labels[language].categories.license}
          filterKey="license"
          inputValue={inputValue}
          homeState={homeState}
        />
      </div>
      <div className="category-container">
        <CategoryMap
          title={labels[language].categories.dropout}
          filterKey="dropout"
          inputValue={inputValue}
          homeState={homeState}
        />
      </div>
      <div className="category-container">
        <CategoryMap
          title={labels[language].categories.marriage}
          filterKey="marriage"
          inputValue={inputValue}
          homeState={homeState}
        />
      </div>
      <div className="category-container">
        <CategoryMap
          title={labels[language].categories.consent}
          filterKey="consent"
          inputValue={inputValue}
          homeState={homeState}
        />
      </div>
      <div className="category-container">
        <CategoryMap
          title={labels[language].categories.gambling}
          filterKey="gambling"
          inputValue={inputValue}
          homeState={homeState}
        />
      </div>
      <div className="category-container">
        <CategoryMap
          title={labels[language].categories.drinkingAlcohol}
          filterKey="drinkingAlcohol"
          inputValue={inputValue}
          homeState={homeState}
        />
      </div>
      <div className="category-container">
        <CategoryMap
          title={labels[language].categories.tattoo}
          filterKey="tattoo"
          inputValue={inputValue}
          homeState={homeState}
        />
      </div>
      <div className="category-container">
        <CategoryMap
          title={labels[language].categories.adultCharge}
          filterKey="adultCharge"
          inputValue={inputValue}
          homeState={homeState}
        />
      </div>
    </div>
  );
};

export default App;
