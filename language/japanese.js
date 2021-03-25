const m = {
  'お': 'o',
  'オ': 'o',
  'こ': 'ko',
  'コ': 'ko',
  'そ': 'so',
  'ソ': 'so',
  'と': 'to',
  'ト': 'to',
  'の': 'no',
  'ノ': 'no',
  'ほ': 'ho',
  'ホ': 'ho',
  'も': 'mo',
  'モ': 'mo',
  'よ': 'yo',
  'ヨ': 'yo',
  'ろ': 'ro',
  'ロ': 'ro',
  'を': 'wo',
  'ヲ': 'wo',
  'え': 'e',
  'エ': 'e',
  'け': 'ke',
  'ケ': 'ke',
  'せ': 'se',
  'セ': 'se',
  'て': 'te',
  'テ': 'te',
  'ね': 'ne',
  'ネ': 'ne',
  'へ': 'he',
  'ヘ': 'he',
  'め': 'me',
  'メ': 'me',
  'れ': 're',
  'レ': 're',
  'ゑ': 'we',
  'ヱ': 'we',
  'う': 'u',
  'ウ': 'u',
  'く': 'ku',
  'ク': 'ku',
  'す': 'su',
  'ス': 'su',
  'つ': 'tu',
  'ツ': 'tu',
  'ぬ': 'nu',
  'ヌ': 'nu',
  'ふ': 'hu',
  'フ': 'hu',
  'む': 'mu',
  'ム': 'mu',
  'ゆ': 'yu',
  'ユ': 'yu',
  'る': 'ru',
  'ル': 'ru',
  'き': 'ki',
  'キ': 'ki',
  'し': 'si',
  'シ': 'si',
  'ち': 'ti',
  'チ': 'ti',
  'に': 'ni',
  'ニ': 'ni',
  'ひ': 'hi',
  'ヒ': 'hi',
  'み': 'mi',
  'ミ': 'mi',
  'り': 'ri',
  'リ': 'ri',
  'ゐ': 'wi',
  'ヰ': 'wi',
  'あ': 'a',
  'ア': 'a',
  'か': 'ka',
  'カ': 'ka',
  'さ': 'sa',
  'サ': 'sa',
  'た': 'ta',
  'タ': 'ta',
  'な': 'na',
  'ナ': 'na',
  'は': 'ha',
  'ハ': 'ha',
  'ま': 'ma',
  'マ': 'ma',
  'や': 'ya',
  'ヤ': 'ya',
  'ら': 'ra',
  'ラ': 'ra',
  'わ': 'wa',
  'ワ': 'wa',
  'い': 'i',
  'イ': 'i'
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
