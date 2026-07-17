import type {
  LocalizedText,
  LocalizedTextList,
  ModelEntry,
  ProductFamily,
} from "../types";

export const productFilters: ProductFamily[] = ["All", "DynoGrip"];

export const modelGroups = [
  {
    id: "core-unit",
    title: {
      de: "Core Unit",
      en: "Core Unit",
      fr: "Core Unit",
      it: "Core Unit",
    },
    modelIds: ["dynogrip-core-unit"],
  },
  {
    id: "main-grip",
    title: {
      de: "MainGrip",
      en: "MainGrip",
      fr: "MainGrip",
      it: "MainGrip",
    },
    modelIds: ["dynogrip-main-grip-standard", "dynogrip-main-grip-access"],
  },
  {
    id: "main-grip-mini",
    title: {
      de: "MainGrip Mini",
      en: "MainGrip Mini",
      fr: "MainGrip Mini",
      it: "MainGrip Mini",
    },
    modelIds: [
      "dynogrip-main-grip-mini-standard",
      "dynogrip-main-grip-mini-access",
    ],
  },
] satisfies Array<{
  id: string;
  title: LocalizedText;
  modelIds: string[];
}>;

const downloadStl: LocalizedText = {
  de: "Download STL",
  en: "Download STL",
  fr: "Télécharger STL",
  it: "Scarica STL",
};

const downloadStp: LocalizedText = {
  de: "Download STP",
  en: "Download STP",
  fr: "Télécharger STP",
  it: "Scarica STP",
};

const releasedTags: LocalizedTextList = {
  de: ["Freigegeben", "STL-Vorschau", "STP enthalten"],
  en: ["Released", "STL preview", "STP included"],
  fr: ["Validé", "Aperçu STL", "STP inclus"],
  it: ["Rilasciato", "Anteprima STL", "STP incluso"],
};

const materialNotes: LocalizedTextList = {
  de: ["Material gemäss Einsatzzweck und Fertigungsverfahren wählen"],
  en: ["Select the material according to the application and manufacturing process"],
  fr: ["Choisir le matériau selon l'utilisation et le procédé de fabrication"],
  it: ["Scegliere il materiale in base all'uso e al processo di produzione"],
};

const printNotes: LocalizedTextList = {
  de: [
    "STL vor der Fertigung im Slicer prüfen und passend zum verwendeten Drucker ausrichten.",
    "Material, Wandstärke und Füllung müssen auf den vorgesehenen Einsatzzweck abgestimmt werden.",
    "Vor belastetem Einsatz das fertige Bauteil kontrollieren und ausreichend testen.",
  ],
  en: [
    "Check the STL in the slicer before manufacturing and orient it for the printer being used.",
    "Material, wall thickness and infill must be selected for the intended application.",
    "Inspect and adequately test the finished part before using it under load.",
  ],
  fr: [
    "Vérifier le STL dans le slicer avant fabrication et l'orienter pour l'imprimante utilisée.",
    "Le matériau, l'épaisseur des parois et le remplissage doivent être adaptés à l'utilisation prévue.",
    "Contrôler et tester suffisamment la pièce terminée avant toute utilisation sous charge.",
  ],
  it: [
    "Controllare lo STL nello slicer prima della produzione e orientarlo per la stampante utilizzata.",
    "Materiale, spessore delle pareti e riempimento devono essere scelti in base all'uso previsto.",
    "Controllare e testare adeguatamente il componente finito prima dell'uso sotto carico.",
  ],
};

const infoNotes: LocalizedTextList = {
  de: [
    "Die STL-Datei ist für Vorschau und direkte Weiterverarbeitung vorgesehen.",
    "Die STP-Datei kann für Anpassungen in kompatibler CAD-Software verwendet werden.",
    "Dies ist der freigegebene Datenstand für die DynoForce Download-Seite.",
  ],
  en: [
    "The STL file is provided for preview and direct processing.",
    "The STP file can be used for modifications in compatible CAD software.",
    "This is the released data set for the DynoForce download page.",
  ],
  fr: [
    "Le fichier STL est fourni pour l'aperçu et le traitement direct.",
    "Le fichier STP peut être utilisé pour des adaptations dans un logiciel CAO compatible.",
    "Il s'agit du jeu de données validé pour la page de téléchargement DynoForce.",
  ],
  it: [
    "Il file STL è fornito per l'anteprima e l'elaborazione diretta.",
    "Il file STP può essere utilizzato per modifiche in software CAD compatibile.",
    "Questo è il set di dati rilasciato per la pagina di download DynoForce.",
  ],
};

interface ReleasedModelDefinition {
  id: string;
  title: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
  directory: string;
  fileBase: string;
  stlSize: string;
  stpSize: string;
  featured?: boolean;
}

function releasedModel(definition: ReleasedModelDefinition): ModelEntry {
  const basePath = `files/dynogrip/${definition.directory}`;

  return {
    id: definition.id,
    slug: definition.id,
    title: definition.title,
    product: "DynoGrip",
    category: definition.category,
    version: "Release",
    summary: definition.summary,
    tags: releasedTags,
    materials: materialNotes,
    printNotes,
    infoNotes,
    files: [
      {
        label: downloadStl,
        format: "stl",
        path: `${basePath}/${definition.fileBase}.stl`,
        fileName: `${definition.fileBase}.stl`,
        sizeLabel: definition.stlSize,
      },
      {
        label: downloadStp,
        format: "stp",
        path: `${basePath}/${definition.fileBase}.stp`,
        fileName: `${definition.fileBase}.stp`,
        sizeLabel: definition.stpSize,
      },
    ],
    previewPath: `${basePath}/${definition.fileBase}.stl`,
    featured: definition.featured,
  };
}

