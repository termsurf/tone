
const Puppeteer = require('puppeteer')
const fs = require('fs')

const type = process.argv[2]

Puppeteer.launch().then(b => {
  b.newPage().then(p => {
    p.goto(`file:///Users/lancepollard/start/mount/tone-script/tmp/exercise.html`).then(() => {
      console.log('loading pdf')
      // p.setContent(html)
      p.waitForFunction('window.DONE', { timeout: 0 }).then(() => {
        console.log('creating pdf')
        p.pdf({
          scale: 1,
          path: `exercise.pdf`,
          width: '1800px',
          height: '2700px',
          printBackground: true,
          preferCSSPageSize: true
        }).then(() => {
          b.close()
        })
      })
    })
  })
})
