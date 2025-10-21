import { test, expect } from "@playwright/test"
//const {test, expect} = require('playwright/test')
const testData = JSON.parse(JSON.stringify(require("../testlogin.json")))
//const testData = (require("../testlogin.json"))

test.describe("Login Test", function () {
  test.beforeEach( async ({ page })=>{
     await page.goto("https://freelance-learn-automation.vercel.app/login")
  })
  for (const data of testData) {
    test.describe(`Login with User ${data.id}`, function () {
      test('Application Login ', async ({ page }) => {
       
        await page.locator("//input[@id='email1']").fill(data.userid)
        await page.locator("//input[@id='password1']").fill(data.password)
        const pwc = await page.locator("//input[@id='password1']").textContent()
        console.log(pwc)
      })
    })
  }
})