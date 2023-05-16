
const tone = require('.')
// const words = require('../tone.land/seeds/words.json')

// test('a#&++*-_^b')
// test('a#&-*++_^b')
// test('ton')
// test('wa++i--ma++i--yuA++n')

// words.forEach(word => test(word.pronunciation))

test('byu^dy')

function test(a) {
  console.log(a, tone(a))
}
