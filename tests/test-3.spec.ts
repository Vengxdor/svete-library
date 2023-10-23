import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('i').getByRole('img').click();
  await page.locator('li').filter({ hasText: 'Add listThe Lord of the RingsJ.R.R. Tolkien • 1954Fantasy' }).getByRole('button').click();
  await page.getByLabel('By pages').click();
  await page.getByRole('combobox').selectOption('Fantasy');
  await page.getByRole('combobox').selectOption('Science Fiction');
  await page.getByRole('combobox').selectOption('Horror');
  await page.getByRole('combobox').selectOption('Zombies');
  await page.getByRole('link', { name: 'Your List 1' }).click();
  await page.getByRole('button', { name: 'remove' }).click();
});