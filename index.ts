/* eslint-disable sort-keys/sort-keys-fix */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import st from '@lancejpollard/script-tree'

const D: Record<string, string> = {
  '!': '^', // short vowel
  $: '5', // variant
  '&': '0', // nasal
  '++': '33',
  '+': '3',
  '--': '44',
  '-': '4',
  '@': '00', // non-syllabic
  '^': '9', // accent mark
  _: '%', // long vowel
  '': '',
}

export type Link = { i: string; name?: string; o: string }

const VOWELS: Array<Link> = []
const BASE_VOWEL_GLYPHS = [
  'I',
  'E',
  'A',
  'O',
  'U',
  'i',
  'e',
  'a',
  'o',
  'u',
]
const TONE_MARKS = ['--', '-', '++', '+', '']
const VARIANT_MARKS = ['$', '']
const NASAL_MARKS = ['&', '']
const DURATION_MARKS = ['_', '!', '']
const SYLLABIC_MARKS = ['@', '']
const ACCENT_MARKS = ['^', '']

BASE_VOWEL_GLYPHS.forEach(g => {
  ACCENT_MARKS.forEach(a => {
    DURATION_MARKS.forEach(l => {
      SYLLABIC_MARKS.forEach(s => {
        NASAL_MARKS.forEach(n => {
          VARIANT_MARKS.forEach(v => {
            TONE_MARKS.forEach(t => {
              const i = `${g}${v}${n}${t}${s}${l}${a}`
              // these two are treated specially, not getting the variant mark
              if (i.match(/([ou])~/)) {
                const x = RegExp.$1
                const o =
                  l === '!'
                    ? `${x === 'o' ? 1 : 2}${D[a]}${D[t]}${D[l]}${
                        D[n]
                      }${D[s]}`
                    : `${x === 'o' ? 1 : 2}${D[l]}${D[a]}${D[t]}${
                        D[n]
                      }${D[s]}`
                VOWELS.push({ i, o })
              } else {
                const o =
                  l === '!'
                    ? `${g}${D[a]}${D[t]}${D[l]}${D[n]}${D[s]}${D[v]}`
                    : `${g}${D[l]}${D[a]}${D[t]}${D[n]}${D[s]}${D[v]}`
                VOWELS.push({ i, o })
              }
            })
          })
        })
      })
    })
  })
})

