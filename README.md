# ControlSense AI

**ControlSense AI** is a local-first educational app for classical control theory, modern robotic control, embodied AI, Physical AI and reinforcement learning. It is designed for non-engineering learners using everyday examples, interactive simulations, mini-tests and a bounded local tutor called **LoopCoach**.

> Control theory for the age of Physical AI.

## What this MVP includes

- Guided lessons on feedback, PID, Model Predictive Control, reinforcement learning, embodied AI and human-in-the-loop rehabilitation robotics
- Interactive browser-based simulations:
  - Shower feedback control
  - Drone altitude PID
  - Reinforcement-learning dog trainer
  - Robot grip force control
- Local-first progress tracking using browser storage
- Offline PWA support through a service worker
- Rule-based local LoopCoach tutor grounded in built-in curriculum content
- Dependency-free build and test scripts for quick validation

## Why local-first

The product is designed to work without accounts or cloud connectivity. Learner progress stays on the device by default, which supports classrooms, professional training, sensitive healthcare/robotics education and low-connectivity environments.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by the dev server, usually:

```text
http://localhost:5173
```

No third-party packages are required for the current MVP.

## Build

```bash
npm run build
```

The static app is written to `dist/`.

## Test

```bash
npm test
```

Tests cover the curriculum, tutor responses and simulation safety bounds.

## Suggested desktop packaging path

The current MVP is a local-first static app that can be wrapped later in Tauri for macOS, Windows and Linux desktop distribution.

Recommended next step:

```text
React / TypeScript frontend → Tauri shell → Rust commands → SQLite local store → optional local LLM via Ollama, llama.cpp or MLX
```

## Product roadmap

1. Expand from 6 MVP lessons to 25 structured lessons.
2. Add richer Canvas/WebGL simulations for balancing robots, walking robots and robot arms.
3. Replace rule-based LoopCoach with a local retrieval-augmented tutor.
4. Add SQLite or IndexedDB learning records with confidence calibration.
5. Add macOS, Windows and Linux desktop installers through Tauri.
6. Add professional tracks for rehabilitation robotics, business leaders and robotics safety.

## Educational thesis

A robot is not a brain on legs. It is a loop between sensing, deciding, acting and correcting.

Classical control keeps systems stable. Modern control helps robots plan under constraints. Reinforcement learning helps robots improve from feedback. Embodied AI gives robots perception and context. Physical AI connects all of this to real-world action.
