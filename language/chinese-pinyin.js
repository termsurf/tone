
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
  'iàng': 'ya^a_q',
  'iáng': 'yaa^q',
  'iǎng': 'ya^a_a^q',

  'iang1': 'ya^q',
  'iang2': 'ya^a_q',
  'iang4': 'yaa^q',
  'iang3': 'ya^a_a^q',

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
  'ìng': 'i^i_q',
  'īng': 'i^q',
  'ǐng': 'i^i_i^q',

  'ing2': 'ii^q',
  'ing4': 'i^i_q',
  'ing1': 'i^q',
  'ing3': 'i^i_i^q',

  'iao': 'yau',
  'iāo': 'ya^u',
  'iào': 'ya^a_u',
  'iáo': 'yaa^u',
  'iǎo': 'ya^a_a^u',

  'iao1': 'ya^u',
  'iao4': 'ya^a_u',
  'iao2': 'yaa^u',
  'iao3': 'ya^a_a^u',

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
  'iǎ': 'ya^a_a^',

  'ia1': 'ya^',
  'ia4': 'ya_',
  'ia2': 'yaa^',
  'ia3': 'ya^a_a^',

  'ie': 'ye',
  'iē': 'ye^',
  'iě': 'ye^e_e^',
  'ié': 'yee^',
  'iè': 'ye^e_',

  'ie1': 'ye^',
  'ie3': 'ye^e_e^',
  'ie2': 'yee^',
  'ie4': 'ye^e_',

  'iu': 'you',
  'iǔ': 'you^u_u^',
  'iū': 'you^',
  'iú': 'youu^',
  'iù': 'you^u_',

  'iu3': 'you^u_u^',
  'iu1': 'you^',
  'iu2': 'youu^',
  'iu4': 'you^u_',

  'in': 'in',
  'ín': 'ii^n',
  'ìn': 'i^i_n',
  'īn': 'i^n',
  'ǐn': 'i^i_i^n',

  'in2': 'ii^n',
  'in4': 'i^i_n',
  'in1': 'i^n',
  'in3': 'i^i_i^n',

  'io': 'yo',
  'iō': 'yo^',
  'iò': 'yo^o_',
  'ió': 'yoo^',
  'iǒ': 'yo^o_o^',

  'io1': 'yo^',
  'io4': 'yo^o_',
  'io2': 'yoo^',
  'io3': 'yo^o_o^',

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
  'ěi': 'e^e_e^i',
  'éi': 'ee^i',
  'èi': 'e^e_i',

  'ei1': 'e^i',
  'ei3': 'e^e_e^i',
  'ei2': 'ee^i',
  'ei4': 'e^e_i',

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
  'àng': 'a^a_q',
  'áng': 'aa^q',
  'ǎng': 'a^a_a^q',

  'ang1': 'a^q',
  'ang4': 'a^a_q',
  'ang2': 'aa^q',
  'ang3': 'a^a_a^q',

  'ai': 'ai',
  'āi': 'a^i',
  'ǎi': 'a^a_a^i',
  'ái': 'aa^i',
  'ài': 'a^a_i',

  'ai1': 'a^i',
  'ai3': 'a^a_a^i',
  'ai2': 'aa^i',
  'ai4': 'a^a_i',

  'ao': 'au',
  'āo': 'a^u',
  'ào': 'a^a_u',
  'áo': 'aa^u',
  'ǎo': 'a^a_a^u',

  'ao1': 'a^u',
  'ao4': 'a^a_u',
  'ao2': 'aa^u',
  'ao3': 'a^a_a^u',

  'an': 'an',
  'ān': 'a^n',
  'àn': 'a^a_n',
  'án': 'aa^n',
  'ǎn': 'a^a_a^n',

  'an1': 'a^n',
  'an4': 'a^a_n',
  'an2': 'aa^n',
  'an3': 'a^a_a^n',

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
  'uàng': 'wa^a_q',
  'uáng': 'waa^q',
  'uǎng': 'wa^a_a^q',

  'uang1': 'wa^q',
  'uang4': 'wa^a_q',
  'uang2': 'waa^q',
  'uang3': 'wa^a_a^q',

  'uai': 'wai',
  'uāi': 'wa^i',
  'uài': 'wa^a_i',
  'uái': 'waa^i',
  'uǎi': 'wa^a_a^i',

  'uai1': 'wa^i',
  'uai4': 'wa^a_i',
  'uai2': 'waa^i',
  'uai3': 'wa^a_a^i',

  'uan': 'wan',
  'uān': 'wa^n',
  'uàn': 'wa^a_n',
  'uán': 'waa^n',
  'uǎn': 'wa^a_a^n',

  'uan1': 'wa^n',
  'uan4': 'wa^a_n',
  'uan2': 'waa^n',
  'uan3': 'wa^a_a^n',

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
  'uǒ': 'wo^o_o^',
  'uò': 'wo^o_',

  'uo1': 'wo^',
  'uo2': 'woo^',
  'uo3': 'wo^o_o^',
  'uo4': 'wo^o_',

  'ui': 'wei',
  'uí': 'weii^',
  'uì': 'wei^i_',
  'uī': 'wei^',
  'uǐ': 'wei^i_i^',

  'ui2': 'weii^',
  'ui4': 'wei^i_',
  'ui1': 'wei^',
  'ui3': 'wei^i_i^',

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
  'uě': 'ṳe^e_e^',
  'ué': 'ṳee^',
  'uè': 'ṳe^e_',

  'ue1': 'ṳe^',
  'ue3': 'ṳe^e_e^',
  'ue2': 'ṳee^',
  'ue4': 'ṳe^e_',

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
  'ǒu': 'o^o_o^u',
  'òu': 'o^o_u',

  'ou1': 'o^u',
  'ou2': 'oo^u',
  'ou3': 'o^o_o^u',
  'ou4': 'o^o_u',

  'i': 'i',
  'í': 'ii^',
  'i2': 'ii^',
  'ì': 'i^i_',
  'i4': 'i^i_',
  'ī': 'i^',
  'i1': 'i^',
  'ǐ': 'i^i_i^',
  'i3': 'i^i_i^',
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
  'à': 'a^a_',
  'a4': 'a^a_',
  'á': 'aa^',
  'a2': 'aa^',
  'ǎ': 'a^a_a^',
  'a3': 'a^a_a^',
  'a': 'a',
  'ō': 'wo^',
  'o1': 'wo^',
  'ó': 'woo^',
  'o2': 'woo^',
  'ǒ': 'wo^o_o^',
  'o3': 'wo^o_o^',
  'ò': 'wo^o_',
  'o4': 'wo^o_',
  'o': 'wo',
  'o': 'o',
  'ǚ': 'yu^u_u^',
  'ü3': 'yu^u_u^',
  'ǖ': 'yu^',
  'ü1': 'yu^',
  'ǘ': 'yuu^',
  'ü2': 'yuu^',
  'ǜ': 'yu^u_',
  'ü4': 'yu^u_',
  'ü': 'yu',
  'ǔ': 'u^u_u^',
  'u3': 'u^u_u^',
  'ū': 'u^',
  'u1': 'u^',
  'ú': 'uu^',
  'u2': 'uu^',
  'ù': 'u^u_',
  'u4': 'u^u_',
  'u': 'u',

  'yun': 'ywun',
  'yǔn': 'ywu^u_u^n',
  'yūn': 'ywu^n',
  'yún': 'ywuu^n',
  'yùn': 'ywu^u_n',

  'yun3': 'ywu^u_u^n',
  'yun1': 'ywu^n',
  'yun2': 'ywuu^n',
  'yun4': 'ywu^u_n',

  'yu': 'ywu',
  'yǔ': 'ywu^u_u^',
  'yū': 'ywu^',
  'yú': 'ywuu^',
  'yù': 'ywu^u_',

  'yu3': 'ywu^u_u^',
  'yu1': 'ywu^',
  'yu2': 'ywuu^',
  'yu4': 'ywu^u_',

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
