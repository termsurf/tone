
const m = {
  'b': 'p',
  'd': 't',
  'g': 'k',
  'p': 'ph',
  't': 'th',
  'k': 'kh',
  'm': 'm',
  'n': 'n',
  'zh': 't+x',
  'z': 'ts',
  'j': 'tx',
  'ch': 't+xh',
  'c': 'tsh',
  'q': 'txh',
  'f': 'f',
  'sh': 'x',
  's': 's',
  'x': 'x~',
  'h': 'h~',
  'l': 'l',
  'r': 'r',
  'y': 'y',
  'w': 'w',

  'iang': 'yaq',
  'iāng': 'ya^q',
  'iàng': 'ya^aq',
  'iáng': 'yaa^q',
  'iǎng': 'ya^aa^q',

  'iang1': 'ya^q',
  'iang2': 'ya^aq',
  'iang4': 'yaa^q',
  'iang3': 'ya^aa^q',

  'iong': 'yo+q',
  'iǒng': 'yo+^o+_o+^q',
  'iōng': 'yo+^q',
  'ióng': 'yo+^q',
  'iòng': 'yo+^o+_q',

  'iong3': 'yo+^o+_o+^q',
  'iong1': 'yo+^q',
  'iong2': 'yo+^q',
  'iong4': 'yo+^o+_q',

  'ing': 'iq',
  'íng': 'ii^q',
  'ìng': 'i^iq',
  'īng': 'i^q',
  'ǐng': 'i^ii^q',

  'ing2': 'ii^q',
  'ing4': 'i^iq',
  'ing1': 'i^q',
  'ing3': 'i^ii^q',

  'iao': 'yau',
  'iāo': 'ya^u',
  'iào': 'ya^au',
  'iáo': 'yaa^u',
  'iǎo': 'ya^aa^u',

  'iao1': 'ya^u',
  'iao4': 'ya^au',
  'iao2': 'yaa^u',
  'iao3': 'ya^aa^u',

  'ian': 'ya+n',
  'iān': 'ya+^n',
  'iǎn': 'ya+^a+_a+^n',
  'ián': 'ya+^n',
  'iàn': 'ya+^a+_n',

  'ian1': 'ya+^n',
  'ian3': 'ya+^a+_a+^n',
  'ian2': 'ya+^n',
  'ian4': 'ya+^a+_n',

  'ia': 'ya',
  'iā': 'ya^',
  'ià': 'ya_',
  'iá': 'yaa^',
  'iǎ': 'ya^aa^',

  'ia1': 'ya^',
  'ia4': 'ya_',
  'ia2': 'yaa^',
  'ia3': 'ya^aa^',

  'ie': 'ye',
  'iē': 'ye^',
  'iě': 'ye^ee^',
  'ié': 'yee^',
  'iè': 'ye^e',

  'ie1': 'ye^',
  'ie3': 'ye^ee^',
  'ie2': 'yee^',
  'ie4': 'ye^e',

  'iu': 'you',
  'iǔ': 'you^uu^',
  'iū': 'you^',
  'iú': 'youu^',
  'iù': 'you^u',

  'iu3': 'you^uu^',
  'iu1': 'you^',
  'iu2': 'youu^',
  'iu4': 'you^u',

  'in': 'in',
  'ín': 'ii^n',
  'ìn': 'i^in',
  'īn': 'i^n',
  'ǐn': 'i^ii^n',

  'in2': 'ii^n',
  'in4': 'i^in',
  'in1': 'i^n',
  'in3': 'i^ii^n',

  'io': 'yo',
  'iō': 'yo^',
  'iò': 'yo^o',
  'ió': 'yoo^',
  'iǒ': 'yo^oo^',

  'io1': 'yo^',
  'io4': 'yo^o',
  'io2': 'yoo^',
  'io3': 'yo^oo^',

  'eng': 'u+q',
  'ēng': 'u+^q',
  'ěng': 'u+^u+_u+^q',
  'éng': 'u+u+^q',
  'èng': 'u+^u+_q',

  'eng1': 'u+^q',
  'eng3': 'u+^u+_u+^q',
  'eng2': 'u+u+^q',
  'eng4': 'u+^u+_q',

  'ei': 'ei',
  'ēi': 'e^i',
  'ěi': 'e^ee^i',
  'éi': 'ee^i',
  'èi': 'e^ei',

  'ei1': 'e^i',
  'ei3': 'e^ee^i',
  'ei2': 'ee^i',
  'ei4': 'e^ei',

  'en': 'u+n',
  'ēn': 'u+^n',
  'ěn': 'u+^u+_u+^n',
  'én': 'u+u+^n',
  'èn': 'u+^u+_n',

  'en1': 'u+^n',
  'en3': 'u+^u+_u+^n',
  'en2': 'u+u+^n',
  'en4': 'u+^u+_n',

  'er': 'a+o~',
  'ēr': 'a+^o~',
  'ěr': 'a+^a+_a+^o~',
  'ér': 'a+^o~',
  'èr': 'a+^a+_o~',

  'er1': 'a+^o~',
  'er3': 'a+^a+_a+^o~',
  'er2': 'a+^o~',
  'er4': 'a+^a+_o~',

  'ang': 'aq',
  'āng': 'a^q',
  'àng': 'a^aq',
  'áng': 'aa^q',
  'ǎng': 'a^aa^q',

  'ang1': 'a^q',
  'ang4': 'a^aq',
  'ang2': 'aa^q',
  'ang3': 'a^aa^q',

  'ai': 'ai',
  'āi': 'a^i',
  'ǎi': 'a^aa^i',
  'ái': 'aa^i',
  'ài': 'a^ai',

  'ai1': 'a^i',
  'ai3': 'a^aa^i',
  'ai2': 'aa^i',
  'ai4': 'a^ai',

  'ao': 'au',
  'āo': 'a^u',
  'ào': 'a^au',
  'áo': 'aa^u',
  'ǎo': 'a^aa^u',

  'ao1': 'a^u',
  'ao4': 'a^au',
  'ao2': 'aa^u',
  'ao3': 'a^aa^u',

  'an': 'an',
  'ān': 'a^n',
  'àn': 'a^an',
  'án': 'aa^n',
  'ǎn': 'a^aa^n',

  'an1': 'a^n',
  'an4': 'a^an',
  'an2': 'aa^n',
  'an3': 'a^aa^n',

  'ong': 'o+q',
  'ōng': 'o+^q',
  'óng': 'o+^q',
  'ǒng': 'o+^o+_o+^q',
  'òng': 'o+^o+_q',

  'ong1': 'o+^q',
  'ong2': 'o+^q',
  'ong3': 'o+^o+_o+^q',
  'ong4': 'o+^o+_q',

  'uang': 'waq',
  'uāng': 'wa^q',
  'uàng': 'wa^aq',
  'uáng': 'waa^q',
  'uǎng': 'wa^aa^q',

  'uang1': 'wa^q',
  'uang4': 'wa^aq',
  'uang2': 'waa^q',
  'uang3': 'wa^aa^q',

  'uai': 'wai',
  'uāi': 'wa^i',
  'uài': 'wa^ai',
  'uái': 'waa^i',
  'uǎi': 'wa^aa^i',

  'uai1': 'wa^i',
  'uai4': 'wa^ai',
  'uai2': 'waa^i',
  'uai3': 'wa^aa^i',

  'uan': 'wan',
  'uān': 'wa^n',
  'uàn': 'wa^an',
  'uán': 'waa^n',
  'uǎn': 'wa^aa^n',

  'uan1': 'wa^n',
  'uan4': 'wa^an',
  'uan2': 'waa^n',
  'uan3': 'wa^aa^n',

  'uan': 'ṳa+n',
  'uān': 'ṳa+^n',
  'uǎn': 'ṳa+^a+_a+^n',
  'uán': 'ṳa+^n',
  'uàn': 'ṳa+^a+_n',

  'uan1': 'ṳa+^n',
  'uan3': 'ṳa+^a+_a+^n',
  'uan2': 'ṳa+^n',
  'uan4': 'ṳa+^a+_n',

  'ua': 'wu+',
  'uā': 'wu+^',
  'uǎ': 'wu+^u+_u+^',
  'uá': 'wu+u+^',
  'uà': 'wu+^u+_',

  'ua1': 'wu+^',
  'ua3': 'wu+^u+_u+^',
  'ua2': 'wu+u+^',
  'ua4': 'wu+^u+_',

  'uo': 'wo',
  'uō': 'wo^',
  'uó': 'woo^',
  'uǒ': 'wo^oo^',
  'uò': 'wo^o',

  'uo1': 'wo^',
  'uo2': 'woo^',
  'uo3': 'wo^oo^',
  'uo4': 'wo^o',

  'ui': 'wei',
  'uí': 'weii^',
  'uì': 'wei^i',
  'uī': 'wei^',
  'uǐ': 'wei^ii^',

  'ui2': 'weii^',
  'ui4': 'wei^i',
  'ui1': 'wei^',
  'ui3': 'wei^ii^',

  'un': 'wu+n',
  'ǔn': 'wu+^u+_u+^n',
  'ūn': 'wu+^n',
  'ún': 'wu+u+^n',
  'ùn': 'wu+^u+_n',

  'un3': 'wu+^u+_u+^n',
  'un1': 'wu+^n',
  'un2': 'wu+u+^n',
  'un4': 'wu+^u+_n',

  'ue': 'ṳe',
  'uē': 'ṳe^',
  'uě': 'ṳe^ee^',
  'ué': 'ṳee^',
  'uè': 'ṳe^e',

  'ue1': 'ṳe^',
  'ue3': 'ṳe^ee^',
  'ue2': 'ṳee^',
  'ue4': 'ṳe^e',

  'un': 'yn',
  'ǔn': 'yu+^u+_u+^n',
  'ūn': 'yu+^n',
  'ún': 'yu+u+^n',
  'ùn': 'yu+^u+_n',

  'un3': 'yu+^u+_u+^n',
  'un1': 'yu+^n',
  'un2': 'yu+u+^n',
  'un4': 'yu+^u+_n',

  'ou': 'ou',
  'ōu': 'o^u',
  'óu': 'oo^u',
  'ǒu': 'o^oo^u',
  'òu': 'o^ou',

  'ou1': 'o^u',
  'ou2': 'oo^u',
  'ou3': 'o^oo^u',
  'ou4': 'o^ou',

  'i': 'i',
  'í': 'ii^',
  'i2': 'ii^',
  'ì': 'i^i',
  'i4': 'i^i',
  'ī': 'i^',
  'i1': 'i^',
  'ǐ': 'i^ii^',
  'i3': 'i^ii^',
  'ê': 'a+',
  'ē': 'o+^',
  'e1': 'o+^',
  'ě': 'o+^o+_o+^',
  'e3': 'o+^o+_o+^',
  'é': 'o+^',
  'e2': 'o+^',
  'è': 'o+^o+_',
  'e4': 'o+^o+_',
  'e': 'o+',
  'ā': 'a^',
  'a1': 'a^',
  'à': 'a^a',
  'a4': 'a^a',
  'á': 'aa^',
  'a2': 'aa^',
  'ǎ': 'a^aa^',
  'a3': 'a^aa^',
  'a': 'a',
  'ō': 'wo^',
  'o1': 'wo^',
  'ó': 'woo^',
  'o2': 'woo^',
  'ǒ': 'wo^oo^',
  'o3': 'wo^oo^',
  'ò': 'wo^o',
  'o4': 'wo^o',
  'o': 'wo',
  'o': 'o',
  'ǚ': 'yu^uu^',
  'ü3': 'yu^uu^',
  'ǖ': 'yu^',
  'ü1': 'yu^',
  'ǘ': 'yuu^',
  'ü2': 'yuu^',
  'ǜ': 'yu^u',
  'ü4': 'yu^u',
  'ü': 'yu',
  'ǔ': 'u^uu^',
  'u3': 'u^uu^',
  'ū': 'u^',
  'u1': 'u^',
  'ú': 'uu^',
  'u2': 'uu^',
  'ù': 'u^u',
  'u4': 'u^u',
  'u': 'u',

  'yun': 'ywun',
  'yǔn': 'ywu^uu^n',
  'yūn': 'ywu^n',
  'yún': 'ywuu^n',
  'yùn': 'ywu^un',

  'yun3': 'ywu^uu^n',
  'yun1': 'ywu^n',
  'yun2': 'ywuu^n',
  'yun4': 'ywu^un',

  'yu': 'ywu',
  'yǔ': 'ywu^uu^',
  'yū': 'ywu^',
  'yú': 'ywuu^',
  'yù': 'ywu^u',

  'yu3': 'ywu^uu^',
  'yu1': 'ywu^',
  'yu2': 'ywuu^',
  'yu4': 'ywu^u',

  ' ': ' ',
  '　': ' ',
  '，': ', ',
  ',': ',',
  '。': '. ',
  '.': '.',
  '？': '? ',
  '?': '?',
  '；': '; ',
  ';': ';',
  '：': ': ',
  ':': ':',
  '（': ' (',
  '(': '(',
  '）': ') ',
  ')': ')',
  '［': ' [',
  '[': '[',
  '］': '] ',
  ']': ']',
  '【': ' [',
  '】': '] ',
  '『': '"',
  '』': '"',
  '「': "'",
  '」': "'",
  '"': '"',
  '"': '"',
  "'": "'",
  "'": "'",
  '“': '"',
  '”': '"',
  '‘': "'",
  '’': "'",
  '、': ', ',
  '\n': '\n',
  '‧': ' ',
  '‧': ' ',
  '《': ' <',
  '》': '> ',
  '〈': ' <',
  '〉': '> ',
  '<': '<',
  '>': '>',
  '…': '...',
  '⋯': '...',
  '～': '~',
  '—': '-',
  ' ': ' '
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
