// LanguageStore.js

import { reactive } from 'vue';

const languages = {
  en: {
    offers: 'Latest offers',
    offersButton: 'See all special offers',
    ferryComp: 'Ferry companies',
    ferryCompButton: 'See all operators',
    mainDest: 'Main destinations',
    mainDestButton: 'See all destinations',
    form: {
      popRoutes: 'Popular routes',
      Routes: "Routes"
    }
  },
  fr: {
    offers: 'Dernières offres',
    offersButton: 'Voir toutes les offres spéciales',
    ferryComp: 'Compagnies de ferry',
    ferryCompButton: 'Voir toutes les opérateurs',
    mainDest: 'Destinations principales',
    mainDestButton: 'Voir toutes les destinations',
    form: {
      popRoutes: 'Traversées populaires',
      Routes: "Routes"
    }
  },
  it: {
    offers: 'Ultime offerte',
    offersButton: 'Vedi tutte le offerte speciali',
    ferryComp: 'Compagnie di traghetti',
    ferryCompButton: 'Vedi tutti gli operatori',
    mainDest: 'Destinazioni principali',
    mainDestButton: 'Vedi tutte le destinazioni',

    form: {
      popRoutes: 'Percorsi popolari',
      Routes: "Itinerari"
    }
  },
  de: {
    offers: 'Aktuelle Angebote',
    offersButton: 'Alle Sonderangebote anzeigen',
    ferryComp: 'Fährunternehmen',
    ferryCompButton: 'Alle Betreiber anzeigen',
    mainDest: 'Hauptziele',
    mainDestButton: 'Alle Ziele anzeigen',

    form: {
      popRoutes: 'Beliebte Routen',
      Routes: "Routen"
    }
  }


};

export const languageStore = reactive({
  selectedLanguage: 'fr', // Make sure this is initialized

  setLanguage(lang) {
    if (languages[lang]) {
      this.selectedLanguage = lang;
    }
  },

  getLanguage() {
    return languages[this.selectedLanguage] || languages.en;
  }
});
