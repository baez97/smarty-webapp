const translations = {
  'en': require('./en.json'),
  'es': require('./es.json')
};

export type availableLanguage = keyof typeof translations;
export const availableLanguages = Object.keys(translations);

class Internationalization {
  static currentLanguage: availableLanguage = 'en';

  static setLanguage(language: 'en' | 'es') {
    this.currentLanguage = language;
  }

  static translate(key: string) {
    return translations[this.currentLanguage][key] || '';
  }
}

export function i18n(key: string) {
  return Internationalization.translate(key);
}

export function setLanguage(language: availableLanguage) {
  Internationalization.setLanguage(language);
}