import { test, expect } from '@playwright/test';

test('Manual CAPTCHA Solving Demo', async ({ page }) => {
    // 1. Go to a site that might show CAPTCHA (e.g., Google Search)
    await page.goto('https://www.google.com/search?q=Vietnam+tourism');

    // 2. Check if CAPTCHA is present (Google often uses a specific ID or class for captcha)
    // This is just an example check.
    const captchaPresent = await page.locator('text=Our systems have detected unusual traffic').isVisible();

    if (captchaPresent) {
        console.log('CAPTCHA detected! Please solve it manually in the browser window.');

        // 3. PAUSE execution. 
        // Playwright Inspector will open, or if running with --headed, it just waits.
        // You can also use page.waitForTimeout(30000) to give a fixed time.
        await page.pause();

        console.log('Resuming test...');
    }

    // 4. Continue with the test
    await expect(page).toHaveTitle(/Vietnam tourism/);
});
