// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test6', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test6', async function() {
    await driver.get("http://127.0.0.1:5500/")
    await driver.manage().window().setRect({ width: 697, height: 720 })
    await driver.findElement(By.css(".icon")).click()
    await driver.findElement(By.css(".input-group:nth-child(2) > label")).click()
    {
      const element = await driver.findElement(By.css(".input-group:nth-child(2) > label"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("-5")
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("-6")
    await driver.findElement(By.css("button:nth-child(1)")).click()
  })
})
