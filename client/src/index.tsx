import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import axios from 'axios';

import './index.css';
import common_en from './assets/locales/en/default.json';
import common_de from './assets/locales/de/default.json';
import common_es from './assets/locales/es/default.json';
import common_fr from './assets/locales/fr/default.json';
import common_it from './assets/locales/it/default.json';
import common_ro from './assets/locales/ro/default.json';

import App from './App';
import store, { AppState } from './store';
import { i18nSupported } from './shared/enums/i18n';
import { I18nextProvider } from 'react-i18next';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

const preferredLanguage = (
  JSON.parse(localStorage.getItem('state')) as AppState
)?.UI.language;

i18next.init({
  interpolation: { escapeValue: false },
  lng: preferredLanguage || i18nSupported.ENGLISH,
  resources: {
    [i18nSupported.ENGLISH]: {
      common: common_en
    },
    [i18nSupported.FRENCH]: {
      common: common_fr
    },
    [i18nSupported.GERMAN]: {
      common: common_de
    },
    [i18nSupported.ITALY]: {
      common: common_it
    },
    [i18nSupported.ROMANIAN]: {
      common: common_ro
    },
    [i18nSupported.SPANISH]: {
      common: common_es
    }
  }
});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
