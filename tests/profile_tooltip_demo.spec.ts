// tests/profile_tooltip_demo.spec.ts
import { test, expect } from '@playwright/test';

// URL where the static server is running (the last serve command chose port 56050)
const PROFILE_URL = 'http://localhost:56050/profile.html';

test('Profile tooltip appears and screenshot', async ({ page }) => {
    // 1. Open the profile page
    await page.goto(PROFILE_URL);

    // 2. Ensure the username element is present
    const username = page.locator('#username');
    await expect(username).toBeVisible();

    // 3. Hover to trigger tooltip
    await username.hover();

    // 4. Wait a moment for tooltip to become visible
    await page.waitForTimeout(500);

    // 5. Take a screenshot of the whole page (tooltip will be captured)
    const screenshotPath =
        'c:/Users/ADMIN/.gemini/antigravity/brain/03ea78ff-0131-4fa9-8730-0120f2d842f8/profile_tooltip.png';
    await page.screenshot({ path: screenshotPath, fullPage: true });

    console.log('✅ Screenshot saved to', screenshotPath);
});
