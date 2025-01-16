# Playwright Assignment: Login UI WEB Tests (Playwright)

--- 

### About The Project
This assignment proposes automation of web ui login tests in Playwright and we are validating some major login functionalities as part of this project.
### Pre-conditions
- Make sure you have **node.js** installed `node -v`    
  install it if needed:
  - **node**
    - `brew install nvm`
    - `nvm install node`
    - or:
    - `brew install asdf`
    - `asdf plugin add nodejs <https://github.com/asdf-vm/asdf-nodejs.git>`
    - `asdf install` - will install correct node from `.tool-versions` file
    and:
    - `npm update`
    - `npm install -g npx`
- Make sure you have playwright installed    
- **init playwright**
  - `npx playwright install`
### Run tests
  - `npx playwright test`
  - We are using 3 workers locally
### Run tests with specific title
  - `npx playwright test -g "test title"`
### Run tests from file login.spec.ts
  - `npx playwright test login.spec.ts`
### Run tests in UI mode
  - `npx playwright test --ui`
### Run tests in headless set to false
  - `npx playwright test --headed`
### Reporting of tests
  - We are using allure reporting
### Investigating test failures
- Screenshot capture for visual inspection of failures.
- Video recording to test executions for analysis.
- It genarates a trace file which provides
  - Page content inspection to verify expected behavior.
  - Network traffic interception for analyzing API calls.
  - Actions tab to see what locator was used for every action and time taken by it.
  - Trace records a screencast and renders it as a film strip.    
  
--- 
