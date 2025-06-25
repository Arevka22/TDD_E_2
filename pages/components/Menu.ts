import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../BasePage';
import { MenuItem } from '../../data/MenuItems';

export class Menu extends BasePage {

    menuButton: Locator;

    constructor(page: Page) {
        super(page);
        this.menuButton = page.locator('//button[@id="react-burger-menu-btn"]');
    }

    async clickMenuItem(menu: MenuItem) {
        this.menuButton.click();
        const menuItem = this.page.locator(`//div[@class='bm-menu']//a[text()="${menu}"]`);
        await menuItem.click();
        await this.page.waitForLoadState('networkidle');
    }
}