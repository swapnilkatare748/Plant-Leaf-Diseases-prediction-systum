import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import your i18n configuration

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Switch between 'en', 'hi', and 'mr'
  };

  return (
    <Suspense fallback="Loading...">
      <div>
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('hi')}>Hindi</button>
        <button onClick={() => changeLanguage('mr')}>Marathi</button>
      </div>
    </Suspense>
  );
};

export default App;
