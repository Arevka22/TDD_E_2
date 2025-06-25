import { test, expect, Locator, Page } from '@playwright/test';
import { baseURL } from "../env/env";
import { BasePage } from "./BasePage";
import { ProductsPage } from './ProductsPage';


export class LoginPage extends BasePage {

    usernameInput: Locator;
    passwordInput: Locator;
    loginBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator("//input[@id='user-name']");
        this.passwordInput = page.locator("//input[@id='password']");
        this.loginBtn = page.locator("//input[@id='login-button']");
    }

    async login(email: string, password: string): Promise<ProductsPage> {

        await this.usernameInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
        await this.page.waitForLoadState('networkidle');

        try {
            await this.page.locator('text=OK').click();
        } catch (error) {
            console.log('Popup did not appear, continuing...');
        }
        return new ProductsPage(this.page);
    }

}
