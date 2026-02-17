const fs = require('fs');
const skip = new Set(['871 games loaded!', 'starred games', 'top games', 'all games', 'games loading..', 'nothing was found! try a new search query.', '']);
const theirRaw = fs.readFileSync('selenite-cc-games.txt', 'utf8').split('\n').map(s => s.trim()).filter(s => s && !skip.has(s));
const theirs = new Set(theirRaw.map(n => n.toLowerCase()));
const ours = JSON.parse(fs.readFileSync('data/games.json','utf8'));
const ourNames = new Set(ours.map(g => g.name.toLowerCase()));

function normalize(s) {
  return s.toLowerCase()
    .replace(/\s*&\s*/g, ' and ')
    .replace(/\s+/g, ' ')
    .replace(/['']/g, "'")
    .trim();
}
const ourNormalized = new Map();
ours.forEach(g => { ourNormalized.set(normalize(g.name), g.name); });

const onlyOnSelenite = theirRaw.filter(name => {
  const n = normalize(name);
  if (ourNames.has(name.toLowerCase())) return false;
  if (ourNormalized.has(n)) return false;
  return true;
});

console.log('Selenite.cc games:', theirs.size);
console.log('Our games:', ourNames.size);
console.log('\nGames on selenite.cc that we DO NOT have (' + onlyOnSelenite.length + '):');
onlyOnSelenite.sort().forEach(g => console.log('  -', g));
