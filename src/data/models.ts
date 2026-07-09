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
    title: "DynoGrip Mini Short",
    product: "DynoGrip",
    category: "Grip insert",
    version: "v2.2",
    summary:
      "Kompakte DynoGrip-Griffvariante mit STL für den Direktdruck und STEP für Anpassungen im CAD.",
    tags: ["STL Preview", "STEP included", "Compact", "Grip"],
    materials: ["PETG", "PA12", "HT PLA GF"],
    printNotes: [
      "0.2 mm Layerhöhe funktioniert gut für einen sauberen ersten Prototyp.",
      "Mindestens 4 Perimeter empfohlen, damit die Griffkante robust bleibt.",
      "Bei hoher Belastung PETG, PA12 oder HT PLA GF statt sprödem PLA bevorzugen.",
    ],
    infoNotes: [
      "Geeignet als Ausgangsbasis für kürzere oder leichtere Griffvarianten.",
      "STEP-Datei ist ideal, wenn Bohrungen oder Radien angepasst werden sollen.",
    ],
    files: [
      {
        label: "Download STL",
        format: "stl",
        path: "files/dynogrip/mini-short/DynoGrip_Mini_Short_v2.2.stl",
        fileName: "DynoGrip_Mini_Short_v2.2.stl",
        sizeLabel: "700 KB",
      },
      {
        label: "Download STEP",
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
    title: "DynoGrip Mini Cutout",
    product: "DynoGrip",
    category: "Grip insert",
    version: "v2.2",
    summary:
      "Leichtere Cutout-Version für Varianten mit reduziertem Materialeinsatz und besserer Anpassbarkeit.",
    tags: ["Lightweight", "Cutout", "STL Preview", "STEP included"],
    materials: ["PETG", "HT PLA GF", "ASA"],
    printNotes: [
      "Support nur aktivieren, wenn im Slicer hängende Innenbereiche problematisch werden.",
      "Mit 25 bis 35 Prozent Gyroid-Infill entsteht ein guter Mix aus Gewicht und Stabilität.",
      "Für Außenteile im Warmen ist ASA eine gute Option.",
    ],
    infoNotes: [
      "Die offene Geometrie ist praktisch für schnellere Druckzeiten.",
      "Gut geeignet für weitere Leichtbau-Iterationen direkt im STEP.",
    ],
    files: [
      {
        label: "Download STL",
        format: "stl",
        path: "files/dynogrip/mini-cutout/DynoGrip_Mini_Cutout_v2.2.stl",
        fileName: "DynoGrip_Mini_Cutout_v2.2.stl",
        sizeLabel: "743 KB",
      },
      {
        label: "Download STEP",
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
    title: "DynoPull Assembly",
    product: "DynoPull",
    category: "Assembly",
    version: "v1",
    summary:
      "STEP-Assembly als Basis für Anpassungen an Gesamtform, Befestigung und Integration in eigene Setups.",
    tags: ["STEP only", "Assembly", "Device housing"],
    materials: ["CAD reference"],
    printNotes: [
      "Kein STL im Paket, daher keine direkte Druckfreigabe aus dieser Ansicht.",
      "Für den Druck bitte zuerst benötigte Einzelteile oder abgeleitete STL-Dateien exportieren.",
    ],
    infoNotes: [
      "Diese Datei ist primär für Konstruktion und Weiterentwicklung gedacht.",
      "Ideal für eigene Halterungen, Integration oder Studien am Gesamtsystem.",
    ],
    files: [
      {
        label: "Download STEP",
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
    title: "DynoPull Housing Prototype",
    product: "DynoPull",
    category: "Enclosure",
    version: "v1",
    summary:
      "Prototypisches Gehäuse-Set für schnelle Tests mit Hauptkörper und Deckel als STL.",
    tags: ["Prototype", "STL Preview", "Two parts"],
    materials: ["PETG", "ABS", "HT PLA GF"],
    printNotes: [
      "Hauptteil und Deckel sollten mit 4 bis 5 Perimetern gedruckt werden.",
      "PETG ist für Prototypen ein guter Standard wegen Schlagzähigkeit und einfacher Verarbeitung.",
      "Bei passungsrelevanten Bereichen zuerst einen verkleinerten Testdruck fahren.",
    ],
    infoNotes: [
      "Das Set enthält Hauptgehäuse und Deckel als getrennte STL-Dateien.",
      "Gut für schnelle Funktionsmuster vor finalen CAD-Änderungen.",
    ],
    files: [
      {
        label: "Download Body STL",
        format: "stl",
        path: "files/dynopull/housing-prototype/DynoPull_Housing_Prototype_v1.stl",
        fileName: "DynoPull_Housing_Prototype_v1.stl",
        sizeLabel: "1002 KB",
      },
      {
        label: "Download Lid STL",
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
    title: "DynoGrip Main Grip",
    product: "DynoGrip",
    category: "Grip surface",
    version: "v2.1",
    summary:
      "Hauptgriff für das DynoGrip-System mit direkter STL-Vorschau für die Formkontrolle vor dem Druck.",
    tags: ["STL Preview", "Primary grip", "Printable"],
    materials: ["PETG", "PA12", "HT PLA GF"],
    printNotes: [
      "Bei funktionalen Griffflächen eher feinere Layerhöhen verwenden.",
      "Für hohe Lasten die Ausrichtung so wählen, dass kritische Kanten nicht quer zur Layer-Richtung belastet werden.",
    ],
    infoNotes: [
      "Wenn später noch Konstruktionseingriffe geplant sind, empfiehlt sich eine zusätzliche STEP-Ableitung im CAD.",
    ],
    files: [
      {
        label: "Download STL",
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
    title: "DynoGrip Cover",
    product: "DynoGrip",
    category: "Enclosure",
    version: "v1",
    summary:
      "Deckel-Komponente als STEP-Datei für Passungsanpassungen, Ausschnitte und Montagevarianten.",
    tags: ["STEP only", "Cover", "CAD editable"],
    materials: ["CAD reference"],
    printNotes: [
      "Vor dem Export in STL zuerst Toleranzen und Schraubpunkte im CAD prüfen.",
    ],
    infoNotes: [
      "Sinnvoll für alle, die Gehäuseänderungen direkt im CAD vornehmen wollen.",
    ],
    files: [
      {
        label: "Download STEP",
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
    title: "TriaForce Attachment",
    product: "Attachments",
    category: "Attachment",
    version: "v1",
    summary:
      "Zusätzliches Attachment für Experimente und Erweiterungen rund um das DynoForce-System.",
    tags: ["Attachment", "STL Preview", "Accessory"],
    materials: ["PETG", "Nylon", "HT PLA GF"],
    printNotes: [
      "Bei Zubehörteilen mit Krafteinleitung eher zähe Materialien wählen.",
      "Kritische Belastungspunkte nach dem Druck visuell auf Layertrennung pruefen.",
    ],
    infoNotes: [
      "Ein guter Kandidat für Community-Remixes und Setups außerhalb des Standardgeräts.",
    ],
    files: [
      {
        label: "Download STL",
        format: "stl",
        path: "files/attachments/triaforce/TriaForce_Attachment_v1.stl",
        fileName: "TriaForce_Attachment_v1.stl",
        sizeLabel: "2.8 MB",
      },
    ],
    previewPath: "files/attachments/triaforce/TriaForce_Attachment_v1.stl",
  },
];
