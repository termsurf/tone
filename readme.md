
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<p align='center'>
  <img src='https://github.com/mountbuild/hanakana/blob/build/title.png?raw=true' width='500'/>
  <img src='https://github.com/mountbuild/hanakana/blob/build/description.png?raw=true' width='500'/>
</p>

<br/>

<p align='center'>
  <a href='#summary'>Summary</a>　　
  <a href='#usage'>Usage</a>　　
  <a href='#dictionaries'>Dictionaries</a>　　
  <a href='#dictionaries'>Symbols</a>　　
  <a href='#license'>License</a>
</p>

<br/>
<br/>
<br/>

<h3 id="summary">Summary</h3>

Hanákana is a Universal Writing System (UWS), capable of representing all human voice sounds in a concise and readable script. This means you can write any language in Hanákana script (constructed language or natural language) and read it without having to learn that language's specific quirks. Hanákana is a sound-based script like the [Ancient Runes](https://en.wikipedia.org/wiki/Runes), which means when you read see a symbol/letter, you know exactly how it is pronounced. There are no weird edge cases or specific words for which you have to memorize the sound. You simply learn the script and can pronounce the words and texts. You can find how to pronounce the letters in the [PDF guide](https://github.com/mountbuild/hanakana/blob/build/guide.pdf) or partly on [leaf.surf](https://leaf.surf).

<p align="center">
  <img src="https://github.com/mountbuild/hanakana/blob/build/example.jpg?raw=true" />
</p>

You may note that Linguistics also has the International Phonetic Alphabet ([IPA](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet)), which seems to accomplish a similar thing. But the IPA is not for writing anything but the most detailed pronunciation guides, not for writing sentences or long texts. Hanákana is meant for the later, for writing like you would in a normal language. The ASCII encoding is mapped to IPA for your knowledge at [ovo.js](https://github.com/mountbuild/ovo.js). Ideally Hanákana would be included in the Unicode standard. But [that is unlikely](http://www.unicode.org/pending/proposals.html) until it is used widely. We have suggested it be used as a writing system [on Mars](https://twitter.com/mountbuild/status/1372723474741927938) 😂.

These are the 32 main sounds. Everything else are variations of these sounds. These "variations" are accomplished in a structured way, see the [guide](https://github.com/mountbuild/hanakana/blob/build/guide.pdf). Indic retroflex consonants are added with a dot on the tailless side. Arabic sounds are added with a dot on the tailed side usually. Clicks are mapped to the closest mouth-position-oriented sound. Ejectives and implosives are simply added with accent marks. Etc.

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
  <img src="https://github.com/mountbuild/hanakana/blob/build/transform.gif?raw=true" height="300" />
</p>

## Usage

```bash
npm install @mountbuild/hanakana -g
```

To get access to the font for your own system:

```bash
hanakana use hanakana.otf
```

To print Hanakana-font-ready text in the terminal, use:

```bash
hanakana print "he+lo wrld"
hanakana print "$(<story.txt)"
```

To view it in the browser fully rendered:

```bash
hanakana view example.txt
```

To use it in pure JavaScript:

```bash
npm install @mountbuild/hanakana
```

Then in JavaScript or Node.js land:

```js
const toHanakana = require('@mountbuild/hanakana')

document.body.innerHTML = toHanakana('he+lo wrld')
```

Here is how you might use it more robustly:

```js
const lines = `fru+m ma+unt yu faind c+u+ stoun, ritxiq tu c+u+ klaud
no we+r an rc du yu fil c+u+ pa+wr u+v netxr al u+ra+und
wi+c c+u+ klaud so klos, yu ka+n si, tu+tx, a+nd test
fidiq yor e+nrdji tu c+u+ stoun wi+c hest
ma+unt holdz i+t xep, laik c+u+ sikri+t bal`
  .split(/\n+/)
  .map(line => line.split(/\s+/).map(toHanakana).join(' '))
  .join('\n')

document.body.innerHTML = lines.split(/\n/)
  .map(line => `<div>${line}</div>`)
  .join('\n')
```

## Dictionaries

Take note of the `dictionary` folder in this project, which has the beginnings of words in several languages with their pronunciation written in ASCII Hanákana (which can be directly transformed into Hanákana script using this library). Also take note of the `languages` folder, which has transformers for common language paradigms (like Chinese Pinyin) into Hanákana script. This way you can take a word written in a certain way using a certain formality, and get the Hanákana out of it.

## Symbols

<p align="center">
  <img src="https://github.com/mountbuild/hanakana/blob/build/symbols.png?raw=true" />
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

Hanakana.js is being developed by the folks at [Mount](https://mount.build), a California-based project for helping humanity master information and computation. Mount started off in the winter of 2008 as a spark of an idea, to forming a company 10 years later in the winter of 2018, to a seed of a project just beginning its development phases. Mount funds hanakana's development. It is entirely bootstrapped by working full time and running [Etsy](https://etsy.com/shop/mountbuild) and [Amazon](https://www.amazon.com/s?rh=p_27%3AMount+Build) shops. Also find us on [Facebook](https://www.facebook.com/mountbuild), [Twitter](https://twitter.com/mountbuild), and [LinkedIn](https://www.linkedin.com/company/mountbuild). Check out our other GitHub projects as well!

<br/>
<br/>

<p align='center'>
  <a href='https://twitter.com/mountbuild'>
    <img src='https://mount.build/slate/twitter.png' height='64' />
  </a>　　　　
  <a href='https://etsy.com/shop/mountbuild'>
    <img src='https://mount.build/slate/etsy.png' height='64' />
  </a>　　　　
  <a href='https://github.com/mountbuild'>
    <img src='https://mount.build/slate/github.png' height='64' />
  </a>　　　
  <a href='https://www.amazon.com/s?rh=p_27%3AMount+Build'>
    <img src='https://mount.build/slate/amazon.png' height='64' />
  </a>　　　
  <a href='https://www.facebook.com/mountbuild'>
    <img src='https://mount.build/slate/facebook.png' height='64' />
  </a>
</p>

<br/>
<br/>
