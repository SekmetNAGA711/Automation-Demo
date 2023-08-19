const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("can search Google for 'automation'", async () => {
  // TODO Navigate to google.com
  await driver.get("https://www.google.com/");
  // TODO Uncomment the line below and replace SEARCH_BAR_NAME with the name of the search bar element
  await driver.findElement(By.name("q")).sendKeys("automation", Key.RETURN);

  // Wait for the results page to load
  await driver.wait(until.titleIs("automation - Google Search"), 1000);
});

test('can search Google twice', async () => {
  // Fix the TODOs below to finish the test
  // TODO Navigate to google.com
  await driver.get("https://www.google.com/");
  // TODO Search for something in Google and wait for the page to load
  await driver.findElement(By.name("q")).sendKeys("ice cream", Key.RETURN)
  await driver.wait(until.titleIs("ice cream - Google Search"), 1000);
  await driver.findElement(By.name("q")).clear()
  await driver.findElement(By.name("q")).sendKeys("ghana", Key.RETURN)
  // TODO *** //go back to the (search bar
  // await driver.findElement(By.css('textarea[value="ice cream"]')).sendKeys("Ghana", Key.RETURN);
  // await driver.wait(until.titleIs("Ghana - Google Search"), 1000);

  // TODO Wait for the results page to load
  // await driver.wait(until.titleIs("Ghana - Google Search"), 1000);
 
});
