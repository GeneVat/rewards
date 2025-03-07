import './App.css';
import { labels } from './data/LanguageData.js';
import LanguageDropdown from './components/LanguageDropdown.jsx';
import React, { useState } from 'react';

export function Main() {
  const [language, setLanguage] = useState('en');
  
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-neutral-900 relative max-w-full mx-5 my-5 rounded-2xl">
      
      {/* Language Dropdown */}
      <LanguageDropdown language={language} handleLanguageChange={handleLanguageChange} />

      {/* Header */}
      <h1 className="text-3xl font-semibold mb-4 text-center">
        {labels[language].pick}
      </h1>

      {/* Buttons for different locations */}
      <div className="space-x-4 flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4">
        <a
          href="#/eu"
          className="content-center inline-block m-2 bg-blue-500 text-white no-underline text-lg rounded-lg text-center cursor-pointer px-7 py-2 sm:bg-blue-600"
        >
          {labels[language].location.euro} 
        </a>
        
        <a
          href="#/usca"
          className="content-center inline-block m-2 bg-yellow-500 text-white no-underline text-lg rounded-lg text-center cursor-pointer px-7 py-2 sm:bg-yellow-600"
        >
          {labels[language].location.usca}
        </a>
        
        <a
          href="#/la"
          className="content-center inline-block m-2 bg-green-500 text-white no-underline text-lg rounded-lg text-center cursor-pointer px-7 py-2 sm:bg-green-600"
        >
          {labels[language].location.latin}
        </a>
      </div>
    </div>
  );
}
