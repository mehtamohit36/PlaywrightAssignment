import { expect } from '@playwright/test';

export class loginPage {

  constructor(page) {
    this.page = page;
    this.userName = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginButton = page.locator('.orangehrm-login-button');
    this.alert = page.locator('.oxd-alert.oxd-alert--error');
    this.ProfileDropDown = page.locator('.oxd-userdropdown-tab');
    this.logout = page.locator('.oxd-userdropdown-link').nth(3);
    this.searchMenuItem = page.locator("input[placeholder='Search']");
    this.drawerItems = page.locator('.oxd-main-menu-item--name');
  }
 
  async goToLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
  }
  async verifyLoginPageLoad() {
    await expect(this.page.locator('h5')).toContainText('Login');
  }
  async enterUserCredentials(username,password) {
    await this.userName.fill(username);
    await expect(this.userName).toHaveValue(username);
    await this.password.fill(password);
    await expect(this.password).toHaveValue(password);
  }
    async verifyInValidLogin() {
    await this.page.click('[type="submit"]');
    await expect(this.alert).toBeVisible();
  }
  async verifyValidLogin() {
    await this.page.click('[type="submit"]');
    await expect(this.page.locator('h6')).toContainText('Dashboard');
  }
  async verifyDrawerContents(menuItem) {
    const drawerText = await this.drawerItems.allInnerTexts(); 
    await expect(this.searchMenuItem).toBeVisible(); // valdating the first menu item 'Search'
    await this.drawerItems.nth(11).scrollIntoViewIfNeeded(); // validating the last item in the drawer with scroll added
    for (const item of menuItem) {
      expect(drawerText).toContain(item); // validating the drawer menu items except top most item 'Search'
    }
  }
  async verifyLogout() {
    await this.ProfileDropDown.click();
    await this.logout.click();
    await expect(this.page.locator('h5')).toContainText('Login');
  }
}
  
