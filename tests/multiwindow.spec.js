import { test, expect } from "@playwright/test"
//const {expect,test} = require('playwright/test')
//const { chromium } = require('playwright'); // or 'firefox' or 'webkit'

//(async () => {
  //const browser = await chromium.launch({ headless: false }); // set headless: false to see the windows
test('MultiTab', async({browser})=>{
  const context = await browser.newContext()
  const page = await context.newPage()
  const popupPages = [];
  context.on('page', async popup => {

    //await popup.waitForLoadState(3000)
    popupPages.push(popup)
  })
  await page.goto("https://freelance-learn-automation.vercel.app/login")
  await Promise.all([
    page.click("(//a[contains(@href,'facebook')])[1]"),
    page.click("(//a[contains(@href,'reddit')])[1]"),
    page.click("(//a[contains(@href,'twitter')])[1]"),
  ])
  await page.waitForTimeout(9000)
  for (let i = 0; i < popupPages.length; i++) {
    const title = await popupPages[i].title()
    //console.log(`Popup ${i + 1} title: ${title}`)
    console.log(title)
  }
  
  await browser.close()
})