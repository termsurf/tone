
const Puppeteer = require('puppeteer')
const fs = require('fs')

const type = process.argv[2]

Puppeteer.launch({
  headless: false,
  args: [`--window-size=1024,1024`],
  defaultViewport: {
    width:1024,
    height:1024
  }
}).then(b => {
  b.newPage().then(p => {
    p.goto(`file:///Users/lancepollard/start/drumwork/deck/tone/generator/phonology.html`).then(() => {
      console.log('loading png')
      // p.setContent(html)
      p.waitForFunction('window.DONE', { timeout: 0 }).then(() => {
        console.log('creating png')
        p.screenshot({
          fullPage: true,
          path: `./view/phonology.4.png`,
          width: '1024px',
        }).then(() => {
          b.close()
        })
      })
    })
  })
})
