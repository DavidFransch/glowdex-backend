export interface CellContext {
  id: number;
  country: string;
  clusterNumber: number;
  // Additional scientific metadata can be added here
}

export const TYPOLOGY_MAP: Record<number, string> = {
  1: "Catchall",
  2: "High Land/Marine Impacts",
  3: "High Climate Impacts",
  4: "Mixed Impacts / Low AGB",
  5: "Refuges",
};
