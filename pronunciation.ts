type TextList = Record<string, string>

const TONE: TextList = {
  '˥': '++',
  '˦': '+',
  '˧': '',
  '˨': '-',
  '˩': '--',
}

type Feature =
  | 'implosion'
  | 'voiceless'
  | 'aspiration'
  | 'dental'
  | 'pharyngealization'
  | 'short'
  | 'velarization'
  | 'nasalization'
  | 'glottalization'
  | 'palatalization'
  | 'non-syllabic'
  | 'stop'
  | 'ejection'
  | 'labialization'
  | 'long'
  | 'tense'

const m: { d: TextList; u: TextList } = {
  d: {
    acute: '\u0317',
    ddot: '\u0324',
    dot: '\u0323',
    down: '\u032C',
    grave: '\u0316',
    ring: '\u0325',
    tilde: '\u0330',
  },
  u: {
    acute: '\u0301',
    dacute: '\u030B',
    ddot: '\u0308',
    dgrave: '\u030F',
    dot: '\u0307',
    down: '\u030C',
    grave: '\u0300',
    macron: '\u0304',
    ring: '\u030A',
    tilde: '\u0303',
    up: '\u0302',
  },
}

export default convertIPAToCall

type Make = {
  last: {
    consonant: Consonant | null
    consonants: Array<Consonant>
    out: Vowel | Consonant | Punctuation | null
    vowel: Vowel | null
    vowels: Array<Vowel>
  }
  out: Array<Array<Vowel | Consonant | Punctuation>>
  pendingStress?: boolean
}

type Punctuation = {
  type: 'punctuation'
  value: string
}

type Consonant = {
  aspiration?: boolean
  dental?: boolean
  ejection?: boolean
  glottalization?: boolean
  implosion?: boolean
  labialization?: boolean
  long?: boolean
  palatalization?: boolean
  pharyngealization?: boolean
  stop?: boolean
  tense?: boolean
  type: 'consonant'
  value: string
  velarization?: boolean
  voice?: boolean
}

type Vowel = {
  long?: boolean
  nasalization?: boolean
  short?: boolean
  stress?: boolean
  syllabic?: boolean
  tone?: string
  type: 'vowel'
  value: string
}

