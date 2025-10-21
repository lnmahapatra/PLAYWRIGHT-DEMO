import { test, expect } from '@playwright/test'

test.skip('Autosuggetions Test', async ({ page })=>{
  await page.goto('https://www.google.com')
  await page.waitForTimeout(3000)
  await page.locator("textarea[name='q']").focus()
  await page.keyboard.type("laxmi narayan")
  await page.waitForSelector("//li['@role=presentation']")
  // await page,keyboard.press("ArrowDown")
  // await page,keyboard.press("Enter")
  //OR
   const element= await page.$$("//li['@role=presentation']")
   for(let i=0;i<element.length;i++){
      const text= await element[i].textContent()
      if(text.includes('photo'))
      {
        await element[i].click()
        break
      }
   }
})

test('Alerts handling', async ({ page })=>{
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
  await page.locator("//button[text()='Click for JS Alert']").click()
  page.on('dialog', async(dialogWindow)=>{
    expect(dialogWindow.type()).toContain("alert")
    expect(dialogWindow.message()).toContain("I am a JS Confirm")
    await dialogWindow.accept()
  })
})