const fs = require('fs');

// Their format: { name, directory, image, tags? }
const theirs = JSON.parse(fs.readFileSync('selenite-cc-games.json', 'utf8'));
const ours = JSON.parse(fs.readFileSync('data/games.json', 'utf8'));

const ourNames = new Set(ours.map(g => g.name.toLowerCase().trim()));
const ourDirs = new Set(ours.map(g => (g.directory || '').toLowerCase().trim()));

function normalize(s) {
  return (s || '').toLowerCase()
    .replace(/\s*&\s*/g, ' and ')
    .replace(/\s+/g, ' ')
    .replace(/['']/g, "'")
    .trim();
}

const onlyOnSelenite = theirs.filter(g => {
  const name = (g.name || '').trim();
  const dir = (g.directory || '').toLowerCase().trim();
  if (ourNames.has(name.toLowerCase())) return false;
  if (ourDirs.has(dir)) return false;
  const n = normalize(name);
  for (const o of ours) {
    if (normalize(o.name) === n) return false;
  }
  return true;
});

console.log('Selenite.cc (from API):', theirs.length);
console.log('Our games:', ours.length);
console.log('\nGames on selenite.cc that we DO NOT have (' + onlyOnSelenite.length + '):\n');
onlyOnSelenite.sort((a, b) => (a.name || '').localeCompare(b.name || '')).forEach(g => {
  console.log('  ' + (g.name || '?') + '  |  dir: ' + (g.directory || '?'));
});
