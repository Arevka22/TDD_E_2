import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from "./BasePage";
import { ProductItem } from '../data/ProductItems';
import { CartPage } from "./CartPage";

export class ProductsPage extends BasePage {
    cartBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.cartBtn = page.locator("//div[@id='shopping_cart_container']");
    }

    async addProductToCart(product: ProductItem): Promise<void> {
        const productLocator = this.page.locator(`//div[text()="${product}"]/following::button[1]`);
        await productLocator.click();
    }

    async clickCartBtn(): Promise<CartPage> {
        await this.cartBtn.click();
        return new CartPage(this.page);
    }
}