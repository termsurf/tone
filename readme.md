
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<p align='center'>
  <img src='https://github.com/mountbuild/tone-script/blob/build/tone.png?raw=true'/>
</p>

<br/>
<br/>
<br/>

<h3 id="summary">Summary</h3>

Tone script (esoteric name _Hanákana_) is a Universal Writing System (UWS), capable of representing all human voice sounds in a concise and readable script. This means you can write any language in tone script script (constructed language or natural language) and read it without having to learn that language's specific quirks. Tone script is a sound-based script like the [Ancient Runes](https://en.wikipedia.org/wiki/Runes), which means when you read see a symbol/letter, you know exactly how it is pronounced. There are no weird edge cases or specific words for which you have to memorize the sound. You simply learn the script and can pronounce the words and texts. You can find how to pronounce the letters in the [PDF guide](https://github.com/mountbuild/tone-script/blob/build/guide.pdf) or partly on [leaf.surf](https://leaf.surf). Print out the [exercises](https://github.com/mountbuild/tone-script/blob/build/exercise.pdf) to learn how to write and pronounce them too! Try typing it interactively [here](https://mountbuild.github.io/tone-script)!

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/example.jpg?raw=true" />
</p>

You may note that Linguistics also has the International Phonetic Alphabet ([IPA](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet)), which seems to accomplish a similar thing. But the IPA is not for writing anything but the most detailed pronunciation guides, not for writing sentences or long texts. Tone script is meant for the later, for writing like you would in a normal language. The ASCII encoding is mapped to IPA for your knowledge in the [call script](https://github.com/mountbuild/call-script). Ideally, tone script would be included in the Unicode standard. But [that is unlikely](http://www.unicode.org/pending/proposals.html) until it is used widely. We have suggested it be used as a writing system [on Mars](https://twitter.com/mountbuild/status/1372723474741927938) 😂. Here is a [book](https://www.amazon.com/32-Languages-Words-Scripts-Multilingual/dp/1951702638) using it as well.

<br/>
<br/>

<p align="center"><a href="https://www.amazon.com/32-Languages-Words-Scripts-Multilingual/dp/1951702638"><img width="160" src="https://github.com/mountbuild/tone-script/blob/build/book.png?raw=true"/></a></p>

<h3 id="sounds-32">The 32 Sounds</h3>

These are the 32 main sounds. Everything else are variations of these sounds. These "variations" are accomplished in a structured way, see the [guide](https://github.com/mountbuild/tone-script/blob/build/guide.pdf). Indic retroflex consonants are added with a dot on the tailless side. Arabic sounds are added with a dot on the tailed side usually. Clicks are mapped to the closest mouth-position-oriented sound. Ejectives and implosives are simply added with accent marks. Etc.

```
beat i
lake e
call a
home o
tune u

kick i
mess e
last a
duck u
cook o

moon m
note n
ring ng
game g
dock d
boat b
team t
pick p
king k
hook h
seek s
fish f
vote v
zone z
yell y
wind w
thud th
ship sh
rule r
loom l

then th
joke j (sure as in measure)
```

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/transform.gif?raw=true" height="300" />
</p>

## Usage

```bash
npm install @mountbuild/tone-script -g
```

To get access to the font for your own system, either just click and download the [font.otf](https://github.com/mountbuild/tone-script/blob/build/font.otf) directly, or do this to copy it after you've installed the NPM package:

```bash
tone-script use tone-script.otf
```

To print tone-script-font-ready text in the terminal, use:

```bash
tone-script print "he+lo wrld"
tone-script print "$(<story.txt)"
```

Note, you need to write it in tone script ASCII (called "call script"), which you can see by looking at the form.js file.

To view it in the browser fully rendered:

```bash
tone-script view example.txt
```

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/tutorial.gif?raw=true" />
</p>

To use it in pure JavaScript:

```bash
npm install @mountbuild/tone-script
```

Then in JavaScript or Node.js land:

```js
const toTone = require('@mountbuild/tone-script')

document.body.innerHTML = toTone('he+lo wrld')
```

Here is how you might use it more robustly:

```js
const lines = `fru+m ma+unt yu faind c+u+ stoun, ritxiq tu c+u+ klaud
no we+r an rc du yu fil c+u+ pa+wr u+v netxr al u+ra+und
wi+c c+u+ klaud so klos, yu ka+n si, tu+tx, a+nd test
fidiq yor e+nrdji tu c+u+ stoun wi+c hest
ma+unt holdz i+t xep, laik c+u+ sikri+t bal`
  .split(/\n+/)
  .map(line => line.split(/\s+/).map(toTone).join(' '))
  .join('\n')

document.body.innerHTML = lines.split(/\n/)
  .map(line => `<div>${line}</div>`)
  .join('\n')
```

## Main Symbols

Here are the consonants and vowels in their main form (without tone or stress markers).

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/symbols.png?raw=true" />
</p>

Note, to add "aspiration" to a sound, you add the corresponding "h" symbol after the main symbol. To add nasalization to a vowel, you add a two dots below the vowel. Long vowels are made by writing two vowel letters.

## Phonology

Here is the consonant IPA phonology chart mapping.

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/phonology.png?raw=true" />
</p>

## Vowel Symbols

Here are all the possible vowel combinations. The combination elements are: tone (1, 2, 3, 4, or 5, 1 being the lowest, 5 being the highest), nasality, and stress. In languages with only 3 tones you can just use tones 2, 3, and 4, but in languages with 5 tones you need all 5. Nasality is done with two dots under the vowel. Stress is done with one dot above the vowel. Low tones "fall" and so are on the right, while high tones "rise", and so are on the left.

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/vowels.png?raw=true" />
</p>

<h3 id="license">License</h3>

Copyright 2021 <a href='https://mount.build'>Mount</a>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

<h3 id="mount">Mount</h3>

Tone script is being developed by the folks at [Mount](https://mount.build), a California-based project for helping humanity master information and computation. Mount started off in the winter of 2008 as a spark of an idea, to forming a company 10 years later in the winter of 2018, to a seed of a project just beginning its development phases. Mount funds tone script's development. It is entirely bootstrapped by working full time and running [Etsy](https://etsy.com/shop/mountbuild) and [Amazon](https://www.amazon.com/s?rh=p_27%3AMount+Build) shops. Also find us on [Facebook](https://www.facebook.com/mountbuild), [Twitter](https://twitter.com/mountbuild), and [LinkedIn](https://www.linkedin.com/company/mountbuild). Check out our other GitHub projects as well!

<br/>
<br/>
