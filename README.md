# Riverbraid Integrity Floors
## The Stationary State Standard

This repository defines the fundamental floors required for a node to be considered "Braided."

### 1. NICB (Network Integrity Command Block)
- **Invariant:** Every command must be atomic and stateless.
- **Verification:** Spatial integrity check (filesystem hash) must precede execution.

### 2. CLF (Coherent Ledger Floor)
- **Invariant:** Persistence must be fail-closed.
- **Verification:** Binary checksum verification of local storage on every write.

### 3. Stationary State Invariant
- A system is stationary when the delta between the desired state (git) and the actual state (disk) is zero.
