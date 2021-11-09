import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

const resources = {
  en: {
    translation: {
      Welcome: 'Welcome to React and react-i18next',
      homeTitle: 'Home',
      recordsTitle: 'Records',
      carsTitle: 'Saved Cars',
      tellFriendTitle: 'Share With Friends',
      termsTitle: 'Terms & Conditions',
      history: 'History',
      upcoming: 'Upcoming',
      language: 'اللغة العربية',
    },
  },
  ar: {
    translation: {
      Welcome: 'مرحبًا بالعالم',
      homeTitle: 'الصفحة الرئيسية',
      recordsTitle: 'سجلاتي',
      carsTitle: 'السيارات',
      tellFriendTitle: 'مشاركة التطبيق مع الأصدقاء',
      termsTitle: 'الأحكام والشروط',
      history: 'السجلات',
      upcoming: 'الحجوزات القادمة',
      language: 'English',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: I18nManager.isRTL ? 'ar' : 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