function convertIPAToCall(ipa: string, options = { tones: true }) {
  const result: Make = {
    last: {
      consonant: null,
      consonants: [],
      out: null,
      vowel: null,
      vowels: [],
    },
    out: [],
  }

  const parts = [...ipa]
  let i = 0
  while (i < parts.length) {
    const part = parts[i++]
    switch (part) {
      case '\u200c': // non-width joiner
        break
      case 'ʰ':
        addFeature('aspiration')
        break
      case 'ũ':
        addVowel('u')
        addFeature('nasalization')
        break
      case 'ĩ':
        addVowel('i')
        addFeature('nasalization')
        break
      case 'ẽ':
        addVowel('e')
        addFeature('nasalization')
        break
      case 'ɪ':
        addVowel('I')
        break
      case 'ɘ':
        addVowel('I')
        break
      case 'ʏ':
        addVowel('i$')
        break
      case 'ɨ':
        addVowel('i$')
        break
      case 'y':
        addVowel('i$')
        break

      case 'e':
        addVowel('e')
        break
      case 'ɛ':
        addVowel('E')
        break
      case 'ε':
        addVowel('E')
        break
      case 'œ':
        addVowel('e$')
        break
      case 'ɶ':
        addVowel('e$')
        break
      case 'a':
        addVowel('a')
        break
      case `ɐ`:
        addVowel('a')
        break
      case 'ɑ':
        addVowel('a')
        break
      case 'ɒ':
        addVowel('a')
        break
      case 'ä':
        addVowel('a')
        break
      case 'æ':
        addVowel('A')
        break
      case 'ø':
        addVowel('a$')
        break
      case 'ɜ':
        addVowel('O')
        break
      case 'ɵ':
        addVowel('O')
        break
      case 'ʊ':
        addVowel('O')
        break
      case 'ɤ':
        addVowel('O')
        break
      case 'ɯ':
        addVowel('O')
        break
      case 'ɔ':
        addVowel('o$')
        break
      case 'ʉ':
        addVowel('u')
        break
      case 'ʌ':
        addVowel('U')
        break
      case 'ə':
        addVowel('U')
        break
      case 'ǝ':
        addVowel('U')
        break
      case 'ɞ':
        addVowel('U')
        break
      case 'ɹ':
        addVowel('u$')
        break
      case 'u':
        addVowel('u')
        break
      case 'ɓ':
        addConsonant('b?')
        break
      case 'ʙ':
        addConsonant('bb')
        break
      case 'ɖ':
        addConsonant('d!')
        break
      case 'ǂ':
        addConsonant('d*')
        break
      case 'θ':
        addConsonant('c')
        break
      case 'ð':
        addConsonant('C')
        break
      case 'ɸ':
        addConsonant('F')
        break
      case 'ɡ':
        addConsonant('g')
        break
      case 'ɢ':
        addConsonant('g')
        break
      case 'ɠ':
        addConsonant('g?')
        break
      case 'ʛ':
        addConsonant('g?')
        break
      case 'ɟ':
        addConsonant('g')
        addFeature('palatalization')
        break
      case 'ʄ':
        addConsonant('g?')
        addFeature('palatalization')
        break
      case 'ħ':
        addConsonant('Hh!')
        break
      case 'ɦ':
        addConsonant('hh')
        break
      case 'x':
        addConsonant('H')
        break
      case 'χ':
        addConsonant('H')
        break
      case 'χ':
        addConsonant('H')
        break
      case 'ç':
        addConsonant('h')
        addFeature('palatalization')
        break
      case 'c':
        addConsonant('k')
        addFeature('palatalization')
        break
      case 'ʐ':
        addConsonant('J')
        break
      case 'ʒ':
        addConsonant('j')
        break
      case 'ɮ':
        addConsonant('Z')
        break
      case 'ʑ':
        addConsonant('j')
        addFeature('palatalization')
        break
      case 'k':
        addConsonant('k')
        break
      case 'ǃ':
        addConsonant('k*')
        break
      case 'q':
        addConsonant('K')
        break
      case 'm':
        addConsonant('m')
        break
      case 'n':
        addConsonant('n')
        break
      case 'ɳ':
        addConsonant('N')
        break
      case 'ŋ':
        addConsonant('q')
        break
      case 'ɴ':
        addConsonant('q')
        break
      case 'ɲ':
        addConsonant('n')
        addFeature('palatalization')
        break
      case 'l':
        addConsonant('l')
        break
      case 'ɭ':
        addConsonant('L')
        break
      case 'ʎ':
        addConsonant('l')
        addFeature('palatalization')
        break
      case 'ǁ':
        addConsonant('l*')
        break
      case 'p':
        addConsonant('p')
        break
      case 'ʘ':
        addConsonant('p*')
        break
      case 'r':
        addConsonant('r')
        break
      case 'ɾ':
        addConsonant('r')
        break
      case 'ɽ':
        addConsonant('R')
        break
      case 'ɣ':
        addConsonant('Q')
        break
      case 'ʁ':
        addConsonant('Q')
        break
      case 'ʀ':
        addConsonant('QQ')
        break
      case 'ɬ':
        addConsonant('S')
        break
      case 's':
        addConsonant('s')
        break
      case 't':
        addConsonant('t')
        break
      case 'ʈ':
        addConsonant('T')
        break
      case 'ǀ':
        addConsonant('t*')
        break
      case 'v':
        addConsonant('v')
        break
      case 'ʋ':
        addConsonant('V')
        break
      case 'ⱱ':
        addConsonant('V')
        break
      case 'β':
        addConsonant('V')
        break
      case 'w':
        addConsonant('w')
        break
      case 'ʍ':
        addConsonant('w')
        addFeature('voiceless')
        break
      case 'ɰ':
        addConsonant('W')
        break
      case 'ʃ':
        addConsonant('x')
        break
      case 'ʂ':
        addConsonant('X')
        break
      case 'ɕ':
        addConsonant('x')
        addFeature('palatalization')
        break
      case 'j':
        addConsonant('y')
        break
      case 'ʝ':
        addConsonant('y')
        break
      case 'ɥ':
        addConsonant('yw~')
        break
      case 'ɗ':
        addConsonant('d')
        addFeature('implosion')
        break
      case 'z':
        addConsonant('z')
        break
      case 'ʔ':
        if (result.last.consonant?.value !== "'") {
          addConsonant("'")
        }
        break
      case 'ʕ':
        addConsonant('Q')
        break
      case 'ʱ':
        addConsonant('hh~')
        break
      case 'ˀ':
        if (result.last.consonant?.value !== "'") {
          addConsonant("'")
        }
        break
      case 'ɫ':
        addConsonant('l')
        addFeature('velarization')
        break
      case 'ɝ':
        addVowel('u~')
        break
      case 'ŏ':
        addVowel('o')
        break
      case 'ĕ':
        addVowel('e')
        break
      case 'ḛ':
        addVowel('e')
        addFeature('nasalization')
        break
      case '\u030a':
        addFeature('voiceless')
        break
      case `${m.d.tilde}`:
        addFeature(`nasalization`)
        break
      case 'ṵ':
        addVowel('u')
        addFeature('nasalization')
        break
      case 'ḭ':
        addVowel('i')
        addFeature('nasalization')
        break
      case '̚':
        addFeature('stop')
        break
      case '\u031a':
        addPunctuation('=.')
        break
      case '-':
        addPunctuation('=-')
        break
      case 'â':
      case 'ǎ':
        addVowel('a')
        break
      case 'ǐ':
      case 'î':
        addVowel('i')
        break
      case 'ó':
        addVowel('o')
        captureAllTones('˦')
        result.last.vowels = []
        break
      case 'ô':
      case 'ǒ':
        addVowel('o')
        break
      case 'ê':
      case 'ě':
        addVowel('e')
        break
      case 'ǔ':
      case 'û':
        addVowel('u')
        break
      case 'ý':
      case 'ŷ':
        addConsonant('y')
        break
      case '\u0302':
      case '\u030c':
        break
      case '\u031d':
        break
      case '\u031e':
        break
      case '\u0320':
        addFeature('non-syllabic')
        break
      case '\u0326':
        break
      case '\u032a':
        break
      case '\u0339':
        break
      case '\u035c':
        break
      case '\u0361':
        break
      case '\u0306': // extra short vowel
        addFeature('short')
        break
      case '\u032A': // dental
        addFeature('dental')
        break
      case '\u02CC': // syllablic
      case '\u0329': // syllabic
      case '\u02FD': // apical
      case '\u033A': // apical
      case '+':
      case "'":
        break
      case '(':
      case ')':
        break
      case m.u.tilde:
        addFeature('nasalization')
        break
      case 'ʼ':
        addFeature('ejection')
        break
      case '\u02F3': // voiceless
      case '\u0325': // voiceless
        addFeature('voiceless')
        break
      case 'ʲ':
        addFeature('palatalization')
        break
      case 'ʷ':
        addFeature('labialization')
        break
      case 'ˠ':
        addFeature('velarization')
        break
      case 'ˤ':
        addFeature('pharyngealization')
        break
      case 'ː':
        addFeature('long')
        break
      case '-':
        break
      case 'a':
        addVowel('a')
        break
      case 'e':
        addVowel('e')
        break
      case 'o':
        addVowel('o')
        break
      case 'i':
        addVowel('i')
        break
      case 'ɛ':
        addVowel('E')
        break
      case 'ŋ':
        addConsonant('q')
        break
      case 'b':
        addConsonant('b')
        break
      case 'c':
        addConsonant('c')
        break
      case 'd':
        addConsonant('d')
        break
      case 'f':
        addConsonant('f')
        break
      case 'g':
        addConsonant('g')
        break
      case 'h':
        addConsonant('h')
        break
      case 'j':
        addConsonant('j')
        break
      case 'k':
        addConsonant('k')
        break
      case 'l':
        addConsonant('l')
        break
      case 'm':
        addConsonant('m')
        break
      case 'n':
        addConsonant('n')
        break
      case 'p':
        addConsonant('p')
        break
      case 'q':
        addConsonant('q')
        break
      case 'r':
        addConsonant('r')
        break
      case 's':
        addConsonant('s')
        break
      case 't':
        addConsonant('t')
        break
      case 'v':
        addConsonant('v')
        break
      case 'w':
        addConsonant('w')
        break
      case 'x':
        addConsonant('x')
        break
      case 'y':
        addConsonant('y')
        break
      case 'z':
        addConsonant('z')
        break
      case '\u0348': // tense
        addFeature('tense')
        break
      case '\u032F': // non-syllabic
        addFeature('non-syllabic')
        break
      case '\u031f':
        break
      case 'ï':
        addVowel('i')
        break
      case 'è':
        addVowel('e')
        captureAllTones('˨')
        result.last.vowels = []
        break
      case 'ì':
        addVowel('i')
        captureAllTones('˨')
        result.last.vowels = []
        break
      case m.u.grave:
        captureAllTones('˨')
        result.last.vowels = []
        break
      case m.u.acute:
        captureAllTones('˦')
        result.last.vowels = []
        break
      case 'ī':
        addVowel('i')
        result.last.vowels = []
        break
      case 'é':
        addVowel('e')
        captureAllTones('˦')
        result.last.vowels = []
        break
      case 'à':
        addVowel('a')
        captureAllTones('˨')
        result.last.vowels = []
        break
      case 'ò':
        addVowel('o')
        captureAllTones('˨')
        result.last.vowels = []
        break
      case 'ā':
        addVowel('a')
        result.last.vowels = []
        break
      case 'á':
        addVowel('a')
        captureAllTones('˦')
        result.last.vowels = []
        break
      case 'í':
        addVowel('i')
        captureAllTones('˦')
        result.last.vowels = []
        break
      case 'ù':
        addVowel('u')
        captureAllTones('˨')
        result.last.vowels = []
        break
      case 'ú':
        addVowel('u')
        captureAllTones('˦')
        result.last.vowels = []
        break
      case 'ă':
        addVowel('a')
        addFeature('short')
        break
      case '.': // syllable
        break
      case m.u.macron:
        result.last.vowels = []
        break
      case '\u02C8': // modifier vertical line
        result.pendingStress = true
        break
      case '˥':
      case '˦':
      case '˧':
      case '˨':
      case '˩':
        captureAllTones(part)
        break
      case '\u0361': // tie
      case '\u035C': // bottom tie
        break
      case '\u0300':
        captureAllTones('˨')
        result.last.vowels = []
        break
      default:
        throw new Error(part)
    }
  }

  function captureAllTones(first: string) {
    const tones: Array<string> = [TONE[first] as string]
    while (true) {
      switch (parts[i]) {
        case '˥':
        case '˦':
        case '˧':
        case '˨':
        case '˩':
          const part = parts[i++]
          if (part) {
            const tone = TONE[part]
            if (tones[tones.length - 1] !== tone && tone) {
              tones.push(tone)
            }
          }
          break
        case 'ˀ':
          if (result.last.consonant?.value !== "'") {
            addConsonant("'")
          }
          i++
          break
        default:
          addTones(tones)
          return
      }
    }
  }

  return serialize(result)

  function addTones(tones: Array<string>) {
    if (!options.tones) {
      return
    }

    const vowels = result.last.vowels
    let i = 0

    while (i < vowels.length - 1 && tones.length) {
      const tone = tones.shift()
      const vowel = vowels[i]
      assert(vowel)
      vowel.tone = tone
      i++
    }

    const lastVowel = vowels[vowels.length - 1]
    assert(lastVowel)

    if (tones.length) {
      lastVowel.tone = tones.shift()
    }

    const newVowels: Array<Vowel> = new Array(tones.length)
      .fill(0)
      .map((x, i) => ({
        tone: tones[i],
        type: 'vowel',
        value: lastVowel.value,
      }))

    if (newVowels.length && lastVowel.long) {
      const newLastVowel = newVowels[newVowels.length - 1]
      assert(newLastVowel)
      newLastVowel.long = true
      lastVowel.long = false
    }

    if (newVowels.length) {
      result.last.vowels.push(...newVowels)
      const newVowel = newVowels[newVowels.length - 1]
      assert(newVowel)
      result.last.vowel = result.last.out = newVowel
    }
  }

  function addVowel(x: string) {
    const letter: Vowel = { type: 'vowel', value: x }

    if (result.pendingStress) {
      delete result.pendingStress
      letter.stress = true
    }
    // we added consonants after the last vowels, now we are adding vowels again.
    if (result.last.vowels.length && result.last.consonants.length) {
      result.last.vowels = []
    }

    if (result.last.consonants.length) {
      result.last.consonants = []
    }

    const vowelSet = result.last.vowels.length ? result.last.vowels : []

    if (!vowelSet.length) {
      result.out.push(vowelSet)
    }

    result.last.vowels = vowelSet

    vowelSet.push(letter)
    result.last.out = letter
    result.last.vowel = letter
  }

  function addFeature(type: Feature) {
    switch (type) {
      case 'implosion':
        assert(result.last.consonant)
        result.last.consonant.implosion = true
        break
      case 'voiceless': {
        assert(result.last.consonant)
        switch (result.last.consonant.value) {
          case 'b':
            result.last.consonant.value = 'p'
            break
          case 'd':
            result.last.consonant.value = 't'
            break
          case 'g':
            result.last.consonant.value = 'k'
            break
          default:
            result.last.consonant.voice = false
            break
        }
        break
      }
      case 'aspiration':
        assert(result.last.consonant)
        result.last.consonant.aspiration = true
        break
      case 'dental':
        assert(result.last.consonant)
        result.last.consonant.dental = true
        break
      case 'pharyngealization':
        assert(result.last.consonant)
        result.last.consonant.pharyngealization = true
        break
      case 'palatalization':
        assert(result.last.consonant)
        result.last.consonant.palatalization = true
        break
      case 'glottalization':
        assert(result.last.consonant)
        result.last.consonant.glottalization = true
        break
      case 'velarization':
        assert(result.last.consonant)
        result.last.consonant.velarization = true
        break
      case 'nasalization':
        assert(result.last.vowel)
        result.last.vowel.nasalization = true
        break
      case 'labialization':
        assert(result.last.consonant)
        result.last.consonant.labialization = true
        break
      case 'ejection':
        assert(result.last.consonant)
        result.last.consonant.ejection = true
        break
      case 'stop':
        assert(result.last.consonant)
        result.last.consonant.stop = true
        break
      case 'tense':
        assert(result.last.consonant)
        if (result.last.consonant.value.match('x')) {
          const second =
            result.last.consonants[result.last.consonants.length - 2]
          if (second && second.value.match(/[ptk]/)) {
            second.tense = true
            break
          }
        }
        result.last.consonant.tense = true
        break
      case 'long':
        assert(result.last.out)
        if (result.last.out.type !== 'punctuation') {
          result.last.out.long = true
        }
        break
      case 'short':
        assert(result.last.vowel)
        result.last.vowel.short = true
        break
      case 'non-syllabic':
        assert(result.last.vowel)
        result.last.vowel.syllabic = false
        break
      default:
        throw new Error(type)
    }
  }

  function addConsonant(x: string) {
    const letter: Consonant = { type: 'consonant', value: x }
    const consonantSet: Array<Consonant> = result.last.consonants.length
      ? result.last.consonants
      : []

    if (!consonantSet.length) {
      result.out.push(consonantSet)
    }

    consonantSet.push(letter)

    result.last.consonants = consonantSet

    result.last.out = letter
    result.last.consonant = letter
  }

  function addPunctuation(type: string) {
    result.last.consonants = []
    result.last.vowels = []
    result.out.push([{ type: 'punctuation', value: type }])
  }
}

