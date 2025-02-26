import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const LanguageDropdown = ({ language, handleLanguageChange }) => {

  // Set the language from cookie when component mounts
  useEffect(() => {
    const storedLanguage = Cookies.get('language');
    if (storedLanguage) {
      handleLanguageChange({ target: { value: storedLanguage } });
    }
  }, [handleLanguageChange]);

  const handleLanguageChangeWithCookie = (e) => {
    const selectedLanguage = e.target.value;
    handleLanguageChange(e);
    Cookies.set('language', selectedLanguage, { expires: 365 }); // Store language for 1 year
  };

  return (
    <>
    <div className="sticky bg-neutral-800 rounded-lg p-2">
      <select value={language} onChange={handleLanguageChangeWithCookie}>
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="de">🇩🇪 Deutsch</option>
        <option value="es">🇪🇸 Español</option>
        <option value="ru">🇷🇺 Русский</option>
        <option value="it">🇮🇹 Italiano</option>
        <option value="pl">🇵🇱 Polski</option>
        <option value="uk">🇺🇦 Українська</option>
        <option value="ro">🇷🇴 Română</option>
        <option value="ga">🇮🇪 Gaeilge</option>
      </select>
    </div>
          <a className="content-center inline-block m-2 bg-green-700 text-white no-underline text-lg rounded-lg text-center cursor-pointer px-7 py-2" href='https://genevat.github.io/rewards2/'>Home</a>
          
</>
  );
};

export default LanguageDropdown;
