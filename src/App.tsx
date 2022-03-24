import { SmartyText } from 'common-components/SmartyText.component';
import { availableLanguage, availableLanguages, i18n, setLanguage } from 'internationalization/i18n';
import { DetailsPage } from 'pages/DetailsPage/DetailsPage.page';
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
        <Route path="/details/:id" element={<DetailsPage />}></Route>
        <Route path="*" element={<SmartyText type='display'>{i18n('routeNotFound')}</SmartyText>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
