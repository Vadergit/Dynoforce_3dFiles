export type Language = "de" | "en" | "fr" | "it";

export type LocalizedText = Record<Language, string>;
export type LocalizedTextList = Record<Language, string[]>;

export type ModelFormat = "stl" | "stp";
export type ProductFamily = "All" | "DynoGrip";

export interface ModelFile {
  label: LocalizedText;
  format: ModelFormat;
  path: string;
  fileName: string;
  sizeLabel: string;
}

export interface ModelEntry {
  id: string;
  slug: string;
  title: LocalizedText;
  product: Exclude<ProductFamily, "All">;
  category: LocalizedText;
  version: string;
  summary: LocalizedText;
  tags: LocalizedTextList;
  materials: LocalizedTextList;
  printNotes: LocalizedTextList;
  infoNotes: LocalizedTextList;
  files: ModelFile[];
  previewPath?: string;
  featured?: boolean;
}
