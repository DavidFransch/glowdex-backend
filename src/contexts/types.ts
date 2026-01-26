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

// Partial labels derived from Sievers et al. (2021) case studies.
export const TYPOLOGY_18_LABELS: Record<number, string> = {
  4: "High Acceleration of Climate Impacts",
  8: "High Biodiversity Refuges",
  11: "Saltmarsh Refuges (Low Climate Accel.)",
  12: "High Marine Impacts (Seagrass)",
};



