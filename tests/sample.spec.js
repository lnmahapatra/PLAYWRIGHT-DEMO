const {expect,test} = require('playwright/test')

test("My First Test",async function ({page}) {
    expect(12).toBe(12)

})
test.skip("my 2nd test",async function ({page}) {
    expect(100).not.toBe(102)
    
})

test("my 3rd test",async function ({page}) {
    expect("Laxminaryan").toContain("Laxmi")
    
})
test("my 4th test",async function ({page}) {
    expect("Laxminaryan").toContain("Laxmi")
    expect(true).toBeTruthy()
})
test("my 5th test",async function ({page}) {
    expect("Laxminaryan".includes("A")).toBeFalsy()
  
})