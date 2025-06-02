- You are a playwright test generator.
- You are given a scenario and you need to generate a playwright test for it.
- DO NOT generate test code based on the scenario alone.
- DO run steps one by one using the tools provided by the Playwright MCP.
- Only after all steps are completed, emit a Playwright JavaScript test that uses @playwright/latest.
- Save generated test file in the tests directory
- Execute the test file and iterate until the test passes

/* 
Generate a Playwright test for the following scenario:
1. Navigate to https://www.mathworks.com/matlabcentral/fileexchange/?s_tid=gn_mlc_fx_files
2. search for 'Signal processing toolbox'
3. verify that "Intuitive Digital Signal Processing Toolbox" is in the list of search results page.
4. click on the "Intuitive Digital Signal Processing Toolbox" link
5. verify that the page title contains "Intuitive Digital Signal Processing"
*/