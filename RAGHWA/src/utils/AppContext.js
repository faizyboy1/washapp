import React, {createContext, useState} from 'react';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart'; // Import package from node modules
// import i18n from 'i18n-js';
import en from '../locals/en.json';
import ar from '../locals/ar.json';

// import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import i18n from 'i18next';

import {initReactI18next} from 'react-i18next';
import {useStorage} from './useStorage';
import MMKVStorage from 'react-native-mmkv-storage';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18next.init(
  {
    compatibilityJSON: 'v3',
  },
  (err, t) => {
    /* resources are loaded */
  },
);

i18n.use(initReactI18next).init({
  resources,
  lng: I18nManager.isRTL ? 'ar' : 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const AppContext = createContext(null);

export const AppProvider = ({children}) => {
  const [user, setUser] = useStorage('user');
  const token = user.token;
  const tokenHeader = {headers: {Authorization: `Bearer ${token}`}};
  const setToken = newValue => {
    setUser(u => {
      u.token = newValue;
      return u;
    });
  };
  // let [token, setToken] = useStorage('user', null);
  let [onboarding, setOnboarding] = useStorage('onboarding');
  const [isLoading, setIsLoading] = useState(true);

  const toggleLanguage = () => {
    const changeTo = I18nManager.isRTL ? 'en' : 'ar';

    i18n
      .changeLanguage(changeTo)
      .then(() => {
        I18nManager.forceRTL(!I18nManager.isRTL);
        RNRestart.Restart();
      })
      .catch(function (error) {
        alert(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  };

  return (
    <AppContext.Provider
      value={{
        toggleLanguage,
        token,
        setToken,
        onboarding,
        setOnboarding,
        user,
        setUser,
        tokenHeader,
      }}>
      {children}
    </AppContext.Provider>
  );
};
