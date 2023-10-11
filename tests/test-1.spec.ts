import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'All Books' }).click();
  await page.getByRole('link', { name: 'Your List' }).click();
  await page.getByRole('link', { name: 'All Books' }).click();
  await page.locator('li').filter({ hasText: 'The Lord of the RingsJ.R.R. Tolkien • 1954Fantasy' }).locator('span').nth(1).click();
  await page.getByRole('button', { name: 'Preview' }).click();
  await page.getByRole('button', { name: 'Add to list' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('i').click();
  await page.locator('i').click();
  await page.getByRole('link', { name: 'Your List' }).click();
  await page.getByRole('link', { name: 'All Books' }).click();
  await page.locator('li').filter({ hasText: 'The Hitchhiker\'s Guide to the GalaxyDouglas Adams • 1979Science Fiction' }).locator('span').nth(1).click();
  await page.getByRole('button', { name: 'Add to list' }).click();
  await page.locator('li').filter({ hasText: 'NeuromancerWilliam Gibson • 1984Science Fiction' }).locator('span').nth(1).click();
  await page.getByRole('button', { name: 'Add to list' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Your List' }).click();
  await page.locator('span').filter({ hasText: 'Fantasy' }).first().click();
  await page.getByRole('button', { name: 'Remove from list' }).click();
  await page.getByText('PreviewRemove from listClose').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('span').filter({ hasText: 'Science Fiction' }).first().click();
  await page.getByRole('button', { name: 'Remove from list' }).click();
  await page.locator('span').nth(1).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('span').nth(1).click();
  await page.getByRole('button', { name: 'Remove from list' }).click();
});