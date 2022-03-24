import { availableLanguage, availableLanguages, setLanguage } from 'internationalization/i18n';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/HomePage/HomePage.page';

function App() {
  React.useEffect(() => {
    const language = navigator.language.slice(0,2);
    if (availableLanguages.includes(language)) {
      setLanguage(language as availableLanguage);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/details" element={<h1>Details</h1>}></Route>
        <Route path="*" element={<h1>We could not find your route :(</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
