import { test, expect } from '@playwright/test';

// Sử dụng trạng thái đã lưu từ file user_state.json
test.use({ storageState: 'user_state.json' });

test('Authenticated Task (Reuse State)', async ({ page }) => {
    // 1. Mở lại trang web
    await page.goto('https://www.google.com');

    // 2. Kiểm tra xem đã đăng nhập chưa (ví dụ: tìm avatar user)
    // Lưu ý: Selector này có thể thay đổi tùy vào Google
    const avatar = page.locator('img.gb_A'); // Class thường dùng cho avatar Google, có thể cần cập nhật

    // Nếu tìm thấy avatar, nghĩa là đã đăng nhập thành công
    if (await avatar.isVisible()) {
        console.log('✅ Đã tự động đăng nhập thành công!');
    } else {
        console.log('ℹ️ Chưa thấy avatar, có thể session đã hết hạn hoặc selector sai.');
    }

    // 3. Thực hiện tìm kiếm mà không sợ CAPTCHA (hy vọng vậy)
    await page.locator('textarea[name="q"]').fill('Playwright automation');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(5000); // Dừng 5s để xem kết quả
});
