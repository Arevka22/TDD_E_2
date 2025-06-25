import { LoginPage } from "./LoginPage";
import { test, expect, Locator, Page } from '@playwright/test';
import { baseURL } from "../env/env";


export class PageManager {
    page: Page;
    loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
    }

    async getLoginPage() {
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.goto(baseURL);
        return this.loginPage;
    }

}