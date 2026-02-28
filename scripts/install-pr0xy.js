#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const pr0xyDir = path.join(__dirname, '..', 'pr0xy');
const pkg = path.join(pr0xyDir, 'package.json');

if (!fs.existsSync(pkg)) {
  console.log('pr0xy not found, skipping');
  process.exit(0);
}

console.log('Installing and building pr0xy (Unblocker)...');
const opts = { cwd: pr0xyDir, stdio: 'inherit', shell: true };

let r = spawnSync('npm', ['install', '--omit=dev'], opts);
if (r.status !== 0) process.exit(r.status || 1);

r = spawnSync('npm', ['run', 'build'], opts);
if (r.status !== 0) process.exit(r.status || 1);

console.log('pr0xy ready.');
