export interface CellContext {
  id: number;
  country: string | null;
  isoCode: string | null;
  cluster5: number;
  cluster18: number;
  typologyLabel5: string;
  typologyLabel18: string;
  habitats: {
    mangrove: boolean;
    saltmarsh: boolean;
    seagrass: boolean;
  };
  datasetVersion?: DatasetVersion;
}

export interface DatasetVersion {
  buildDate: string;
  datasetHash: string;
}

export const TYPOLOGY_5_LABELS: Record<number, string> = {
  1: "Catchall",
  2: "High Land/Marine Impacts",
  3: "High Climate Impacts",
  4: "Mixed Impacts / Low AGB",
  5: "Refuges",
};



