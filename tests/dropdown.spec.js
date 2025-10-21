import { test, expect } from '@playwright/test'
//SELECT DROPDOWN ELEMENTS USING LABEL,VALUE AND INDEX
test('Dropdown Test', async ({ page })=>{
  await page.goto('https://practicesoftwaretesting.com/');
  await page.waitForTimeout(9000)
  await page.locator("select[aria-label='sort']").click()
  await page.locator("select[aria-label='sort']").selectOption({value:"price,desc"})
  await page.locator("select[aria-label='sort']").selectOption({lebel:"Price (High - Low)"})
  await page.locator("select[aria-label='sort']").selectOption({index:2})
  // const details = await page.locator("select[aria-label='sort']").textContent()
  // console.log("all dropdown vlaues :"+ details)
  // expect(details.includes("Name (Z - A)")).toBeTruthy()
  //OR
  await page.waitForTimeout(3000)
  let details = await page.$("select[aria-label='sort']")
  let allelement = await details.$$("option")
  let ddstatus = false
  for(let i=0;i<allelement.length;i++){
    let element=allelement[i]
    let value = await element.textContent()
    if(value.includes("Name (Z - A)")){
      ddstatus = true
      break
    }
    // console.log("All values in dropdown" + value)
  }
   await expect(ddstatus).toBeTruthy()
})

test('Mousehover Test', async ({ page })=>{
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(3000)
  await page.locator("//a[normalize-space()='Get started']").hover()
})
