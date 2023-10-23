import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  await page.locator('li').filter({ hasText: 'Add listThe Lord of the RingsJ.R.R. Tolkien • 1954Fantasy' }).getByRole('button').click();
  await page.locator('li').filter({ hasText: 'Add listA Game of ThronesGeorge R. R. Martin • 1996Fantasy' }).getByRole('button').click();
  await page.locator('li').filter({ hasText: 'Add listHarry Potter and the Philosopher\'s StoneJ.K. Rowling • 1997Fantasy' }).getByRole('button').click();
  await page.getByRole('combobox').selectOption('Fantasy');
  await page.getByRole('combobox').selectOption('Science Fiction');
  await page.getByRole('combobox').selectOption('Horror');
  await page.getByRole('combobox').selectOption('Zombies');
  await page.getByRole('combobox').selectOption('All');
  await page.locator('i').getByRole('img').click();
  await page.getByRole('link', { name: 'Your List 3' }).click();
  await page.locator('li').filter({ hasText: 'removeThe Lord of the RingsJ.R.R. Tolkien • 1954Fantasy' }).getByRole('button').click();
});