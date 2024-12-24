import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "ico.title": "Meme Token ICO",
      "ico.subtitle": "Join the next generation of meme coins on Solana",
      "ico.ends": "ICO Ends In",
      "ico.progress": "Progress",
      "ico.buy": "Buy Tokens",
      "ico.price": "Price",
      "ico.min": "Min Purchase",
      "footer.inspired": "Inspired by",
    }
  },
  es: {
    translation: {
      "ico.title": "ICO de Token Meme",
      "ico.subtitle": "Únete a la próxima generación de meme coins en Solana",
      "ico.ends": "ICO Termina En",
      "ico.progress": "Progreso",
      "ico.buy": "Comprar Tokens",
      "ico.price": "Precio",
      "ico.min": "Compra Mínima",
      "footer.inspired": "Inspirado por",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;