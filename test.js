
const tone = require('.')
// const words = require('../tone.land/seeds/words.json')

// test('a#&++*-_^b')
// test('a#&-*++_^b')
// test('ton')
// test('wa++i--ma++i--yuA++n')

// words.forEach(word => test(word.pronunciation))

test('byu^dy')
test('diU--U-m')
test('ky~O!n')
test('ny~O-O+')
test('uu--u-y')
test('e-Qi-Qo$-')
test('a-a+fa+')
test('a-a-kpo$&-')
test('a-a+ri&+')
test('aa+si-ki+')
test('a+a+si-kiri-imu-')
test('aa+xa+a-ita-')
test('a-a-wE-')
test('a-a-yo-')
test('Omo$&lE-')
test('ya-u+ya-u+u-')
test('ka@ga@sh~Uqdjy~a@')
test('ka@_ga@hha@da@')
test('ka@ga@VoVo')
test('sa!a--a-w')
test('sO-!O--p\'!')

function test(a) {
  console.log(a, tone(a))
}
