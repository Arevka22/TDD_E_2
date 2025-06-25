import { chromium } from '@playwright/test';
import { baseURL } from './env/env';
import { adminEmail, adminPassword } from './env/users';

async function saveSession(username: string, password: string, filePath: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(baseURL);
  await page.waitForLoadState('networkidle');
  await page.fill("//input[@id='user-name']", username);
  await page.fill("//input[@id='password']", password);
  await page.click("//input[@id='login-button']");
  await page.waitForLoadState('networkidle');
  //await page.waitForURL('/inventory.html');
  await page.context().storageState({ path: filePath });
  await browser.close();
}

(async () => {
  await saveSession(adminEmail, adminPassword, 'sessions/admin.json');
//await saveSession('guest', 'guestpass', 'sessions/guest.json');
})();


//Run once before all tests =>  ts-node save-session.ts or npx tsx save-session.ts

