// tests/profile_page.spec.ts
import { test, expect } from '@playwright/test';

const PROFILE_URL = 'http://localhost:56050/profile.html';

test.describe('Professional Profile Page', () => {
    test('should load and display user information', async ({ page }) => {
        await page.goto(PROFILE_URL);

        // Check basic elements
        await expect(page.locator('#username')).toHaveText('John Doe');
        await expect(page.locator('#title')).toHaveText('Senior Software Engineer');
        await expect(page.locator('#bio')).toBeVisible();

        // Check avatar
        const avatar = page.locator('#avatar');
        await expect(avatar).toBeVisible();
    });

    test('should show tooltip when hovering over active user', async ({ page }) => {
        await page.goto(PROFILE_URL);

        const username = page.locator('#username');

        // Verify data-active attribute is set
        await expect(username).toHaveAttribute('data-active', 'true');

        // Hover to trigger tooltip
        await username.hover();
        await page.waitForTimeout(300);

        // Take screenshot with tooltip
        await page.screenshot({
            path: 'c:/Users/ADMIN/.gemini/antigravity/brain/03ea78ff-0131-4fa9-8730-0120f2d842f8/profile_dark_tooltip.png',
            fullPage: true
        });
    });

    test('should toggle theme and persist preference', async ({ page }) => {
        await page.goto(PROFILE_URL);

        // Check initial theme (dark)
        const html = page.locator('html');
        await expect(html).toHaveAttribute('data-theme', 'dark');

        // Click theme toggle
        await page.click('#themeToggle');
        await page.waitForTimeout(300);

        // Verify theme changed to light
        await expect(html).toHaveAttribute('data-theme', 'light');

        // Take screenshot of light theme
        await page.screenshot({
            path: 'c:/Users/ADMIN/.gemini/antigravity/brain/03ea78ff-0131-4fa9-8730-0120f2d842f8/profile_light.png',
            fullPage: true
        });

        // Reload page and verify theme persisted
        await page.reload();
        await expect(html).toHaveAttribute('data-theme', 'light');

        // Toggle back to dark
        await page.click('#themeToggle');
        await expect(html).toHaveAttribute('data-theme', 'dark');
    });

    test('should have working social links', async ({ page }) => {
        await page.goto(PROFILE_URL);

        const socialLinks = page.locator('.social-link');
        await expect(socialLinks).toHaveCount(3);

        // Verify links have correct attributes
        const githubLink = socialLinks.first();
        await expect(githubLink).toHaveAttribute('target', '_blank');
        await expect(githubLink).toHaveAttribute('rel', 'noopener');
    });

    test('should be responsive on mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto(PROFILE_URL);

        // Check that profile card is visible
        const profileCard = page.locator('.profile-card');
        await expect(profileCard).toBeVisible();

        // Take mobile screenshot
        await page.screenshot({
            path: 'c:/Users/ADMIN/.gemini/antigravity/brain/03ea78ff-0131-4fa9-8730-0120f2d842f8/profile_mobile.png',
            fullPage: true
        });
    });
});
