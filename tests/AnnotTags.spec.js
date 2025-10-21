import { test, expect } from '@playwright/test'

test.skip('skip suggetions Test', async ({ page })=>{
  await page.goto('https://www.google.com')
})
test('fail suggetions Test', async ({ page })=>{
  test.fail()
})
test.fixme('fixme mark Test @bdd', async ({ page })=>{
  await page.goto('https://www.google.com')
})
test('only Test{ tag: [@regression, @profile] }', async ({ page })=>{
  await page.goto('https://www.bing.com')
  await browser.close()
})
test('slow mark Test @smoke', async ({ page })=>{
    test.slow()
  await page.goto('https://www.yahoo.com')
})
test('skipcondotional this test @bdd', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});