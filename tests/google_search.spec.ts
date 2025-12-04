import { test, expect } from '@playwright/test';

test('Google Search Demo', async ({ page }) => {
    // 1. Mở trang Google
    await page.goto('https://www.google.com');

    // 2. Tìm ô tìm kiếm và nhập từ khóa
    // Google thường dùng textarea hoặc input có name='q'
    const searchInput = page.locator('textarea[name="q"]').or(page.locator('input[name="q"]'));
    await searchInput.fill('Vietnam tourism');

    // 3. Nhấn Enter
    await searchInput.press('Enter');

    // 4. Chờ kết quả tải xong (đợi tiêu đề trang thay đổi)
    await expect(page).toHaveTitle(/Vietnam tourism/);

    // 5. Tạm dừng 3 giây để bạn kịp nhìn thấy kết quả (chỉ dùng cho demo)
    await page.waitForTimeout(3000);
});
