import { test, expect } from "@playwright/test"
//import LoginPage from "../pages/loginpage"
const LoginPage=require("../pages/loginpage")
const CaptchaPage=require("../pages/captchapage")

test("Validate Login Page with POM", async ({page})=>{
    await page.goto("https://www.yahoo.com/")
    await page.waitForTimeout(6000)
    const loginPage= new LoginPage(page)
    const capPage= new CaptchaPage(page)
    loginPage.loginToApplication()
    capPage.captchPage()
})