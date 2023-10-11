const { Builder, Browser, By, until } = require("selenium-webdriver");
const { elementLocated } = require("selenium-webdriver/lib/until");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Add to Duo display player duo div", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(1000);
    await driver.wait(elementLocated(By.id("choices")));
    let playerDuo = await driver.wait(elementLocated(By.id("player-duo")));
  });

  test("Removed from Duo", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(1000);
    await driver.wait(elementLocated(By.id("choices")));
    let playerDuo = await driver.wait(elementLocated(By.id("choices")));
    console.log("working")
  });

  test("Results of playerDuo", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(1000);
    await driver.wait(elementLocated(By.id("choices")));
    let playerDuo = await driver.wait(elementLocated(By.id("choices")));
    console.log("working")
  });
  const express = require('express');
const Rollbar = require('rollbar');

// Create an instance of Rollbar with your Rollbar access token
const rollbar = new Rollbar({
  accessToken: 'YOUR_ROLLBAR_ACCESS_TOKEN',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const app = express();

// ... Other express app setup ...

// Define your endpoint handler functions
app.get('/', (req, res) => {
  // Log an info event to Rollbar
  rollbar.info('Hello World');

  // Your application logic for the '/' route
  res.send('Hello World');
});

app.get('/endpoint1', (req, res) => {
  try {
    // Your application logic for endpoint1
    // ...

    // Log a custom info event to Rollbar
    rollbar.info('Endpoint 1 was successfully called');
    res.status(200).send('Endpoint 1');
  } catch (error) {
    // Log errors to Rollbar
    rollbar.error(error);

    // Handle the error and respond accordingly
    res.status(500).send('Internal Server Error');
  }
});

app.get('/endpoint2', (req, res) => {
  // Your application logic for endpoint2
  // ...

  // Log a custom warning event to Rollbar
  rollbar.warning('Endpoint 2 encountered a warning');

  // Respond with success
  res.status(200).send('Endpoint 2');
});

app.get('/endpoint3', (req, res) => {
  try {
    // Your application logic for endpoint3
    // ...

    // Log a custom error event to Rollbar
    rollbar.error('Endpoint 3 encountered an error');

    // Respond with success
    res.status(200).send('Endpoint 3');
  } catch (error) {
    // Handle the error and respond accordingly
    res.status(500).send('Internal Server Error');
  }
});

// ... Other endpoint handlers ...

// Start the Express app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

});