export const models: ModelEntry[] = [
  releasedModel({
    id: "dynogrip-core-unit",
    title: {
      de: "DynoGrip Core Unit",
      en: "DynoGrip Core Unit",
      fr: "DynoGrip Core Unit",
      it: "DynoGrip Core Unit",
    },
    category: {
      de: "Core Unit",
      en: "Core unit",
      fr: "Unité centrale",
      it: "Unità centrale",
    },
    summary: {
      de: "Freigegebenes 3D-Modell der DynoGrip Core Unit als STL und editierbare STP-Datei.",
      en: "Released 3D model of the DynoGrip Core Unit as STL and editable STP file.",
      fr: "Modèle 3D validé de la DynoGrip Core Unit aux formats STL et STP modifiable.",
      it: "Modello 3D rilasciato della DynoGrip Core Unit in formato STL e STP modificabile.",
    },
    directory: "core-unit",
    fileBase: "DG_CoreUnit",
    stlSize: "808 KB",
    stpSize: "485 KB",
    featured: true,
  }),
  releasedModel({
    id: "dynogrip-main-grip-access",
    title: {
      de: "DynoGrip MainGrip Access",
      en: "DynoGrip MainGrip Access",
      fr: "DynoGrip MainGrip Access",
      it: "DynoGrip MainGrip Access",
    },
    category: {
      de: "Hauptgriff · Access",
      en: "Main grip · Access",
      fr: "Prise principale · Access",
      it: "Impugnatura principale · Access",
    },
    summary: {
      de: "Freigegebene Access-Variante des DynoGrip MainGrip in voller Grösse.",
      en: "Released full-size Access variant of the DynoGrip MainGrip.",
      fr: "Variante Access validée du DynoGrip MainGrip en taille standard.",
      it: "Variante Access rilasciata del DynoGrip MainGrip in dimensione standard.",
    },
    directory: "main-grip-access",
    fileBase: "DG_MainGrip_Access",
    stlSize: "1.01 MB",
    stpSize: "840 KB",
    featured: true,
  }),
  releasedModel({
    id: "dynogrip-main-grip-mini-access",
    title: {
      de: "DynoGrip MainGrip Mini Access",
      en: "DynoGrip MainGrip Mini Access",
      fr: "DynoGrip MainGrip Mini Access",
      it: "DynoGrip MainGrip Mini Access",
    },
    category: {
      de: "Mini-Hauptgriff · Access",
      en: "Mini main grip · Access",
      fr: "Mini prise principale · Access",
      it: "Mini impugnatura principale · Access",
    },
    summary: {
      de: "Freigegebene kompakte Access-Variante des DynoGrip MainGrip Mini.",
      en: "Released compact Access variant of the DynoGrip MainGrip Mini.",
      fr: "Variante Access compacte et validée du DynoGrip MainGrip Mini.",
      it: "Variante Access compatta e rilasciata del DynoGrip MainGrip Mini.",
    },
    directory: "main-grip-mini-access",
    fileBase: "DG_MainGrip_Mini_Access",
    stlSize: "748 KB",
    stpSize: "576 KB",
    featured: true,
  }),
  releasedModel({
    id: "dynogrip-main-grip-mini-standard",
    title: {
      de: "DynoGrip MainGrip Mini Standard",
      en: "DynoGrip MainGrip Mini Standard",
      fr: "DynoGrip MainGrip Mini Standard",
      it: "DynoGrip MainGrip Mini Standard",
    },
    category: {
      de: "Mini-Hauptgriff · Standard",
      en: "Mini main grip · Standard",
      fr: "Mini prise principale · Standard",
      it: "Mini impugnatura principale · Standard",
    },
    summary: {
      de: "Freigegebene kompakte Standardvariante des DynoGrip MainGrip Mini.",
      en: "Released compact standard variant of the DynoGrip MainGrip Mini.",
      fr: "Variante standard compacte et validée du DynoGrip MainGrip Mini.",
      it: "Variante standard compatta e rilasciata del DynoGrip MainGrip Mini.",
    },
    directory: "main-grip-mini-standard",
    fileBase: "DG_MainGrip_Mini_Standard",
    stlSize: "706 KB",
    stpSize: "540 KB",
    featured: true,
  }),
  releasedModel({
    id: "dynogrip-main-grip-standard",
    title: {
      de: "DynoGrip MainGrip Standard",
      en: "DynoGrip MainGrip Standard",
      fr: "DynoGrip MainGrip Standard",
      it: "DynoGrip MainGrip Standard",
    },
    category: {
      de: "Hauptgriff · Standard",
      en: "Main grip · Standard",
      fr: "Prise principale · Standard",
      it: "Impugnatura principale · Standard",
    },
    summary: {
      de: "Freigegebene Standardvariante des DynoGrip MainGrip in voller Grösse.",
      en: "Released full-size standard variant of the DynoGrip MainGrip.",
      fr: "Variante standard validée du DynoGrip MainGrip en taille standard.",
      it: "Variante standard rilasciata del DynoGrip MainGrip in dimensione standard.",
    },
    directory: "main-grip-standard",
    fileBase: "DG_MainGrip_Standard",
    stlSize: "1002 KB",
    stpSize: "819 KB",
    featured: true,
  }),
];
