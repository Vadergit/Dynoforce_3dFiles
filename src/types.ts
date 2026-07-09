export type ModelFormat = "stl" | "step";
export type ProductFamily = "All" | "DynoGrip" | "DynoPull" | "Attachments";

export interface ModelFile {
  label: string;
  format: ModelFormat;
  path: string;
  fileName: string;
  sizeLabel: string;
}

export interface ModelEntry {
  id: string;
  slug: string;
  title: string;
  product: Exclude<ProductFamily, "All">;
  category: string;
  version: string;
  summary: string;
  tags: string[];
  materials: string[];
  printNotes: string[];
  infoNotes: string[];
  files: ModelFile[];
  previewPath?: string;
  featured?: boolean;
}
