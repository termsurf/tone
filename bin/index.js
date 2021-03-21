#!/usr/bin/env node

start('hanákana')

const HELP = `
  $ hanakana print "$(<input.txt)"
  $ hanakana use hanakana.ttf
`

const command = process.argv[2]
const input = process.argv[3]

switch (command) {
  case 'help':
    console.log(HELP)
    break
  case 'use':
    use()
    break
  case 'print':
    print()
    break
  case 'view':
    view()
    break
}

function use() {
  const fs = require('fs')
  fs.copyFileSync(`${__dirname}/../font.otf`, input)
}

function print() {
  const toHanakana = require('..')
  console.log(toHanakana(input))
}

function view() {
  const express = require('express')
  const fs = require('fs')
  const toHanakana = require('..')
  const app = express()
  app.use(express.static(`${__dirname}/..`))
  app.get('/', (_, res) => {
    const html = fs.readFileSync(`${__dirname}/index.html`, 'utf-8')
    const text = fs.readFileSync(input, 'utf-8')
      .split(/\n/)
      .map(line => `<p>${toHanakana(line)}</p>`)
      .join('\n')
    res.send(html.replace(/\{ text \}/, text))
  })
  app.listen(3773)
  console.log(`
  visit http://localhost:3773 to view your file
  `)
}

function start(c) {
  const z = String.fromCharCode(27)
  const t = String.fromCharCode(7)
  process.stdout.write(`${z}]0;${c}${t}`)
}
