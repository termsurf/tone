
const parse = require('../../pronounce.js/src/chinese-pinyin')
const fs = require('fs')

const PATH = 'lexicon/mandarin-chinese.csv'

const csv = fs.readFileSync(PATH, 'utf-8').split(/\n+/)
  .filter(x => x)
  .map(line => {
    let [chinese, pinyin] = line.split(',')
    return `${chinese},${pinyin},${parse(pinyin)}`
  })
  .join('\n')

fs.writeFileSync(PATH, csv)
