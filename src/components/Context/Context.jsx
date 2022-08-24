import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';

export const LanguageContext = React.createContext();
const languages = ['JavaScript', 'Python'];

function App() {
  // implement Context here so can be used in child components

  const favoriteLanguage = useContext(LanguageContext);
  return (
    <LanguageContext.Provider value={favoriteLanguage}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

function MainSection() {
  const [language, setLanguage] = useState(languages[0]);
  function toggleLanguage() {
    setLanguage(language === languages[0] ? languages[1] : languages[0]);
  }
  return (
    <div>
      <p id='favoriteLanguage'>Favorite programing language: {language}</p>
      <button onClick={toggleLanguage} id='changeFavorite'>
        Toggle language
      </button>
    </div>
  );
}

export default function Context() {
  return (
    <>
      <App />
    </>
  );
}
