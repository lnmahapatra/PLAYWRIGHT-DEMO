class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.uid="//input[@id='login-username']"
        this.next="//input[@id='login-signin']"
        this.pws="//input[@id='login-passwd']"
        this.login="//button[@id='login-signin']"
        this.signin="//header[@id='Header']//a[@id='ybarMailLink']"
    }

    async loginToApplication(){
        await this.page.click(this.signin)
        await this.page.fill(this.uid,"lnmahapatra",{delay:200})
        await this.page.click(this.next)
        await this.page.fill(this.pws,"Year2025@")
        await this.page.click(this.login)
    }
}
module.exports=LoginPage