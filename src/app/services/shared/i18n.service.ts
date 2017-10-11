import { Injectable, Inject, EventEmitter } from '@angular/core';
import { LanguageDictionary } from '../../../i18n/translations'; // import our opaque token
import { Configuration } from '../../../../configuration';

// The base of this solution can be found here: https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-2

@Injectable()
export class I18nService {
  currentLang: string;
  private PLACEHOLDER = '%';
  private _defaultLang: string;
  private _translations: any;

  public onLangChanged: EventEmitter<string> = new EventEmitter<string>();

  // inject our translations
  constructor() {
    this._translations = LanguageDictionary;

    // default language is the browser's language, if it's not supported then fall back to english
    const navigatorLang = this._translations[navigator.language] ? navigator.language : null;
    this.currentLang = localStorage.getItem('lang') || navigatorLang || Configuration.defaultLanguage || 'en';
  }

  public use(lang: string, reloadPage: boolean): void {
    // set current language
    this.currentLang = lang;
    this.onLangChanged.emit(lang);
    localStorage.setItem('lang', lang);

    if (reloadPage) {
      location.reload();
    }
  }

  private deepFind(key: string) {

    const keys = key.split('.');

    let translation = this._translations[this.currentLang];

    for (let i = 0; i < keys.length; i++) {
      translation = translation[keys[i]];
    }

    if (translation === undefined) {
      throw new Error();
    }

    return translation;
  }

  private translate(key: string): string {
    try {
      return this.deepFind(key);
    } catch (e) {
      return 'Missing key: ' + key;
    }

  }

  public replace(word: string = '', words: string | string[] = '') {
    let translation: string = word;

    const values: string[] = [].concat(words);
    values.forEach((e, i) => {
      translation = translation.replace(this.PLACEHOLDER.concat(<any>i), e);
    });

    return translation;
  }

  public instant(key: string, words?: string | string[]) {
    // public perform translation
    const translation: string = this.translate(key);

    if (!words) {
      return translation;
    }
    return this.replace(translation, words);
  }
}
