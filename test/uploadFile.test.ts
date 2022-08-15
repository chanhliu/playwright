import { chromium } from "playwright";

describe('Launch Browser', () => {

    const file1 = "./data/test1.webm"
    const file2 = "./data/test2.webm"
    
    test('Upload File', async () => {
        
        const browser = await chromium.launch({
            headless : false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('http://10.40.50.184:8008/#/public/process/new');

        await page.setInputFiles('[type="file"]', file1);

        //await browser.close()
    })

    test('Upload using on function', async () => {
        
        const browser = await chromium.launch({
            headless : false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('http://10.40.50.184:8008/#/public/process/new');

        page.on("filechooser", async (filechooser) => {
            const isMultiple:boolean = filechooser.isMultiple()
            
            isMultiple ? await filechooser.setFiles([file1, file2]) : await filechooser.setFiles([file1])
            
        })

        await page.click('[type="file"]')


        //await browser.close()
    })
    
})

