const { test, expect } = require('@playwright/test');

test.use({ headless: false, slowMo: 3000 });

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

// test('has title', async ({page}) => {
//     await page.goto('https://www.centralcomputer.com/')

//     //Regex to check if title has substring "Central Computers"
//     await expect(page).toHaveTitle(/Central Computers/)
// })

test('Account Link opens popup', async ({page}) => {
    await page.goto('https://www.centralcomputer.com/')

    //Central computers has copies of the same element, one for mobile version one for desktop
    //We want the desktop one for testing purposes so we only select the one that is currently visible
    await page.locator('header span:has-text("Account")').click()
})