function serialize(result: Make) {
  const out: Array<string> = []

  result.out.forEach(array => {
    array.forEach(node => {
      const link: Array<string> = [node.value]
      switch (node.type) {
        case 'vowel':
          if (node.nasalization) {
            link.push('&')
          }
          if (node.tone) {
            link.push(node.tone)
          }
          if (node.syllabic === false) {
            link.push('@')
          }
          if (node.short) {
            link.push('!')
          }
          if (node.long) {
            link.push('_')
          }
          if (node.stress) {
            link.push('^')
          }
          break
        case 'consonant':
          if (node.tense) {
            link.push('@')
          }
          if (node.dental) {
            link.push('~')
          }
          if (node.pharyngealization) {
            link.push('Q~')
          }
          if (node.palatalization) {
            link.push('y~')
          }
          if (node.velarization) {
            link.push('G~')
          }
          if (node.labialization) {
            link.push('w~')
          }
          if (node.aspiration) {
            link.push('h~')
          }
          if (node.ejection) {
            link.push('!')
          }
          if (node.implosion) {
            link.push('?')
          }
          if (node.voice === false) {
            link.push('h!')
          }
          if (node.stop) {
            link.push('.')
          }
          if (node.long) {
            link.push(...link.slice())
          }
          if (node.glottalization) {
            throw new Error('glottallization handler missing')
          }
        default:
      }
      out.push(link.join(''))
    })
  })

  return out.join('')
}

function assert(x: unknown): asserts x {
  if (!x) {
    throw new Error('assertion failed')
  }
}
