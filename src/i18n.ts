import type { Language, LocalizedText } from "./types";

export const supportedLanguages: Language[] = ["de", "en", "fr", "it"];
export const defaultLanguage: Language = "de";

export const languageNames: Record<Language, string> = {
  de: "DE",
  en: "EN",
  fr: "FR",
  it: "IT",
};

export const productLabels = {
  All: {
    de: "Alle",
    en: "All",
    fr: "Tous",
    it: "Tutti",
  },
  DynoGrip: {
    de: "DynoGrip",
    en: "DynoGrip",
    fr: "DynoGrip",
    it: "DynoGrip",
  },
  DynoPull: {
    de: "DynoPull",
    en: "DynoPull",
    fr: "DynoPull",
    it: "DynoPull",
  },
  Attachments: {
    de: "Anbauteile",
    en: "Attachments",
    fr: "Accessoires",
    it: "Accessori",
  },
} satisfies Record<string, LocalizedText>;

export const uiText = {
  brand: {
    de: "DynoForce 3D Library",
    en: "DynoForce 3D Library",
    fr: "Bibliothèque 3D DynoForce",
    it: "Libreria 3D DynoForce",
  },
  navLibrary: {
    de: "Bibliothek",
    en: "Library",
    fr: "Bibliothèque",
    it: "Libreria",
  },
  navDetails: {
    de: "Modelldetails",
    en: "Model details",
    fr: "Détails du modèle",
    it: "Dettagli modello",
  },
  language: {
    de: "Sprache",
    en: "Language",
    fr: "Langue",
    it: "Lingua",
  },
  heroEyebrow: {
    de: "DynoForce CAD & Print Files",
    en: "DynoForce CAD & Print Files",
    fr: "Fichiers CAD et impression DynoForce",
    it: "File CAD e stampa DynoForce",
  },
  heroTitle: {
    de: "STL ansehen, STEP laden und 3D-Dateien ohne Umwege finden.",
    en: "Preview STL, download STEP and find 3D files without detours.",
    fr: "Voir les STL, télécharger les STEP et trouver les fichiers 3D sans détour.",
    it: "Visualizza STL, scarica STEP e trova file 3D senza complicazioni.",
  },
  heroLead: {
    de: "Diese Bibliothek ist auf schnelle Navigation, saubere Downloads und klare Druckhinweise ausgelegt. Das Design lehnt sich an DynoForce an, ist aber für 3D-Dateien und technische Inhalte optimiert.",
    en: "This library is designed for fast navigation, clean downloads and clear printing guidance. The design follows DynoForce while being optimized for 3D files and technical content.",
    fr: "Cette bibliothèque est conçue pour une navigation rapide, des téléchargements propres et des conseils d'impression clairs. Le design suit DynoForce tout en étant optimisé pour les fichiers 3D et le contenu technique.",
    it: "Questa libreria è pensata per una navigazione rapida, download puliti e istruzioni di stampa chiare. Il design segue DynoForce ma è ottimizzato per file 3D e contenuti tecnici.",
  },
  featuredModels: {
    de: "Empfohlene Modelle für den Schnellstart",
    en: "Featured models for a quick start",
    fr: "Modèles recommandés pour démarrer rapidement",
    it: "Modelli consigliati per iniziare rapidamente",
  },
  dualFormat: {
    de: "Direkter Download dort, wo beide Formate vorhanden sind",
    en: "Direct download where both formats are available",
    fr: "Téléchargement direct là où les deux formats sont disponibles",
    it: "Download diretto dove sono disponibili entrambi i formati",
  },
  notesStat: {
    de: "Material-, Slicer- und Einsatzhinweise pro Eintrag",
    en: "Material, slicer and usage notes per entry",
    fr: "Notes de matériau, slicer et usage pour chaque élément",
    it: "Note su materiale, slicer e utilizzo per ogni elemento",
  },
  notesHeadline: {
    de: "Druckhinweise",
    en: "Print notes",
    fr: "Conseils d'impression",
    it: "Note di stampa",
  },
  sectionEyebrow: {
    de: "3D Library",
    en: "3D Library",
    fr: "Bibliothèque 3D",
    it: "Libreria 3D",
  },
  sectionTitle: {
    de: "Suche, Filter und technische Vorschau in einer Ansicht",
    en: "Search, filters and technical preview in one view",
    fr: "Recherche, filtres et aperçu technique dans une seule vue",
    it: "Ricerca, filtri e anteprima tecnica in un'unica vista",
  },
  sectionLead: {
    de: "Modelle können nach Produktfamilie gefiltert werden. Die rechte Seite zeigt STL-Preview, Downloads und Hinweise für Druck oder Weiterbearbeitung.",
    en: "Models can be filtered by product family. The right side shows STL preview, downloads and notes for printing or further editing.",
    fr: "Les modèles peuvent être filtrés par famille de produits. La partie droite affiche l'aperçu STL, les téléchargements et les conseils pour l'impression ou la modification.",
    it: "I modelli possono essere filtrati per famiglia di prodotto. La parte destra mostra anteprima STL, download e note per la stampa o ulteriori modifiche.",
  },
  search: {
    de: "Suchen",
    en: "Search",
    fr: "Rechercher",
    it: "Cerca",
  },
  searchPlaceholder: {
    de: "z. B. DynoGrip, Gehäuse, Anbauteil ...",
    en: "e.g. DynoGrip, housing, attachment ...",
    fr: "p. ex. DynoGrip, boîtier, accessoire ...",
    it: "per es. DynoGrip, alloggiamento, accessorio ...",
  },
  noModels: {
    de: "Keine Modelle für diesen Filter gefunden.",
    en: "No models found for this filter.",
    fr: "Aucun modèle trouvé pour ce filtre.",
    it: "Nessun modello trovato per questo filtro.",
  },
  preview: {
    de: "STL-Vorschau",
    en: "STL preview",
    fr: "Aperçu STL",
    it: "Anteprima STL",
  },
  category: {
    de: "Kategorie",
    en: "Category",
    fr: "Catégorie",
    it: "Categoria",
  },
  materials: {
    de: "Material empfohlen",
    en: "Recommended material",
    fr: "Matériau recommandé",
    it: "Materiale consigliato",
  },
  downloads: {
    de: "Downloads",
    en: "Downloads",
    fr: "Telechargements",
    it: "Download",
  },
  printNotes: {
    de: "Druckhinweise",
    en: "Print notes",
    fr: "Conseils d'impression",
    it: "Note di stampa",
  },
  infoNotes: {
    de: "Infos & Kommentare",
    en: "Info & notes",
    fr: "Infos et remarques",
    it: "Info e note",
  },
  noModelSelected: {
    de: "Kein Modell ausgewählt.",
    en: "No model selected.",
    fr: "Aucun modèle sélectionné.",
    it: "Nessun modello selezionato.",
  },
  footerCopy: {
    de: "3D-Dateien, Druckhinweise und CAD-Downloads für DynoGrip, DynoPull und passendes Zubehör.",
    en: "3D files, print notes and CAD downloads for DynoGrip, DynoPull and matching accessories.",
    fr: "Fichiers 3D, conseils d'impression et téléchargements CAD pour DynoGrip, DynoPull et les accessoires compatibles.",
    it: "File 3D, note di stampa e download CAD per DynoGrip, DynoPull e accessori compatibili.",
  },
  footerHome: {
    de: "DynoForce",
    en: "DynoForce",
    fr: "DynoForce",
    it: "DynoForce",
  },
  footerWiki: {
    de: "Wiki",
    en: "Wiki",
    fr: "Wiki",
    it: "Wiki",
  },
  footerEvents: {
    de: "Event-Seite",
    en: "Event page",
    fr: "Page événements",
    it: "Pagina eventi",
  },
  stlLoading: {
    de: "STL wird geladen...",
    en: "Loading STL...",
    fr: "Chargement du STL...",
    it: "Caricamento STL...",
  },
  noPreview: {
    de: "Für dieses Modell ist noch keine STL-Vorschau hinterlegt.",
    en: "No STL preview is available for this model yet.",
    fr: "Aucun aperçu STL n'est encore disponible pour ce modèle.",
    it: "Per questo modello non è ancora disponibile un'anteprima STL.",
  },
  stepDownloadable: {
    de: "STEP-Dateien bleiben trotzdem direkt downloadbar.",
    en: "STEP files are still available for direct download.",
    fr: "Les fichiers STEP restent disponibles en téléchargement direct.",
    it: "I file STEP restano comunque disponibili per il download diretto.",
  },
} satisfies Record<string, LocalizedText>;

export function detectLanguage(): Language {
  const saved =
    typeof window !== "undefined" ? window.localStorage.getItem("dynoforce-lang") : null;
  if (saved && supportedLanguages.includes(saved as Language)) {
    return saved as Language;
  }

  if (typeof navigator !== "undefined") {
    const preferred = navigator.language.slice(0, 2) as Language;
    if (supportedLanguages.includes(preferred)) {
      return preferred;
    }
  }

  return defaultLanguage;
}

export function translate(value: LocalizedText, language: Language) {
  return value[language] ?? value[defaultLanguage];
}
