// @ts-check
import { test, expect } from '@playwright/test';

test('navigate to first search result', async ({ page }) => {
  // Navigate to MATLAB File Exchange
  await page.goto('https://www.mathworks.com/matlabcentral/fileexchange/');
  
  // Get the search input and type the search term
  await page.locator('input#in_page_fxsearch[placeholder="Search File Exchange"]').fill('Signal processing toolbox');
  
  // Click the search button with the updated class name
  await page.locator('button.btn_search_adjacent').click();
  
  // Wait for the search results to appear and click on the first search result link
  const firstResult = page.locator('.card_media > a').first();
  await firstResult.click();
  
  // Optionally, verify navigation by checking the page title contains "Signal Processing"
  await expect(page).toHaveTitle(/Signal Processing/i);
});
