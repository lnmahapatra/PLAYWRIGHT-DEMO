import { test, expect } from "@playwright/test"
test.use({ viewport: { width: 1500, height: 1000 } })

test("Validate Login Page", async function ({ page }) {
  await page.goto("https://www.rediff.com/")
  await page.locator("//a[normalize-space()='Sign in']").click()
  await expect(page).toHaveURL(/cgi-bin/)
  console.log(await page.viewportSize().width)
  console.log(await page.viewportSize().height)
  //await page.waitForTimeout(3000)
  const checkpoint = await page.getByText("Sign in").textContent()
  console.log("Switch to log in page" + checkpoint)
  expect(checkpoint.includes("Sign")).toBeTruthy()
  expect(checkpoint === 'Sign In').toBeTruthy()
  await page.locator("//input[@id='login1']").fill('lnmahapatra', { delay: 200 })
  await page.locator("//input[@id='password']").fill('lnmahapatra')
  await page.locator("button[name='proceed']").click()

})
// test("Validate Context Page", async function ({page}) {
//   const context = await browser.newContext()
//   // Create a new page inside context.
//   const page = await context.newPage()
//   await page.goto('https://example.com')
//   // Dispose context once it's no longer needed.
//   await context.close()
// })