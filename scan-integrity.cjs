#!/usr/bin/env node
"use strict";

const fs = require('fs');
const path = require('path');

/**
 * Spatial Integrity Check:
 * Confirming the physical presence of the 18-node canonical floor.
 */

const MANIFEST_PATH = "C:\\Riverbraid\\Riverbraid-Manifest-Gold\\riverbraid.constellation.json";

function runSpatialAudit() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    return { status: "FAIL", error: "Manifest Gold not found." };
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  const results = {
    timestamp: new Date().toISOString(),
    tag: "Linear",
    invariant: "spatial_integrity_check",
    floor_verification: []
  };

  manifest.canonical_floor.forEach(repo => {
    const repoPath = path.join("C:\\Riverbraid", repo);
    const exists = fs.existsSync(repoPath);
    
    results.floor_verification.push({
      repo: repo,
      status: exists ? "PASS" : "FAIL (MISSING)",
      path: repoPath
    });
  });

  return results;
}

const report = runSpatialAudit();
const output = JSON.stringify(report, null, 2);
fs.writeFileSync("last-report.json", output, { encoding: "utf8" });
process.stdout.write(output + "\\n");