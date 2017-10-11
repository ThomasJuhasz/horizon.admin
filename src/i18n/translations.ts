// import translations
import { langEN } from './lang-en';
import { langHU } from './lang-hu';

// all traslations
const dictionary = {};
dictionary[langEN.name] = langEN.trans;
dictionary[langHU.name] = langHU.trans;

// providers
export const LanguageDictionary = dictionary;
