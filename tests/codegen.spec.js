import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.rediff.com/');
  await page.locator("//a[text()='Sign in']").click();
  await page.locator('#login1').fill('lanmahapatra');
  await page.locator('#password').fill('odagaon1!');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('img', { name: 'Rediffmail' }).click();
  await page.getByRole('link', { name: 'Back to Login' }).click();
});