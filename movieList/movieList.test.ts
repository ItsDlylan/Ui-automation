// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('http://127.0.0.1:8080/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})


test('add a movie by enter', async ()=>{

    let inputBar = await driver.findElement(By.name('movieInput'))
    await inputBar.sendKeys('Movie added via enter key.\n')
    await driver.sleep(1000)

})

test('add movie by clicking add button', async ()=>{
    let inputBar = await driver.findElement(By.name('movieInput'))
    let addButton = await driver.findElement(By.name('add'))

    await inputBar.sendKeys('movie added via click button')
    await addButton.click()
    await driver.sleep(1000)
})

test('add movie to cross list.', async () =>{
    let firstItem = await driver.findElement(By.xpath('/html/body/main/ul/li[1]/span'))

    await firstItem.click()
    await driver.sleep(1000)

})

test('take movie off cross list.', async () =>{
    let firstItem = await driver.findElement(By.xpath('/html/body/main/ul/li[1]/span'))
    await firstItem.click()
    await driver.sleep(1000)

})

test('Delete a movie with the proper id ', async ()=>{
    let xBtn = await driver.findElement(By.id('Movieaddedviaenterkey.'))
    await xBtn.click()
    await driver.sleep(1000)
})
