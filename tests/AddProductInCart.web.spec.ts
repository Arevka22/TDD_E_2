import { test, expect, Page } from '@playwright/test';
import { PageManager } from '../pages/PageManager';
import { LoginPage } from '../pages/LoginPage';
import { adminEmail } from '../env/users';
import { adminPassword } from '../env/users';
import { Menu } from '../pages/components/Menu';
import { MenuItem } from '../data/MenuItems';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductItem } from '../data/ProductItems';
import { CartPage } from '../pages/CartPage';


let pageManager: PageManager;
let loginPage: LoginPage;
let productsPage: ProductsPage;
let menu: Menu;
let cartPage: CartPage;


// TEST CASE #888
test(`Add product in cart check`, async ({ page }: { page: Page }) => {

  pageManager = new PageManager(page);
  loginPage = await pageManager.getLoginPage();

  // Log in
  productsPage = await loginPage.login(adminEmail, adminPassword);
  await expect(productsPage.logo).toBeVisible();
  await expect(page).toHaveURL('/inventory.html');

  // Add one product to the cart
  await productsPage.addProductToCart(ProductItem.SauceLabsBackpack);
  cartPage = await productsPage.clickCartBtn();

  // Verify that the product is visible in the cart
  await expect(cartPage.productInCartByName(ProductItem.SauceLabsBackpack)).toBeVisible();

  // Take screenshot
  await page.screenshot({ path: `cart-with-item.png` });

  // Log out from the menu
  menu = new Menu(page);
  await menu.clickMenuItem(MenuItem.Logout);
  await expect(loginPage.logo).toBeVisible();

});
