const SYMBOL = {
  '++': { tone: 'extra high' },
  '+': { tone: 'high' },
  '--': { tone: 'extra low' },
  '-': { tone: 'low' },
  '@': { tense: true },
  '.': { stop: true },
  '=.': { type: 'punctuation', value: '.' },
  '=@': { type: 'punctuation', value: '@' },
  '=?': { type: 'punctuation', value: '?' },
  '=!': { type: 'punctuation', value: '!' },
  '=+': { type: 'punctuation', value: '+' },
  '=-': { type: 'punctuation', value: '-' },
  u$: { type: 'vowel', value: 'u$' },
  o$: { type: 'vowel', value: 'o$' },
  i: { type: 'vowel', value: 'i' },
  e: { type: 'vowel', value: 'e' },
  a: { type: 'vowel', value: 'a' },
  o: { type: 'vowel', value: 'o' },
  u: { type: 'vowel', value: 'u' },
  A: { type: 'vowel', value: 'A' },
  E: { type: 'vowel', value: 'E' },
  I: { type: 'vowel', value: 'I' },
  U: { type: 'vowel', value: 'U' },
  O: { type: 'vowel', value: 'O' },
  'h!': { voicelessness: true },
  'h~': { aspiration: true },
  'w~': { labialization: true },
  'y~': { palatalization: true },
  'G~': { velarization: true },
  'Q~': { pharyngealization: true },
  'm!': { type: 'consonant', value: 'm', ejection: true },
  'n!': { type: 'consonant', value: 'n', ejection: true },
  'q!': { type: 'consonant', value: 'q', ejection: true },
  'g!': { type: 'consonant', value: 'g', ejection: true },
  'd!': { type: 'consonant', value: 'd', ejection: true },
  'b!': { type: 'consonant', value: 'b', ejection: true },
  'p!': { type: 'consonant', value: 'p', ejection: true },
  't!': { type: 'consonant', value: 't', ejection: true },
  'k!': { type: 'consonant', value: 'k', ejection: true },
  'h!': { type: 'consonant', value: 'h', ejection: true },
  's!': { type: 'consonant', value: 's', ejection: true },
  'f!': { type: 'consonant', value: 'f', ejection: true },
  'v!': { type: 'consonant', value: 'v', ejection: true },
  'z!': { type: 'consonant', value: 'z', ejection: true },
  'j!': { type: 'consonant', value: 'j', ejection: true },
  'x!': { type: 'consonant', value: 'x', ejection: true },
  'c!': { type: 'consonant', value: 'c', ejection: true },
  'C!': { type: 'consonant', value: 'C', ejection: true },
  'y!': { type: 'consonant', value: 'y', ejection: true },
  'w!': { type: 'consonant', value: 'w', ejection: true },
  'Q!': { type: 'consonant', value: 'Q', ejection: true },
  'l!': { type: 'consonant', value: 'l', ejection: true },
  'r!': { type: 'consonant', value: 'r', ejection: true },

  m: { type: 'consonant', value: 'm' },
  n: { type: 'consonant', value: 'n' },
  q: { type: 'consonant', value: 'q' },
  g: { type: 'consonant', value: 'g' },
  d: { type: 'consonant', value: 'd' },
  b: { type: 'consonant', value: 'b' },
  p: { type: 'consonant', value: 'p' },
  t: { type: 'consonant', value: 't' },
  k: { type: 'consonant', value: 'k' },
  h: { type: 'consonant', value: 'h' },
  s: { type: 'consonant', value: 's' },
  f: { type: 'consonant', value: 'f' },
  V: { type: 'consonant', value: 'V' },
  v: { type: 'consonant', value: 'v' },
  z: { type: 'consonant', value: 'z' },
  j: { type: 'consonant', value: 'j' },
  x: { type: 'consonant', value: 'x' },
  c: { type: 'consonant', value: 'c' },
  C: { type: 'consonant', value: 'C' },
  y: { type: 'consonant', value: 'y' },
  w: { type: 'consonant', value: 'w' },
  Q: { type: 'consonant', value: 'Q' },
  "'": { type: 'consonant', value: "'" },
  l: { type: 'consonant', value: 'l' },
  r: { type: 'consonant', value: 'r' },
  '!': { truncation: true },
  _: { elongation: true },
  '^': { stress: true },
  '?': { implosion: true },
  '*': { click: true },
  '~': { dentalization: true },
  '&': { nasalization: true },
}

module.exports = parse

function parse(string) {
  let x = string
  const chunks = []
  while (x.length) {
    let matched = false
    symbol: for (const key in SYMBOL) {
      if (x.startsWith(key)) {
        const val = SYMBOL[key]
        if (val.type) {
          chunks.push({ ...val })
        } else {
          chunks[chunks.length - 1] = {
            ...chunks[chunks.length - 1],
            ...val,
          }
        }
        x = x.slice(key.length)
        matched = true
        break symbol
      }
    }
    if (!matched) {
      throw new Error('Invalid characters found')
    }
  }
  return demarcate(chunks)
}

function demarcate(chunks) {
  let state = 'start'

  const marks = []
  let mark

  chunks.forEach((chunk, i) => {
    switch (state) {
      case 'start':
        switch (chunk.type) {
          case 'vowel':
            state = 'vowel'
            break
        }
        break
      case 'vowel':
        switch (chunk.type) {
          case 'vowel': {
            const last = chunks[i - 1]
            switch (last.value) {
              case 'i':
                switch (chunk.value) {
                  case 'U':
                  case 'u':
                  case 'o':
                  case 'a':
                  case 'e':
                  case 'A':
                  case 'E':
                    mark = { base: i - 1, head: i - 1 }
                    marks.push(mark)
                    break
                }
            }
            break
          }
          case 'consonant':
            state = 'consonant'
            mark = { base: i, head: i }
            marks.push(mark)
            break
        }
        break
      case 'consonant':
        switch (chunk.type) {
          case 'vowel':
            state = 'vowel'
            break
          case 'consonant':
            switch (chunk.value) {
              case 'l':
              case 'L':
              case 'R':
              case 'r':
              case 'w':
              case 'y':
                mark.head = i - 1
                mark = undefined
                break
              default:
                if (!mark) {
                  mark = { base: i }
                  marks.push(mark)
                }
                mark.head = i
                break
            }
            break
        }
        break
    }
  })

  const count =
    !marks.length || marks[marks.length - 1].head !== chunks.length - 1
      ? marks.length + 1
      : marks.length

  const free = count === marks.length + 1

  return { chunks, marks, free, count }
}
