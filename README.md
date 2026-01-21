# GLOWdex Backend Prototype

## Overview

This repository contains a **prototype backend service** for the *Global Wetlands AI Explorer (GLOWdex)*.

The service provides **AI-generated, descriptive summaries** of coastal wetland typologies derived from the peer-reviewed study:

> Sievers et al. (2021) — *Global typologies of coastal wetland status to inform conservation and management*

The purpose of this backend is to **validate a responsible architecture for AI-assisted scientific interpretation**, not to deliver a production-ready system.

---

## Purpose of This Prototype

This backend was built to explore and validate the following:

- Whether AI-generated explanations can be **strictly grounded** in a fixed scientific framework
- How **spatial data, typology assignments, and metadata** can be joined into a single interpretable context
- How **transparency and provenance** can be preserved when AI is introduced
- How to **separate frontend experimentation from backend responsibility**, including secret management
- How to enforce **hard non-goals** such as avoiding prediction, policy advice, or causal inference

This work is intentionally limited in scope and complexity.

---

## What This Prototype Does

### 1. Scientific Context Assembly

- Loads and joins two CSV datasets at startup:
  - `all-clusters.csv` — typology assignments and habitat presence
  - `grid-items.csv` — spatial and territorial metadata
- Builds an in-memory index of **2,845 grid cells** for fast lookup
- Exposes a structured **CellContext** for each grid cell, including:
  - Country and ISO code
  - 5-typology assignment (with paper-derived labels)
  - 18-typology numeric identifier
  - Habitat presence flags (mangrove, saltmarsh, seagrass)

No inference or enrichment beyond the source data is performed.

---

### 2. AI Summary Generation

- Exposes a single endpoint:  
  `POST /ai/summary`
- Accepts:
  - `gridCellId` (required)
  - `question` (optional)
- Generates **descriptive, comparative summaries** that:
  - Explain what a typology represents
  - Describe how it differs from other typologies globally
  - Use cautious, relative language

All AI output is constrained by a fixed system instruction derived from the paper.

---

### 3. Transparency and Context Inspection

Each API response includes:

- The generated summary text
- Metadata about the AI call (model, reference mode)
- The **exact scientific context** used to generate the response
- Dataset versioning information:
  - SHA-256 hash of the loaded CSV files
  - Build timestamp

This allows downstream users to verify:
- What data the AI saw
- Which dataset version was used
- Whether outputs are reproducible

---

### 4. Non-Goal Enforcement

The system explicitly forbids the AI from:

- Predicting future ecological outcomes
- Making causal claims beyond the paper
- Recommending policy or management actions
- Acting as a decision-making authority

Requests that violate these boundaries receive a **neutral refusal**, not a speculative answer.

---

## Relationship to the Frontend Prototype

The original GLOWdex frontend prototype:

- Called the Gemini API directly from the browser
- Exposed API keys
- Assembled AI context client-side
- Had no audit trail or provenance controls

This backend prototype exists to:

- Remove exposed secrets from the frontend
- Centralize scientific context assembly
- Make AI behavior inspectable and enforceable
- Create a clear boundary between experimentation and responsibility

The frontend can now be treated as a **visual and interaction layer only**.

---

## What This Prototype Does *Not* Do

This system is **not** intended to:

- Predict ecological change
- Forecast habitat loss or recovery
- Infer causality
- Recommend conservation or policy actions
- Replace scientific judgement or analysis
- Serve as an authoritative decision system

These are deliberate exclusions.

---

## API Example

### Request

```json
POST /ai/summary

{
  "gridCellId": 20117,
  "question": "Optional user question"
}
```

### Response (Success):

```json
{
  "text": "This grid cell is classified as Typology 5...",
  "meta": {
    "gridCellId": 20117,
    "model": "gemini-2.5-flash",
    "reference": "sievers-2021-only"
  },
  "context": {
    "id": 20117,
    "typologyLabel5": "Refuges",
    "typologyLabel18": "High Biodiversity Refuges",
    "datasetVersion": {
      "buildDate": "2026-01-21T09:35:27.784Z",
      "datasetHash": "de9b0a69565f7427306b48a86b54573c96784e85a0ebe9b2f74ba9b8c4ab7308"
    }
  }
}
```

### Project Structure

```bash
src/
├── context/
│   ├── context.service.ts   # CSV loading, joining, hashing
│   └── context.types.ts     # Context and typology definitions
└── ai/
    ├── ai.service.ts        # AI orchestration
    ├── ai.prompt.ts         # System instruction and grounding text
    └── dto/                 # API request/response contracts
```