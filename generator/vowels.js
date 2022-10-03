
const fs = require('fs')
const tone = require('..')

fs.writeFileSync('tmp/vowels.json', JSON.stringify(tone.VOWELS, null, 2))
