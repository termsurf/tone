
const m = {
  ⲁ: 'a',
  ⲃ: 'v+',
  ⲅ: 'k',
  ⲇ: 't',
  ⲉ: 'u+',
  ⲋ: '',
  ⲍ: 's',
  ⲏ: 'ee',
  ⲑ: 'th',
  ⲓ: 'i',
  ⲕ: 'k',
  ⲗ: 'l',
  ⲙ: 'm',
  ⲛ: 'n',
  ⲝ: 'ks',
  ⲟ: 'o~',
  ⲡ: 'p',
  ⲣ: 'r',
  ⲥ: 's',
  ⲧ: 't',
  ⲩ: 'w',
  ⲫ: 'ph',
  ⲭ: 'kh',
  ⲯ: 'ps',
  ⲱ: 'oo',
  ϣ: 'x',
  ϥ: 'f',
  ϧ: 'h+',
  ⳉ: 'h+',
  ϩ: 'h',
  ϫ: 'tx',
  ϭ: 'txh',
  ϯ: 'ti'
}

const s = build(m)

const form = t => transform(t, s, m)

module.exports = form

/**
 * Transform input text to output using map.
 */

function transform(i, s, m) {
  let o = []
  let w = 0

  while (w < i.length) {
    let r = s
    let v = w

    while (true) {
      let c = i.charAt(v).toLowerCase()
      if (r[c]) {
        r = r[c]
        v++
      } else {
        break
      }
    }

    if (r === s) {
      const t = i.charAt(w).toLowerCase()
      const h = t.codePointAt(0).toString(16)
      const e = '\\u' + '0000'.substring(0, 4 - h.length) + h
      throw new Error(`${w}:${e}:${t}`)
    }

    let z = i.substr(w, v - w).toLowerCase()

    if (typeof m[z] == 'function') {
      m[z](o)
    } else {
      o.push(m[z])
    }

    w = v
  }

  return o.join('')
}

/**
 * Build trie.
 */

function build(m) {
  let s = {}

  for (let key in m) {
    let v = key.toLowerCase().split('')
    let r = s
    while (v.length) {
      var x = v.shift()
      r = r[x] = r[x] || {}
    }
  }

  return s
}
