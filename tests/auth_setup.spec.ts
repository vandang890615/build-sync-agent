import { test, expect } from '@playwright/test';

test('Setup Authentication (Solve CAPTCHA & Save)', async ({ page }) => {
    // 1. Mở trang Google (hoặc trang bạn muốn)
    await page.goto('https://www.google.com');

    console.log('-------------------------------------------------');
    console.log('⚠️  ACTION REQUIRED:');
    console.log('1. Trình duyệt đã mở.');
    console.log('2. Hãy đăng nhập hoặc giải CAPTCHA thủ công.');
    console.log('3. Sau khi xong, quay lại cửa sổ "Playwright Inspector" và nhấn nút "Resume" (hoặc nhấn F8).');
    console.log('-------------------------------------------------');

    // 2. Tạm dừng để bạn thao tác thủ công
    // Cửa sổ Playwright Inspector sẽ hiện ra cùng với trình duyệt
    await page.pause();

    // 3. Sau khi bạn nhấn Resume, code sẽ chạy tiếp dòng này để lưu trạng thái
    await page.context().storageState({ path: 'user_state.json' });

    console.log('✅ Đã lưu trạng thái đăng nhập vào file "user_state.json"');
});
