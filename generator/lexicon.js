
const toTone = require('../../tone-script')
const toCall = require('../../call-script')
const fs = require('fs')

const template = fs.readFileSync('generator/lexicon.template.html', 'utf-8')

fs.readdirSync('lexicon')
  .filter(x => x.match(/\.csv$/))
  .map(x => {
    return {
      name: x.replace(/\.csv$/, ''),
      lines: fs.readFileSync(`lexicon/${x}`, 'utf-8').split(/\n+/)
        .filter(x => x)
    }
  })
  .map(({ name, lines }) => {
    const json = lines.map(line => {
      let [native1, native2, pronunciation] = line.split(',')
      if (!pronunciation) {
        pronunciation = native2
        console.log(pronunciation)
        const call = pronunciation.split(/\s+/).map(toCall).join(' ')
        const tone = pronunciation.split(/\s+/).map(toTone).join(' ')
        return { native1, pronunciation, call, tone }
      } else {
        const call = pronunciation.split(/\s+/).map(toCall).join(' ')
        const tone = pronunciation.split(/\s+/).map(toTone).join(' ')
        return { native1, native2, pronunciation, call, tone }
      }
    })

    const html = template.replace(/\{TABLE\}/, JSON.stringify(json))
    fs.writeFileSync(`lexicon/${name}.html`, html)
  })
