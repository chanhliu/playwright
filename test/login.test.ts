import { chromium } from "playwright";

describe('Launch Browser', () => {

    test('Open letcode', async () => {
        const browser = await chromium.launch({
            headless : false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://letcode.in/');

        await page.click('text=Log in');
        await page.fill('[name=email]', "koushik350@gmail.com");
        await page.fill('[name=password]', "Pass123$");
        await page.click('"LOGIN"');

        await browser.close()
    })

    
})

