import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("Input fields", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    beforeAll(async () =>{
        // browser = await chromium.launch({
        //     headless : false
        // })
        // context = await browser.newContext();
        // page = await context.newPage();
        // page.goto("https://letcode.in/edit")
    })

    test("Test fail", async() => {
        
        // //await page.type("id=fullName", "nothing", {delay: 10000})
        // const name = page.locator("#fullName1")
        // await name.type("none")
        expect(false).toBe(true)
    })

    test("Test pass", async() => {
        
        // //await page.type("id=fullName", "nothing", {delay: 10000})
        // const name = page.locator("#fullName1")
        // await name.type("none")
        expect(true).toBe(true)
    })
    
})