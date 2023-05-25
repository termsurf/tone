const MARK = {
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
    N: { type: 'consonant', value: 'N' },
    q: { type: 'consonant', value: 'q' },
    g: { type: 'consonant', value: 'g' },
    d: { type: 'consonant', value: 'd' },
    b: { type: 'consonant', value: 'b' },
    p: { type: 'consonant', value: 'p' },
    t: { type: 'consonant', value: 't' },
    T: { type: 'consonant', value: 'T' },
    k: { type: 'consonant', value: 'k' },
    K: { type: 'consonant', value: 'K' },
    h: { type: 'consonant', value: 'h' },
    H: { type: 'consonant', value: 'H' },
    s: { type: 'consonant', value: 's' },
    S: { type: 'consonant', value: 'S' },
    f: { type: 'consonant', value: 'f' },
    F: { type: 'consonant', value: 'F' },
    V: { type: 'consonant', value: 'V' },
    v: { type: 'consonant', value: 'v' },
    z: { type: 'consonant', value: 'z' },
    Z: { type: 'consonant', value: 'Z' },
    j: { type: 'consonant', value: 'j' },
    J: { type: 'consonant', value: 'J' },
    x: { type: 'consonant', value: 'x' },
    X: { type: 'consonant', value: 'X' },
    c: { type: 'consonant', value: 'c' },
    'C~': { type: 'consonant', value: 'C~' },
    C: { type: 'consonant', value: 'C' },
    y: { type: 'consonant', value: 'y' },
    W: { type: 'consonant', value: 'W' },
    w: { type: 'consonant', value: 'w' },
    Q: { type: 'consonant', value: 'Q' },
    "'": { type: 'consonant', value: "'" },
    l: { type: 'consonant', value: 'l' },
    L: { type: 'consonant', value: 'L' },
    r: { type: 'consonant', value: 'r' },
    R: { type: 'consonant', value: 'R' },
    '!': { truncation: true },
    _: { elongation: true },
    '^': { stress: true },
    '?': { implosion: true },
    '*': { click: true },
    '~': { dentalization: true },
    '&': { nasalization: true },
};
export default parse;
function parse(string) {
    let x = string;
    const chunks = [];
    let i = 0;
    while (x.length) {
        let matched = false;
        symbol: for (const key in MARK) {
            if (x.startsWith(key)) {
                const val = MARK[key];
                if (val && val.type) {
                    chunks.push({ ...val });
                }
                else {
                    chunks[chunks.length - 1] = {
                        ...chunks[chunks.length - 1],
                        ...val,
                    };
                }
                x = x.slice(key.length);
                i += key.length;
                matched = true;
                break symbol;
            }
        }
        if (!matched) {
            console.error(string.slice(0, i));
            throw new Error('Invalid characters found');
        }
    }
    return demarcate(chunks);
}
function demarcate(chunks) {
    let state = 'start';
    const slots = [];
    let slot;
    chunks.forEach((chunk, i) => {
        switch (state) {
            case 'start':
                switch (chunk.type) {
                    case 'vowel':
                        state = 'vowel';
                        break;
                }
                break;
            case 'vowel':
                switch (chunk.type) {
                    case 'vowel': {
                        const last = chunks[i - 1];
                        switch (last && last.value) {
                            case 'i':
                                switch (chunk.value) {
                                    case 'U':
                                    case 'u':
                                    case 'o':
                                    case 'a':
                                    case 'e':
                                    case 'A':
                                    case 'E':
                                        slot = { base: i - 1, head: i - 1 };
                                        slots.push(slot);
                                        break;
                                }
                            case 'o':
                                switch (chunk.value) {
                                    case 'a':
                                    case 'A':
                                        slot = { base: i - 1, head: i - 1 };
                                        slots.push(slot);
                                        break;
                                }
                        }
                        break;
                    }
                    case 'consonant':
                        state = 'consonant';
                        slot = { base: i, head: i };
                        slots.push(slot);
                        break;
                }
                break;
            case 'consonant':
                switch (chunk.type) {
                    case 'vowel':
                        state = 'vowel';
                        break;
                    case 'consonant':
                        switch (chunk.value) {
                            case 'l':
                            case 'L':
                            case 'R':
                            case 'r':
                            case 'w':
                            case 'y':
                                assert(slot);
                                slot.head = i - 1;
                                slot = undefined;
                                break;
                            default:
                                if (!slot) {
                                    slot = { base: i, head: i };
                                    slots.push(slot);
                                }
                                slot.head = i;
                                break;
                        }
                        break;
                }
                break;
        }
    });
    const count = !slots.length || slots[slots.length - 1]?.head !== chunks.length - 1
        ? slots.length + 1
        : slots.length;
    const free = count === slots.length + 1;
    return { chunks, slots, free, count };
}
function assert(x) {
    if (!x) {
        throw new Error('assertion failed');
    }
}
//# sourceMappingURL=syllable.js.map