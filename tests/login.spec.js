import { test } from '@playwright/test';
import { loginPage } from '../pageObject/login';
const expectedDrawerItems = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz' ];


test.describe('Login Flows', () => {
	let login;

	test.beforeEach(async ({ page }) => {
	    login = new loginPage(page);
		await login.goToLoginPage();
  	});

  	test.afterEach(async ({ page }) => {
  		page.close();
  	});

	test('Verify login page loads completely', async ({ page }) => {
		await login.verifyLoginPageLoad();
	});

	test('Verify alert message for inavlid login', async ({ page }) => {
		await login.verifyLoginPageLoad();
		await login.enterUserCredentials('admin','admin12');
		await login.verifyInValidLogin();
	});

	test('Verify login is working with valid credentials', async ({ page }) => {
		await login.verifyLoginPageLoad();
		await login.enterUserCredentials('admin','admin123');
		await login.verifyValidLogin();
	});

	test('Verify drawer contents', async ({ page }) => {
		await login.verifyLoginPageLoad();
		await login.enterUserCredentials('admin','admin123');
		await login.verifyValidLogin();
		await login.verifyDrawerContents(expectedDrawerItems);
	});

	test('Verify logout is working', async ({ page }) => {
		await login.verifyLoginPageLoad();
		await login.enterUserCredentials('admin','admin123');
		await login.verifyValidLogin();
		await login.verifyLogout();
	});
});

