import React, { useEffect, useState } from 'react'; 
import Cookies from 'js-cookie';

const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'ru', label: 'Русский' },
  { code: 'it', label: 'Italiano' },
  { code: 'pl', label: 'Polski' },
  { code: 'uk', label: 'Українська' },
  { code: 'ro', label: 'Română' },
  { code: 'ga', label: 'Gaeilge' }
];

const LanguageDropdown = ({ language, handleLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  // Set the language from cookie when component mounts
  useEffect(() => {
    const storedLanguage = Cookies.get('language');
    if (storedLanguage) {
      handleLanguageChange({ target: { value: storedLanguage } });
      setSelectedLanguage(storedLanguage); // Update local state
    }
  }, [handleLanguageChange]);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    handleLanguageChange({ target: { value: lang } });
    Cookies.set('language', lang, { expires: 365 }); // Store language for 1 year
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative bg-neutral-800 rounded-lg p-2 w-40">
      {/* Dropdown Toggle Button */}
      <div
        className="flex items-center justify-between p-3 bg-gray-700 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        role="button"
        tabIndex={0}
      >
        <span className="text-white font-semibold">
          {selectedLanguage
            ? languageOptions.find((option) => option.code === selectedLanguage)?.label
            : 'Select Language'}
        </span>
        <span
          className={`ml-2 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          &#9660;
        </span>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 w-full mt-2 bg-gray-800 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        role="listbox"
        aria-labelledby="language-select"
      >
        {languageOptions.map((option) => (
          <div
            key={option.code}
            className={`dropdown-item p-3 cursor-pointer hover:bg-gray-400 focus:bg-gray-300 transition-all duration-200 ease-in-out ${
              selectedLanguage === option.code ? 'bg-gray-500' : ''
            }`}
            onClick={() => handleLanguageSelect(option.code)}
            role="option"
            aria-selected={selectedLanguage === option.code}
            tabIndex={0} // Enable keyboard navigation
          >
            <span className="text-white">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;
