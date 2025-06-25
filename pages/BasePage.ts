import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

    protected page: Page;
    logo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator("//div[text()='Swag Labs']");
        this.handlePopups();
    }

    private handlePopups(): void {
        this.page.on('popup', async popup => {
            await popup.close();
        });
    }

    async goto(url: string): Promise<void> {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
    }

    async waitForElement(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    async refreshPage(): Promise<void> {
        await this.page.reload();
        await this.page.waitForLoadState('networkidle');
    }
}