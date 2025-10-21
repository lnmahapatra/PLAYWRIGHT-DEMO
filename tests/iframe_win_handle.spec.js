//import { test, expect } from "@playwright/test"
const {expect,test} = require('playwright/test')

test('IFrame handle Test', async ({ page })=>{
  await page.goto('https://docs.oracle.com/javase/8/docs/api')
  const iframe1= await page.frameLocator("//frame[@name='packageListFrame']")
  await iframe1.locator("//a[text()='java.applet']").click()
  //await page.pause()  
})

test('Multiplewindow tab Test', async ({browser})=>{
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto("https://freelance-learn-automation.vercel.app/login")
 
  const [newPage]= await Promise.all
  ([
    context.waitForEvent("page"),
    page.locator("(//a[contains(@href,'facebook')])[1]").click()
  ])
  
  await newPage.locator("//input[@id='_r_9_']").fill("lnmahapatra@rediff.com")
  console.log(await newPage.title())
  await newPage.close()
  await page.getByPlaceholder("Enter Email").fill("lnmahapa")

})