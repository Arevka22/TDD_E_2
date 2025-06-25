import { Page, Locator } from '@playwright/test';
import { BasePage } from "./BasePage";
import { ProductItem } from '../data/ProductItems';

export class CartPage extends BasePage {
  cartBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.cartBtn = page.locator("//div[@id='shopping_cart_container']");
  }

  productInCartByName(product: ProductItem): Locator {
    const productName = product.replace('add-to-cart-', '').replace(/-/g, ' ');
    return this.page.locator(`//div[text()='${productName}']`);
  }

  async clickCartBtn(): Promise<CartPage> {
    await this.cartBtn.click();
    return new CartPage(this.page);
  }
}