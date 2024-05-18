const { test, expect } = require("@playwright/test");

test('Clicking "More info" button opens modal with correct information', async ({
  page,
}) => {
  await page.goto("http://localhost:5173");

  // Waiting for table to render
  await page.waitForSelector("table");

  // Button click
  await page.click('button:text("More info")');

  // Modal opening
  await page.waitForSelector('div[data-testid="data-modal"]');

  // Get the text content of the modal
  const modalText = await page.textContent('div[data-testid="data-modal"]');

  // Modal data
  expect(modalText).toContain("ID:");
  expect(modalText).toContain("First Name:");
  expect(modalText).toContain("Last Name:");
  expect(modalText).toContain("Birth date:");
  expect(modalText).toContain("Gender:");
  expect(modalText).toContain("Customer identification code:");

  // Closing modal
  await page.click('button[data-testid="modal-close-btn"]');

  // Clicking next
  await page.click('button[data-testid="next-btn"]');

  // Clicking previous
  await page.click('button[data-testid="prev-btn"]');
});
