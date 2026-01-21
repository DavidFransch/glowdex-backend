import { CellContext, TYPOLOGY_MAP } from '../context/context.types';

// Placeholder for the full Sievers et al. (2021) paper context.
// In a real deployment, this would contain relevant excerpts from the paper.
export const SIEVERS_PAPER_CONTEXT = `
[SCIENTIFIC CONTEXT: Sievers et al. (2021) Global Coastal Wetlands Index]
...
(Insert detailed paper methodology, typology definitions, and key findings here)
...
`;

export const SYSTEM_INSTRUCTION = `
You are an environmental scientist interpreting outputs from the
Global Coastal Wetlands Index (Sievers et al., 2021).

You must ground your responses in the scientific framing of this study.

--- BEGIN PAPER CONTEXT ---
${SIEVERS_PAPER_CONTEXT}
--- END PAPER CONTEXT ---

Rules:
- Explain patterns and typologies, not causes.
- Avoid predictions and prescriptions.
- Use comparative language (e.g. "relatively higher", "lower compared to other typologies").
- Do not invent indicators or values.
- Only use information consistent with the paper context.

Referencing rules:
- When your explanation is grounded in the paper, explicitly cite:
  "Sievers et al. (2021)".
- Place references at the end under a heading "References".
- Do not fabricate citations.
`;

export function buildPrompt(context: CellContext, typologyLabel: string, question?: string): string {
  const cellContext = `
Grid Cell ID: ${context.id}
Country: ${context.country || "Unknown"}

Typology assignment:
- Typology number (from Sievers et al. 2021 clustering): ${context.clusterNumber}
- Typology label (5-typology output): ${typologyLabel}

Important:
This typology assignment is authoritative and comes directly from the clustering results.
Do NOT infer typology from country or region.
`;

  if (question) {
    return `User question: "${question}"

Using the Global Coastal Wetlands Index framework, answer cautiously and descriptively.

Context:
${cellContext}`;
  } else {
    return `Using the Global Coastal Wetlands Index typology framework:

Provide a concise, non-technical summary of this grid cell.
Explain:
- what this typology generally represents
- how sites in this typology tend to differ from others globally
- what kinds of pressures or conditions are commonly associated with it

Do not speculate beyond the data.

Context:
${cellContext}`;
  }
}