const CONSONANTS: Array<Link> = [
  { i: '=.', name: 'Period literal', o: '.' },
  { i: '=?', name: 'Question literal', o: '?' },
  { i: '=!', name: 'Exclamation literal', o: '!' },
  { i: '=+', name: 'Plus', o: '+' },
  { i: '=-', name: 'Minus', o: '-' },
  { i: 'mh!_', name: 'Long voiceless m sound', o: 'mm%9' },
  { i: 'mh!', name: 'Voiceless m sound', o: 'm%9' },
  { i: 'mG~', name: 'Velarized m sound', o: 'm4' },
  { i: 'my~', name: 'Palatalized m sound', o: 'm3' },
  { i: 'mh~_', name: 'Long aspirated m sound', o: 'mm%' },
  { i: 'mh~', name: 'Aspirated m sound', o: 'm%' },
  { i: 'm_', name: 'Long m sound', o: 'mm' },
  { i: 'm', name: 'M sound', o: 'm' },
  { i: 'Nh!', name: 'Voiceless Indian n sound', o: 'n6%9' },
  { i: 'Nh~', name: 'Aspirated Indian n sound', o: 'n6%' },
  { i: 'N_', name: 'Long Indian n sound', o: 'n6n6' },
  { i: 'N', name: 'Indian n sound', o: 'n6' },
  { i: 'nh!', name: 'Voiceless n sound', o: 'n%9' },
  { i: 'nG~', name: 'Velarized n sound', o: 'n4' },
  { i: 'nh~', name: 'Aspirated n sound', o: 'n%' },
  { i: 'ny~h!', name: 'Voiceless palatalized n sound', o: 'n%93' },
  { i: 'ny~', name: 'Palatalized n sound', o: 'n3' },
  { i: 'n~', name: 'Dental n sound', o: 'n7' },
  { i: 'n_', name: 'Long n sound', o: 'nn' },
  { i: 'n', name: 'N sound', o: 'n' },
  { i: 'qh!', name: 'Voiceless ng sound', o: 'q%9' },
  { i: 'q!', name: 'Ejective ng sound', o: 'q94' },
  { i: 'q', name: 'Ng sound', o: 'q' },
  { i: 'Q', name: 'Arabic voiced pharyngeal fricative', o: 'q5' },
  { i: 'G', name: 'French r sound', o: 'G' },
  { i: 'gh!', name: 'Voiceless g sound', o: 'g^0' },
  { i: 'g?', name: 'Implosive g sound', o: 'g06' },
  { i: 'g@', name: 'Tense g sound', o: 'g00' },
  { i: 'gh~', name: 'Aspirated g sound', o: 'g^' },
  { i: 'gQ~', name: 'Pharyngealized g sound', o: 'g66' },
  { i: 'gG~', name: 'Velarized g sound', o: 'g6' },
  { i: 'gy~', name: 'Palatalized g sound', o: 'g5' },
  { i: 'gw~h~', name: 'Aspirated labialized g sound', o: 'g^55' },
  { i: 'gw~', name: 'Labialized g sound', o: 'g55' },
  { i: 'g_', name: 'Long g sound', o: 'gg' },
  { i: 'g', name: 'G sound', o: 'g' },
  { i: "'~", name: 'Hard transition', o: "'3" },
  { i: "'!", name: 'Nang tone', o: "'366" },
  { i: "'", name: 'Lack of sound, glottal stop', o: "'" },
  { i: 'dh!', name: 'Voiceless d sound', o: 'd^0' },
  { i: 'd!', name: 'Ejective d sound', o: 'd05' },
  { i: 'd?', name: 'Implosive d sound', o: 'd06' },
  { i: 'd*h~', name: 'Aspirated click d sound', o: 'd^08' },
  { i: 'd*', name: 'Click d sound', o: 'd08' },
  { i: 'dh~', name: 'Aspirated d sound', o: 'd^' },
  { i: 'dQ~', name: 'Pharyngealized d sound', o: 'd66' },
  { i: 'dG~', name: 'Velarized d sound', o: 'd6' },
  { i: 'dy~', name: 'Palatalized d sound', o: 'd5' },
  { i: 'dw~h~', name: 'Aspirated labialized d sound', o: 'd^55' },
  { i: 'dw~', name: 'Labialized d sound', o: 'd55' },
  { i: 'Dh~', name: 'Aspirated Indian d sound', o: 'd^4' },
  { i: 'D_', name: 'Long Indian d sound', o: 'd4d4' },
  { i: 'D', name: 'Indian d sound', o: 'd4' },
  { i: 'd@', name: 'Tense d sound', o: 'd00' },
  { i: 'd~', name: 'Dental d sound', o: 'd8' },
  { i: 'd_', name: 'Long d sound', o: 'dd' },
  { i: 'd', name: 'D sound', o: 'd' },
  { i: 'bh!', name: 'Voiceless b sound', o: 'b^0' },
  { i: 'bh~', name: 'Aspirated b sound', o: 'b^' },
  { i: 'bQ~', name: 'Pharyngealized b sound', o: 'b66' },
  { i: 'bG~', name: 'Velarized b sound', o: 'b6' },
  { i: 'by~', name: 'Palatalized b sound', o: 'b5' },
  { i: 'bw~h~', name: 'Aspirated labialized b sound', o: 'b^55' },
  { i: 'bw~', name: 'Labialized b sound', o: 'b55' },
  { i: 'b?', name: 'Implosive b sound', o: 'b06' },
  { i: 'b!', name: 'Ejective b sound', o: 'b05' },
  { i: 'b@', name: 'Tense b sound', o: 'b00' },
  { i: 'b_', name: 'Long b sound', o: 'bb' },
  { i: 'b', name: 'B sound', o: 'b' },
  { i: 'ph~', name: 'Aspirated p sound', o: 'p%' },
  { i: 'pQ~', name: 'Pharyngealized p sound', o: 'p44' },
  { i: 'pG~', name: 'Velarized p sound', o: 'p4' },
  { i: 'py~', name: 'Palatalized p sound', o: 'p3' },
  { i: 'pw~h~', name: 'Aspirated labialized p sound', o: 'p%33' },
  { i: 'pw~', name: 'Labialized p sound', o: 'p33' },
  { i: 'p!', name: 'Ejective p sound', o: 'p93' },
  { i: 'p*h~', name: 'Aspirated click p sound', o: 'p%97' },
  { i: 'p*', name: 'Click p sound', o: 'p97' },
  { i: 'p@', name: 'Tense p sound', o: 'p99' },
  { i: 'p.', name: 'Stop p sound', o: 'p9' },
  { i: 'p_', name: 'Long p sound', o: 'pp' },
  { i: 'p', name: 'P sound', o: 'p' },
  { i: 'Th~', name: 'Aspirated T sound', o: 't4^' },
  { i: 'Ty~', name: 'Palatalized T sound', o: 't45' },
  { i: 'T!', name: 'Ejective T sound', o: 't405' },
  { i: 'T_', name: 'Long Indian t sound', o: 't4t4' },
  { i: 'T', name: 'Indian t sound', o: 't4' },
  { i: 'ty~h~', name: 'Aspirated palatalized t sound', o: 't^5' },
  { i: 'th~', name: 'Aspirated t sound', o: 't^' },
  { i: 'tQ~', name: 'Pharyngealized t sound', o: 't66' },
  { i: 'tG~', name: 'Velarized t sound', o: 't6' },
  { i: 'ty~', name: 'Palatalized t sound', o: 't5' },
  { i: 'tw~h~', name: 'Aspirated labialized t sound', o: 't^55' },
  { i: 'tw~', name: 'Labialized t sound', o: 't55' },
  { i: 't!', name: 'Ejective t sound', o: 't05' },
  { i: 't*h~', name: 'Aspirated click t sound', o: 't^08' },
  { i: 't*', name: 'Click t sound', o: 't08' },
  { i: 't@', name: 'Tense t sound', o: 't00' },
  { i: 't.', name: 'Stop t sound', o: 't0' },
  { i: 't~', name: 'Dental t sound', o: 't8' },
  { i: 't_', name: 'Long t sound', o: 'tt' },
  { i: 't', name: 'T sound', o: 't' },
  { i: 'k!', name: 'Ejective k sound', o: 'k93' },
  { i: 'k*h~', name: 'Aspirated click k sound', o: 'k%97' },
  { i: 'k*', name: 'Click k sound', o: 'k97' },
  { i: 'ky~h~', name: 'Aspirated palatalized k sound', o: 'k%3' },
  { i: 'kw~h~', name: 'Aspirated labialized k sound', o: 'k%33' },
  { i: 'kh~', name: 'Aspirated k sound', o: 'k%' },
  { i: 'kQ~', name: 'Pharyngealized k sound', o: 'k44' },
  { i: 'kG~', name: 'Velarized k sound', o: 'k4' },
  { i: 'ky~', name: 'Palatalized k sound', o: 'k3' },
  { i: 'kw~', name: 'Labialized k sound', o: 'k33' },
  { i: 'Kh~', name: 'Arabic aspirated Q sound', o: 'k6%' },
  { i: 'KQ~', name: 'Pharyngealized Arabic Q sound', o: 'k644' },
  { i: 'KG~', name: 'Velarized Arabic Q sound', o: 'k64' },
  { i: 'Ky~', name: 'Palatalized Arabic Q sound', o: 'k63' },
  {
    i: 'Kw~h~',
    name: 'Aspirated labialized Arabic Q sound',
    o: 'k6%33',
  },
  { i: 'Kw~', name: 'Labialized Arabic Q sound', o: 'k633' },
  { i: 'K!', name: 'Arabic ejective Q sound', o: 'k693' },
  { i: 'K_', name: 'Long Arabic Q sound', o: 'k6k6' },
  { i: 'K', name: 'Arabic Q sound', o: 'k6' },
  { i: 'k@', name: 'Tense k sound', o: 'k99' },
  { i: 'k.', name: 'Stop k sound', o: 'k9' },
  { i: 'k_', name: 'Long k sound', o: 'kk' },
  { i: 'k', name: 'K sound', o: 'k' },
  { i: 'Hh!', name: 'Voiceless H sound (ħ)', o: 'h5%' },
  { i: 'H!', name: 'Ejective H sound', o: 'h593' },
  { i: 'Hy~', name: 'Palatalized H sound', o: 'h53' },
  { i: 'Hw~', name: 'Labialized H sound', o: 'h533' },
  { i: 'H', name: 'Hebrew harsh h sound', o: 'h5' },
  { i: 'hy~', name: 'Palatalized h sound', o: 'h3' },
  { i: 'hw~', name: 'Labialized h sound', o: 'h33' },
  { i: 'hh~', name: 'Breathy h sound', o: 'h%' },
  { i: 'h_', name: 'Long h sound', o: 'hh' },
  { i: 'h', name: 'H sound', o: 'h' },
  { i: 'Jh~', name: 'Aspirated Indian j sound', o: 'j4^' },
  { i: 'J', name: 'Indian j sound', o: 'j4' },
  { i: 'jh~', name: 'Aspirated j sound', o: 'j^' },
  { i: 'jy~', name: 'Palatalized j sound', o: 'j5' },
  { i: 'jw~', name: 'Labialized j sound', o: 'j55' },
  { i: 'j!', name: 'Ejective j sound', o: 'j05' },
  { i: 'j', name: 'J sound', o: 'j' },
  { i: 'S!', name: 'Navajo s sound ejective', o: 's593' },
  { i: 'Sh~', name: 'Aspirated Navajo s sound', o: 's%5' },
  { i: 'S_', name: 'Long Navajo s sound', o: 's5s5' },
  { i: 'S', name: 'Navajo s sound', o: 's5' },
  { i: 'sh~', name: 'Aspirated s sound', o: 's%' },
  { i: 'sQ~', name: 'Pharyngealized s sound', o: 's44' },
  { i: 'sG~', name: 'Velarized s sound', o: 's4' },
  { i: 'sy~', name: 'Palatalized s sound', o: 's3' },
  { i: 'sw~', name: 'Labialized s sound', o: 's33' },
  { i: 's@', name: 'Tense s sound', o: 's99' },
  { i: 's!', name: 'Ejective s sound', o: 's93' },
  { i: 's~', name: 'Dental s sound', o: 's7' },
  { i: 's_', name: 'Long s sound', o: 'ss' },
  { i: 's', name: 'S sound', o: 's' },
  { i: 'Fw~', name: 'Labial labialized f sound', o: 'f633' },
  { i: 'F_', name: 'Long labial f sound', o: 'f6f6' },
  { i: 'F', name: 'Labial f sound', o: 'f6' },
  { i: 'fy~', name: 'Palatalized f sound', o: 'f3' },
  { i: 'fG~', name: 'Velarized f sound', o: 'f4' },
  { i: 'fw~', name: 'Labialized f sound', o: 'f33' },
  { i: 'f!', name: 'Ejective f sound', o: 'f93' },
  { i: 'f_', name: 'Long f sound', o: 'ff' },
  { i: 'f', name: 'f sound', o: 'f' },
  { i: 'V', name: 'Labial v sound', o: 'v3' },
  { i: 'vQ~', name: 'Pharyngealized v sound', o: 'v66' },
  { i: 'vG~', name: 'Velarized v sound', o: 'v6' },
  { i: 'vy~', name: 'Palatalized v sound', o: 'v5' },
  { i: 'vw~', name: 'Labialized v sound', o: 'v55' },
  { i: 'v_', name: 'Long v sound', o: 'vv' },
  { i: 'v', name: 'V sound', o: 'v' },
  { i: 'Z!', name: 'Ejective Zulu dl sound', o: 'z936' },
  { i: 'Z', name: 'Zulu dl sound', o: 'z6' },
  { i: 'zh~', name: 'Aspirated z sound', o: 'z%' },
  { i: 'zQ~', name: 'Pharyngealized z sound', o: 'z44' },
  { i: 'zy~', name: 'Palatalized z sound', o: 'z3' },
  { i: 'zw~', name: 'Labialized z sound', o: 'z33' },
  { i: 'z~', name: 'Dental z sound', o: 'z7' },
  { i: 'z!', name: 'Ejective z sound', o: 'z93' },
  { i: 'z_', name: 'Long z sound', o: 'zz' },
  { i: 'z', name: 'Z sound', o: 'z' },
  { i: 'C~', name: 'Danish th/l sound', o: 'C3' },
  { i: 'CQ~', name: 'Pharyngealized C sound', o: 'C66' },
  { i: 'CG~', name: 'Velarized C sound', o: 'C6' },
  { i: 'Cy~', name: 'Palatalized C sound', o: 'C5' },
  { i: 'Cw~', name: 'Labialized C sound', o: 'C55' },
  { i: 'C', name: 'Voiced th sound', o: 'C' },
  { i: 'cy~', name: 'Palatalized c sound', o: 'c5' },
  { i: 'cw~', name: 'Labialized c sound', o: 'c55' },
  { i: 'c', name: 'Unvoiced th sound', o: 'c' },
  { i: 'Lh!', name: 'Voiceless Indian l sound', o: 'l3^0' },
  { i: 'Lh~', name: 'Aspirated Indian l sound', o: 'l3^' },
  { i: 'L', name: 'Indian l sound', o: 'l3' },
  { i: 'lh!', name: 'Voiceless l sound', o: 'l^0' },
  { i: 'lG~_', name: 'Long velarized l sound', o: 'll6' },
  { i: 'lG~', name: 'Velarized l sound', o: 'l6' },
  { i: 'lQ~', name: 'Pharyngealized l sound', o: 'l66' },
  { i: 'ly~', name: 'Palatalized l sound', o: 'l5' },
  { i: 'lh~', name: 'Aspirated l sound', o: 'l^' },
  { i: 'l*h~', name: 'Aspirated click l sound', o: 'l^08' },
  { i: 'l*', name: 'Click l sound', o: 'l08' },
  { i: 'l!', name: 'Ejective l sound', o: 'l05' },
  { i: 'l_', name: 'Long l sound', o: 'll' },
  { i: 'l', name: 'L sound', o: 'l' },
  { i: 'Rh~', name: 'Aspirated Indian r sound', o: 'r5%' },
  { i: 'R', name: 'Indian r sound', o: 'r5' },
  { i: 'rh!', name: 'Voiceless rolling r sound', o: 'r%9' },
  { i: 'ry~', name: 'Palatalized r sound', o: 'r3' },
  { i: 'rh~', name: 'Aspirated rolling r sound', o: 'r%' },
  { i: 'rG~', name: 'Velarized r sound', o: 'r4' },
  { i: 'r_', name: 'Long rolling r sound', o: 'rr' },
  { i: 'r', name: 'Single rolling r sound', o: 'r' },
  { i: 'xh~', name: 'Aspirated x sound', o: 'x^' },
  { i: 'xQ~', name: 'Pharyngealized x sound', o: 'x66' },
  { i: 'xG~', name: 'Velarized x sound', o: 'x6' },
  { i: 'xy~h~', name: 'Aspirated palatalized x sound', o: 'x^5' },
  { i: 'xy~', name: 'Palatalized x sound', o: 'x5' },
  { i: 'x@y~', name: 'Tense palatalized x sound', o: 'x005' },
  { i: 'xw~', name: 'Labialized x sound', o: 'x55' },
  { i: 'x!', name: 'Ejective sh sound', o: 'x05' },
  { i: 'Xh~', name: 'Aspirated Indian sh sound', o: 'x4^' },
  { i: 'Xy~', name: 'Palatalized x sound', o: 'x45' },
  { i: 'X!', name: 'Ejective X sound', o: 'x405' },
  { i: 'X', name: 'Indian sh sound', o: 'x4' },
  { i: 'x@', name: 'Tense sh sound', o: 'x00' },
  { i: 'tx_', name: 'Long tx sound', o: 'ttx' },
  { i: 'x', name: 'Sh sound', o: 'x' },
  { i: 'wh!', name: 'Voiceless w sound', o: 'w^0' },
  { i: 'w!', name: 'Ejective w sound', o: 'w05' },
  { i: 'W', name: 'Velar approximant w sound', o: 'w4' },
  { i: 'w', name: 'W sound', o: 'w' },
  { i: 'yw~', name: 'Labialized y sound', o: 'y33' },
  { i: 'yh!', name: 'Voiceless y sound', o: 'y%9' },
  { i: 'y', name: 'Y sound', o: 'y' },
  { i: ' ', name: 'Space', o: ' ' },
  { i: '.', name: 'Period', o: '.' },
  { i: ',', name: 'Comma', o: ',' },
  { i: '(', name: 'Opening parenthesis', o: '(' },
  { i: ')', name: 'Closing parenthesis', o: ')' },
  { i: '[', name: 'Opening bracket', o: '[' },
  { i: ']', name: 'Closing bracket', o: ']' },
  { i: '|', name: 'Pipe', o: '|' },
  { i: '#', name: 'Number sign', o: '#' },
  { i: '=@', name: 'At sign', o: '@' },
  { i: '/', name: 'Forward slash', o: '/' },
  { i: '\\', name: 'Backward slash', o: '\\' },
  { i: ':', name: 'Colon', o: ':' },
]

const SYMBOLS = [...VOWELS, ...CONSONANTS]
const tree = st.fork(SYMBOLS) as any
const make = (text: string) => st.form(text, tree) as string

const form = {
  SYMBOLS: SYMBOLS,
  VOWELS: VOWELS,
  CONSONANTS: CONSONANTS,
  // list: (text: string) => st.list(text, tree),
  make,
}

export default form
