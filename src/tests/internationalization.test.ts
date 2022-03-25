import { setLanguage, i18n } from 'internationalization/i18n'
describe('The Internationalization function...', () => {
  it('Has english as default language', () => {
    const result = i18n('showMore');
    expect(result).toBe('SHOW MORE');
  });

  it('Changes language correctly', () => {
    setLanguage('es');
    const result = i18n('showMore');
    expect(result).toBe('VER MÁS');
  });
});