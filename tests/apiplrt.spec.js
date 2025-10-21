import { test, expect } from "@playwright/test"
test("API Get Request", async ({ request }) => {
    const response = await request.get("https://api.restful-api.dev/objects/7")
    expect(response.status()).toBe(200)
    await expect(response).toBeOK()
    const text = await response.text()
    console.log(text)
    expect(text).toContain('Apple MacBook Pro 16')
    //console.log("*"*30)  
    console.log(await response.json())
})

test("API POST Request", async ({ request }) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    })
    // expect(response.status()).toBe(500)
    const text = await response.text()
    console.log(text)
    // expect(text).toContain("1 TB")
    // console.log(await response.json())
})

test("API PUT Request", async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        "data": {
            "first_name": "lnm",
            "last_name": "teacher"
        }
    })
    expect(response.status()).toBe(401)
    const text = await response.text()
    console.log(text)
    expect(text).toContain("teacher")
    console.log(await response.json())
})

test("API DELETE Request", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/2")
    //expect(response.status()).toBe(204)
    expect(response.status()).toBe(401)

})