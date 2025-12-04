import { test, expect } from '@playwright/test';

test('Wikipedia Search Demo', async ({ page }) => {
    // 1. Mở trang Wikipedia
    await page.goto('https://www.wikipedia.org/');

    // 2. Nhập từ khóa
    await page.locator('input[name="search"]').fill('Vietnam');

    // 3. Nhấn Enter
    await page.keyboard.press('Enter');

    // 4. Chờ URL chứa từ khóa (đáng tin cậy hơn title)
    await expect(page).toHaveURL(/Vietnam/, { timeout: 15000 });

    // 5. Cuộn trang để tạo hiệu ứng thị giác
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0, 500);

    // 6. Dừng lại lâu hơn để người dùng kịp xem
    await page.waitForTimeout(5000);
});
