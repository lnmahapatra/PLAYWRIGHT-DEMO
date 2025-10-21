const {expect}=require("@playwright/test")

class CaptchaPage{

    constructor(page) {
        this.page = page
        this.profile = "//label[@id='ybarAccountMenuOpener']"
        this.captchinput = "//input[@id='imagetext']"
        this.yahomail = "//a[@id='ybar-logo']"
        this.signout="//a/span[text()='Sign out']"
        this.signin="//a[@id='ybarMailLink']"
    }
    async captchPage() {
        await expect(this.page.locator(this.yahomail)).toBeVisible()
        await expect(this.page.locator(this.profile)).hover()
        await this.page.click(this.signout)
        await expect(this.page.locator(this.signin)).toBeVisible()
              
    }
}
module.exports=CaptchaPage;