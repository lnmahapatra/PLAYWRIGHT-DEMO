import { test, expect } from "@playwright/test"
test('File upload Test', async ({ page })=>{
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.waitForTimeout(3000)
  await page.locator("#file-upload").setInputFiles("./upload/Lead QA.txt")
  await page.locator('#file-submit').click()
  expect(await page.locator('//h3')).toHaveText("File Uploaded")
})

test('KeyPress Test', async ({ page })=>{
  await page.goto('https://www.google.com')
  await page.waitForTimeout(3000)
  await page.locator("textarea[name='q']").focus()
  
  await page.keyboard.type("laxmi narayan")
  await page.keyboard.press("ArrowLeft")
  await page.keyboard.down("Shift")
  for(let i=0; i<6; i++){
    await page.keyboard.press("ArrowLeft")
  }
  await page.keyboard.press("Backspace")


})