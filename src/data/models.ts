import type { ModelEntry, ProductFamily } from "../types";

export const productFilters: ProductFamily[] = [
  "All",
  "DynoGrip",
  "DynoPull",
  "Attachments",
];

export const models: ModelEntry[] = [
  {
    id: "dynogrip-mini-short",
    slug: "dynogrip-mini-short",
    title: {
      de: "DynoGrip Mini Short",
      en: "DynoGrip Mini Short",
      fr: "DynoGrip Mini Short",
      it: "DynoGrip Mini Short",
    },
    product: "DynoGrip",
    category: {
      de: "Grip-Einsatz",
      en: "Grip insert",
      fr: "Insert de prise",
      it: "Inserto impugnatura",
    },
    version: "v2.2",
    summary: {
      de: "Kompakte DynoGrip-Griffvariante mit STL für den Direktdruck und STEP für Anpassungen im CAD.",
      en: "Compact DynoGrip grip variant with STL for direct printing and STEP for CAD adjustments.",
      fr: "Variante de prise DynoGrip compacte avec STL pour l'impression directe et STEP pour les adaptations CAD.",
      it: "Variante compatta dell'impugnatura DynoGrip con STL per stampa diretta e STEP per modifiche CAD.",
    },
    tags: {
      de: ["STL-Vorschau", "STEP enthalten", "Kompakt", "Grip"],
      en: ["STL Preview", "STEP included", "Compact", "Grip"],
      fr: ["Apercu STL", "STEP inclus", "Compact", "Prise"],
      it: ["Anteprima STL", "STEP incluso", "Compatto", "Grip"],
    },
    materials: {
      de: ["PETG", "PA12", "HT PLA GF"],
      en: ["PETG", "PA12", "HT PLA GF"],
      fr: ["PETG", "PA12", "HT PLA GF"],
      it: ["PETG", "PA12", "HT PLA GF"],
    },
    printNotes: {
      de: [
        "0.2 mm Layerhöhe funktioniert gut für einen sauberen ersten Prototyp.",
        "Mindestens 4 Perimeter empfohlen, damit die Griffkante robust bleibt.",
        "Bei hoher Belastung PETG, PA12 oder HT PLA GF statt sprödem PLA bevorzugen.",
      ],
      en: [
        "A 0.2 mm layer height works well for a clean first prototype.",
        "At least 4 perimeters are recommended so the grip edge stays robust.",
        "For high loads, prefer PETG, PA12 or HT PLA GF over brittle PLA.",
      ],
      fr: [
        "Une hauteur de couche de 0.2 mm convient bien pour un premier prototype propre.",
        "Au moins 4 perimetres sont recommandes pour garder un bord de prise robuste.",
        "Pour les charges elevees, preferez le PETG, le PA12 ou le HT PLA GF au PLA cassant.",
      ],
      it: [
        "Un'altezza layer di 0.2 mm funziona bene per un primo prototipo pulito.",
        "Si consigliano almeno 4 perimetri per mantenere robusto il bordo dell'impugnatura.",
        "Per carichi elevati, preferisci PETG, PA12 o HT PLA GF invece del PLA fragile.",
      ],
    },
    infoNotes: {
      de: [
        "Geeignet als Ausgangsbasis für kürzere oder leichtere Griffvarianten.",
        "STEP-Datei ist ideal, wenn Bohrungen oder Radien angepasst werden sollen.",
      ],
      en: [
        "Suitable as a starting point for shorter or lighter grip variants.",
        "The STEP file is ideal when holes or radii need to be adjusted.",
      ],
      fr: [
        "Convient comme base de depart pour des variantes de prise plus courtes ou plus legeres.",
        "Le fichier STEP est ideal si les perçages ou les rayons doivent etre ajustes.",
      ],
      it: [
        "Adatto come base di partenza per varianti di impugnatura piu corte o leggere.",
        "Il file STEP e ideale se occorre modificare fori o raggi.",
      ],
    },
    files: [
      {
        label: {
          de: "Download STL",
          en: "Download STL",
          fr: "Telecharger STL",
          it: "Scarica STL",
        },
        format: "stl",
        path: "files/dynogrip/mini-short/DynoGrip_Mini_Short_v2.2.stl",
        fileName: "DynoGrip_Mini_Short_v2.2.stl",
        sizeLabel: "700 KB",
      },
      {
        label: {
          de: "Download STEP",
          en: "Download STEP",
          fr: "Telecharger STEP",
          it: "Scarica STEP",
        },
        format: "step",
        path: "files/dynogrip/mini-short/DynoGrip_Mini_Short_v2.2.step",
        fileName: "DynoGrip_Mini_Short_v2.2.step",
        sizeLabel: "536 KB",
      },
    ],
    previewPath: "files/dynogrip/mini-short/DynoGrip_Mini_Short_v2.2.stl",
    featured: true,
  },
  {
    id: "dynogrip-mini-cutout",
    slug: "dynogrip-mini-cutout",
    title: {
      de: "DynoGrip Mini Cutout",
      en: "DynoGrip Mini Cutout",
      fr: "DynoGrip Mini Cutout",
      it: "DynoGrip Mini Cutout",
    },
    product: "DynoGrip",
    category: {
      de: "Grip-Einsatz",
      en: "Grip insert",
      fr: "Insert de prise",
      it: "Inserto impugnatura",
    },
    version: "v2.2",
    summary: {
      de: "Leichtere Cutout-Version für Varianten mit reduziertem Materialeinsatz und besserer Anpassbarkeit.",
      en: "Lighter cutout version for variants with reduced material use and easier customization.",
      fr: "Version plus legere avec decoupe pour des variantes avec moins de materiau et une meilleure adaptation.",
      it: "Versione cutout piu leggera per varianti con minore uso di materiale e migliore adattabilita.",
    },
    tags: {
      de: ["Leichtbau", "Cutout", "STL-Vorschau", "STEP enthalten"],
      en: ["Lightweight", "Cutout", "STL Preview", "STEP included"],
      fr: ["Leger", "Cutout", "Apercu STL", "STEP inclus"],
      it: ["Leggero", "Cutout", "Anteprima STL", "STEP incluso"],
    },
    materials: {
      de: ["PETG", "HT PLA GF", "ASA"],
      en: ["PETG", "HT PLA GF", "ASA"],
      fr: ["PETG", "HT PLA GF", "ASA"],
      it: ["PETG", "HT PLA GF", "ASA"],
    },
    printNotes: {
      de: [
        "Support nur aktivieren, wenn im Slicer hängende Innenbereiche problematisch werden.",
        "Mit 25 bis 35 Prozent Gyroid-Infill entsteht ein guter Mix aus Gewicht und Stabilität.",
        "Für Außenteile im Warmen ist ASA eine gute Option.",
      ],
      en: [
        "Only enable support if hanging inner areas become problematic in the slicer.",
        "A 25 to 35 percent gyroid infill gives a good balance of weight and stability.",
        "ASA is a good option for warm outdoor use.",
      ],
      fr: [
        "Activez les supports uniquement si les zones interieures suspendues posent probleme dans le slicer.",
        "Un remplissage gyroid de 25 a 35 pour cent offre un bon equilibre entre poids et stabilite.",
        "L'ASA est une bonne option pour les pieces exterieures en environnement chaud.",
      ],
      it: [
        "Attiva i supporti solo se le aree interne sospese diventano problematiche nello slicer.",
        "Un infill gyroid dal 25 al 35 percento offre un buon equilibrio tra peso e stabilita.",
        "L'ASA e una buona opzione per parti esterne in ambienti caldi.",
      ],
    },
    infoNotes: {
      de: [
        "Die offene Geometrie ist praktisch für schnellere Druckzeiten.",
        "Gut geeignet für weitere Leichtbau-Iterationen direkt im STEP.",
      ],
      en: [
        "The open geometry is practical for faster print times.",
        "Well suited for further lightweight iterations directly in STEP.",
      ],
      fr: [
        "La geometrie ouverte est pratique pour reduire le temps d'impression.",
        "Convient bien pour d'autres iterations legeres directement dans le STEP.",
      ],
      it: [
        "La geometria aperta e pratica per ridurre i tempi di stampa.",
        "Adatto per ulteriori iterazioni leggere direttamente nel file STEP.",
      ],
    },
    files: [
      {
        label: {
          de: "Download STL",
          en: "Download STL",
          fr: "Telecharger STL",
          it: "Scarica STL",
        },
        format: "stl",
        path: "files/dynogrip/mini-cutout/DynoGrip_Mini_Cutout_v2.2.stl",
        fileName: "DynoGrip_Mini_Cutout_v2.2.stl",
        sizeLabel: "743 KB",
      },
      {
        label: {
          de: "Download STEP",
          en: "Download STEP",
          fr: "Telecharger STEP",
          it: "Scarica STEP",
        },
        format: "step",
        path: "files/dynogrip/mini-cutout/DynoGrip_Mini_Cutout_v2.2.step",
        fileName: "DynoGrip_Mini_Cutout_v2.2.step",
        sizeLabel: "573 KB",
      },
    ],
    previewPath: "files/dynogrip/mini-cutout/DynoGrip_Mini_Cutout_v2.2.stl",
  },
  {
    id: "dynopull-assembly",
    slug: "dynopull-assembly",
    title: {
      de: "DynoPull Assembly",
      en: "DynoPull Assembly",
      fr: "Assemblage DynoPull",
      it: "Assemblaggio DynoPull",
    },
    product: "DynoPull",
    category: {
      de: "Baugruppe",
      en: "Assembly",
      fr: "Assemblage",
      it: "Assemblaggio",
    },
    version: "v1",
    summary: {
      de: "STEP-Assembly als Basis für Anpassungen an Gesamtform, Befestigung und Integration in eigene Setups.",
      en: "STEP assembly as a base for adjustments to overall form, mounting and integration into custom setups.",
      fr: "Assemblage STEP comme base pour ajuster la forme generale, la fixation et l'integration dans vos propres configurations.",
      it: "Assemblaggio STEP come base per modificare forma generale, fissaggio e integrazione in configurazioni personalizzate.",
    },
    tags: {
      de: ["Nur STEP", "Baugruppe", "Gehäuse"],
      en: ["STEP only", "Assembly", "Housing"],
      fr: ["STEP uniquement", "Assemblage", "Boitier"],
      it: ["Solo STEP", "Assemblaggio", "Alloggiamento"],
    },
    materials: {
      de: ["CAD-Referenz"],
      en: ["CAD reference"],
      fr: ["Reference CAD"],
      it: ["Riferimento CAD"],
    },
    printNotes: {
      de: [
        "Kein STL im Paket, daher keine direkte Druckfreigabe aus dieser Ansicht.",
        "Für den Druck bitte zuerst benötigte Einzelteile oder abgeleitete STL-Dateien exportieren.",
      ],
      en: [
        "No STL is included, so this view is not intended for direct printing.",
        "For printing, first export the required individual parts or derived STL files.",
      ],
      fr: [
        "Aucun STL n'est inclus, cette vue n'est donc pas destinee a l'impression directe.",
        "Pour l'impression, exportez d'abord les pieces necessaires ou des fichiers STL derives.",
      ],
      it: [
        "Non e incluso alcun STL, quindi questa vista non e destinata alla stampa diretta.",
        "Per la stampa, esporta prima le singole parti necessarie o file STL derivati.",
      ],
    },
    infoNotes: {
      de: [
        "Diese Datei ist primär für Konstruktion und Weiterentwicklung gedacht.",
        "Ideal für eigene Halterungen, Integration oder Studien am Gesamtsystem.",
      ],
      en: [
        "This file is primarily intended for design work and further development.",
        "Ideal for custom mounts, integration work or studies of the complete system.",
      ],
      fr: [
        "Ce fichier est principalement destine a la conception et au developpement ulterieur.",
        "Ideal pour des supports personnalises, l'integration ou l'etude du systeme complet.",
      ],
      it: [
        "Questo file e pensato principalmente per progettazione e sviluppo ulteriore.",
        "Ideale per supporti personalizzati, integrazione o studio del sistema completo.",
      ],
    },
    files: [
      {
        label: {
          de: "Download STEP",
          en: "Download STEP",
          fr: "Telecharger STEP",
          it: "Scarica STEP",
        },
        format: "step",
        path: "files/dynopull/assembly/DynoPull_Assembly_v1.step",
        fileName: "DynoPull_Assembly_v1.step",
        sizeLabel: "601 KB",
      },
    ],
    featured: true,
  },
  {
    id: "dynopull-housing-prototype",
    slug: "dynopull-housing-prototype",
    title: {
      de: "DynoPull Housing Prototype",
      en: "DynoPull Housing Prototype",
      fr: "Prototype de boîtier DynoPull",
      it: "Prototipo alloggiamento DynoPull",
    },
    product: "DynoPull",
    category: {
      de: "Gehäuse",
      en: "Enclosure",
      fr: "Boitier",
      it: "Alloggiamento",
    },
    version: "v1",
    summary: {
      de: "Prototypisches Gehäuse-Set für schnelle Tests mit Hauptkörper und Deckel als STL.",
      en: "Prototype enclosure set for quick tests with body and lid as STL files.",
      fr: "Jeu de boîtier prototype pour des tests rapides avec corps principal et couvercle en STL.",
      it: "Set prototipale di alloggiamento per test rapidi con corpo principale e coperchio in STL.",
    },
    tags: {
      de: ["Prototyp", "STL-Vorschau", "Zweiteilig"],
      en: ["Prototype", "STL Preview", "Two parts"],
      fr: ["Prototype", "Apercu STL", "Deux pieces"],
      it: ["Prototipo", "Anteprima STL", "Due parti"],
    },
    materials: {
      de: ["PETG", "ABS", "HT PLA GF"],
      en: ["PETG", "ABS", "HT PLA GF"],
      fr: ["PETG", "ABS", "HT PLA GF"],
      it: ["PETG", "ABS", "HT PLA GF"],
    },
    printNotes: {
      de: [
        "Hauptteil und Deckel sollten mit 4 bis 5 Perimetern gedruckt werden.",
        "PETG ist für Prototypen ein guter Standard wegen Schlagzähigkeit und einfacher Verarbeitung.",
        "Bei passungsrelevanten Bereichen zuerst einen verkleinerten Testdruck fahren.",
      ],
      en: [
        "Body and lid should be printed with 4 to 5 perimeters.",
        "PETG is a solid standard for prototypes because of impact resistance and easy processing.",
        "For fit-critical areas, start with a smaller test print first.",
      ],
      fr: [
        "Le corps principal et le couvercle devraient etre imprimes avec 4 a 5 perimetres.",
        "Le PETG est une bonne reference pour les prototypes grace a sa resistance aux chocs et sa mise en oeuvre simple.",
        "Pour les zones critiques d'ajustement, commencez par un petit tirage de test.",
      ],
      it: [
        "Corpo principale e coperchio dovrebbero essere stampati con 4 o 5 perimetri.",
        "Il PETG e un buon standard per prototipi grazie alla resistenza agli urti e alla facilità di lavorazione.",
        "Per le aree critiche di accoppiamento, esegui prima una stampa di prova ridotta.",
      ],
    },
    infoNotes: {
      de: [
        "Das Set enthält Hauptgehäuse und Deckel als getrennte STL-Dateien.",
        "Gut für schnelle Funktionsmuster vor finalen CAD-Änderungen.",
      ],
      en: [
        "The set includes body and lid as separate STL files.",
        "Well suited for fast functional prototypes before final CAD changes.",
      ],
      fr: [
        "Le set comprend le corps principal et le couvercle comme fichiers STL separes.",
        "Convient bien aux prototypes fonctionnels rapides avant les modifications CAD finales.",
      ],
      it: [
        "Il set include corpo principale e coperchio come file STL separati.",
        "Adatto a prototipi funzionali rapidi prima delle modifiche CAD finali.",
      ],
    },
    files: [
      {
        label: {
          de: "Download Body STL",
          en: "Download body STL",
          fr: "Telecharger STL du corps",
          it: "Scarica STL corpo",
        },
        format: "stl",
        path: "files/dynopull/housing-prototype/DynoPull_Housing_Prototype_v1.stl",
        fileName: "DynoPull_Housing_Prototype_v1.stl",
        sizeLabel: "1002 KB",
      },
      {
        label: {
          de: "Download Lid STL",
          en: "Download lid STL",
          fr: "Telecharger STL du couvercle",
          it: "Scarica STL coperchio",
        },
        format: "stl",
        path: "files/dynopull/housing-prototype/DynoPull_Housing_Lid_Prototype_v1.2.stl",
        fileName: "DynoPull_Housing_Lid_Prototype_v1.2.stl",
        sizeLabel: "923 KB",
      },
    ],
    previewPath: "files/dynopull/housing-prototype/DynoPull_Housing_Prototype_v1.stl",
  },
  {
    id: "dynogrip-main-grip",
    slug: "dynogrip-main-grip",
    title: {
      de: "DynoGrip Main Grip",
      en: "DynoGrip Main Grip",
      fr: "Poignee principale DynoGrip",
      it: "Impugnatura principale DynoGrip",
    },
    product: "DynoGrip",
    category: {
      de: "Grifffläche",
      en: "Grip surface",
      fr: "Surface de prise",
      it: "Superficie di presa",
    },
    version: "v2.1",
    summary: {
      de: "Hauptgriff für das DynoGrip-System mit direkter STL-Vorschau für die Formkontrolle vor dem Druck.",
      en: "Main grip for the DynoGrip system with direct STL preview for shape inspection before printing.",
      fr: "Poignee principale pour le systeme DynoGrip avec apercu STL direct pour verifier la forme avant impression.",
      it: "Impugnatura principale per il sistema DynoGrip con anteprima STL diretta per controllare la forma prima della stampa.",
    },
    tags: {
      de: ["STL-Vorschau", "Hauptgriff", "Druckbar"],
      en: ["STL Preview", "Primary grip", "Printable"],
      fr: ["Apercu STL", "Poignee principale", "Imprimable"],
      it: ["Anteprima STL", "Impugnatura principale", "Stampabile"],
    },
    materials: {
      de: ["PETG", "PA12", "HT PLA GF"],
      en: ["PETG", "PA12", "HT PLA GF"],
      fr: ["PETG", "PA12", "HT PLA GF"],
      it: ["PETG", "PA12", "HT PLA GF"],
    },
    printNotes: {
      de: [
        "Bei funktionalen Griffflächen eher feinere Layerhöhen verwenden.",
        "Für hohe Lasten die Ausrichtung so wählen, dass kritische Kanten nicht quer zur Layer-Richtung belastet werden.",
      ],
      en: [
        "For functional grip surfaces, prefer finer layer heights.",
        "For high loads, orient the part so critical edges are not stressed across the layer direction.",
      ],
      fr: [
        "Pour les surfaces de prise fonctionnelles, preferez des hauteurs de couche plus fines.",
        "Pour les charges elevees, orientez la piece afin que les aretes critiques ne soient pas sollicitees perpendiculairement aux couches.",
      ],
      it: [
        "Per superfici di presa funzionali, preferisci altezze layer piu fini.",
        "Per carichi elevati, orienta il pezzo in modo che i bordi critici non siano sollecitati trasversalmente ai layer.",
      ],
    },
    infoNotes: {
      de: [
        "Wenn später noch Konstruktionseingriffe geplant sind, empfiehlt sich eine zusätzliche STEP-Ableitung im CAD.",
      ],
      en: [
        "If further design work is planned later, an additional STEP derivation in CAD is recommended.",
      ],
      fr: [
        "Si d'autres modifications de conception sont prevues, il est recommande de creer une derivee STEP supplementaire dans le CAD.",
      ],
      it: [
        "Se sono previste ulteriori modifiche di progetto, si consiglia una derivazione STEP aggiuntiva nel CAD.",
      ],
    },
    files: [
      {
        label: {
          de: "Download STL",
          en: "Download STL",
          fr: "Telecharger STL",
          it: "Scarica STL",
        },
        format: "stl",
        path: "files/dynogrip/main-grip/DynoGrip_Main_Grip_v2.1.stl",
        fileName: "DynoGrip_Main_Grip_v2.1.stl",
        sizeLabel: "1030 KB",
      },
    ],
    previewPath: "files/dynogrip/main-grip/DynoGrip_Main_Grip_v2.1.stl",
  },
  {
    id: "dynogrip-cover",
    slug: "dynogrip-cover",
    title: {
      de: "DynoGrip Cover",
      en: "DynoGrip Cover",
      fr: "Couvercle DynoGrip",
      it: "Coperchio DynoGrip",
    },
    product: "DynoGrip",
    category: {
      de: "Gehäuse",
      en: "Enclosure",
      fr: "Boitier",
      it: "Alloggiamento",
    },
    version: "v1",
    summary: {
      de: "Deckel-Komponente als STEP-Datei für Passungsanpassungen, Ausschnitte und Montagevarianten.",
      en: "Cover component as STEP file for fit adjustments, cutouts and mounting variants.",
      fr: "Composant de couvercle en fichier STEP pour les ajustements d'assemblage, les decoupes et les variantes de montage.",
      it: "Componente coperchio come file STEP per regolazioni di accoppiamento, aperture e varianti di montaggio.",
    },
    tags: {
      de: ["Nur STEP", "Cover", "CAD bearbeitbar"],
      en: ["STEP only", "Cover", "CAD editable"],
      fr: ["STEP uniquement", "Couvercle", "Modifiable en CAD"],
      it: ["Solo STEP", "Coperchio", "Modificabile in CAD"],
    },
    materials: {
      de: ["CAD-Referenz"],
      en: ["CAD reference"],
      fr: ["Reference CAD"],
      it: ["Riferimento CAD"],
    },
    printNotes: {
      de: [
        "Vor dem Export in STL zuerst Toleranzen und Schraubpunkte im CAD prüfen.",
      ],
      en: [
        "Before exporting to STL, first verify tolerances and screw points in CAD.",
      ],
      fr: [
        "Avant l'export STL, verifiez d'abord les tolerances et les points de vissage dans le CAD.",
      ],
      it: [
        "Prima di esportare in STL, verifica tolleranze e punti vite nel CAD.",
      ],
    },
    infoNotes: {
      de: [
        "Sinnvoll für alle, die Gehäuseänderungen direkt im CAD vornehmen wollen.",
      ],
      en: [
        "Useful for anyone who wants to make enclosure changes directly in CAD.",
      ],
      fr: [
        "Utile pour toute personne souhaitant modifier directement le boîtier dans le CAD.",
      ],
      it: [
        "Utile per chi desidera apportare modifiche all'alloggiamento direttamente nel CAD.",
      ],
    },
    files: [
      {
        label: {
          de: "Download STEP",
          en: "Download STEP",
          fr: "Telecharger STEP",
          it: "Scarica STEP",
        },
        format: "step",
        path: "files/dynogrip/cover/DynoGrip_Cover_v1.step",
        fileName: "DynoGrip_Cover_v1.step",
        sizeLabel: "47 KB",
      },
    ],
  },
  {
    id: "triaforce-attachment",
    slug: "triaforce-attachment",
    title: {
      de: "TriaForce Attachment",
      en: "TriaForce Attachment",
      fr: "Accessoire TriaForce",
      it: "Accessorio TriaForce",
    },
    product: "Attachments",
    category: {
      de: "Attachment",
      en: "Attachment",
      fr: "Accessoire",
      it: "Accessorio",
    },
    version: "v1",
    summary: {
      de: "Zusätzliches Attachment für Experimente und Erweiterungen rund um das DynoForce-System.",
      en: "Additional attachment for experiments and extensions around the DynoForce system.",
      fr: "Accessoire supplementaire pour des experimentations et extensions autour du systeme DynoForce.",
      it: "Accessorio aggiuntivo per esperimenti ed estensioni attorno al sistema DynoForce.",
    },
    tags: {
      de: ["Attachment", "STL-Vorschau", "Zubehör"],
      en: ["Attachment", "STL Preview", "Accessory"],
      fr: ["Accessoire", "Apercu STL", "Accessoire"],
      it: ["Accessorio", "Anteprima STL", "Accessorio"],
    },
    materials: {
      de: ["PETG", "Nylon", "HT PLA GF"],
      en: ["PETG", "Nylon", "HT PLA GF"],
      fr: ["PETG", "Nylon", "HT PLA GF"],
      it: ["PETG", "Nylon", "HT PLA GF"],
    },
    printNotes: {
      de: [
        "Bei Zubehörteilen mit Krafteinleitung eher zähe Materialien wählen.",
        "Kritische Belastungspunkte nach dem Druck visuell auf Layertrennung prüfen.",
      ],
      en: [
        "For accessories that transmit force, prefer tougher materials.",
        "After printing, visually inspect critical load points for layer separation.",
      ],
      fr: [
        "Pour les accessoires soumis a des efforts, preferez des materiaux plus tenaces.",
        "Apres l'impression, controlez visuellement les points de charge critiques pour detecter une separation des couches.",
      ],
      it: [
        "Per accessori soggetti a carichi, preferisci materiali piu tenaci.",
        "Dopo la stampa, controlla visivamente i punti di carico critici per individuare eventuali separazioni tra layer.",
      ],
    },
    infoNotes: {
      de: [
        "Ein guter Kandidat für Community-Remixes und Setups ausserhalb des Standardgeräts.",
      ],
      en: [
        "A strong candidate for community remixes and setups beyond the standard device.",
      ],
      fr: [
        "Un bon candidat pour des remixes communautaires et des configurations au-dela de l'appareil standard.",
      ],
      it: [
        "Un buon candidato per remix della community e configurazioni oltre il dispositivo standard.",
      ],
    },
    files: [
      {
        label: {
          de: "Download STL",
          en: "Download STL",
          fr: "Telecharger STL",
          it: "Scarica STL",
        },
        format: "stl",
        path: "files/attachments/triaforce/TriaForce_Attachment_v1.stl",
        fileName: "TriaForce_Attachment_v1.stl",
        sizeLabel: "2.8 MB",
      },
    ],
    previewPath: "files/attachments/triaforce/TriaForce_Attachment_v1.stl",
  },
];
