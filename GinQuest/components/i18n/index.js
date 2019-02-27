import I18n from 'i18n-js';
import en from './en-US.json';
import pt from './pt-BR.json';

I18n.translations = {
    'pt-BR': pt,
    'en-US': en
}

console.log(I18n.t('HELLO_WORLD'));

export const translate = key => I18n.t(key);