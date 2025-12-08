Cypress Automation Test – AutomationExercise.com

This project contains an end-to-end UI test suite built with Cypress + JavaScript, using the Page Object Model (POM) structure.
The test automates the creation of a new user account on:

👉 https://automationexercise.com/

A random email and random mobile number are generated on each test execution so the signup process never fails due to an existing user.

📁 Project Structure
project/
 ├── test/
 │    ├── specs/
 │    │     └── shopping.spec.js
 │    ├── pageobjects/
 │    │     └── shopping.page.js
 │    └── utility/
 │          └── random.js
 ├── cypress.config.js
 ├── package.json
 └── README.md

🛠 Installation

Install project dependencies:

npm install

▶ Running Tests

Run tests in headless mode:

npx cypress run


Run tests in headed (interactive) mode:

npx cypress open

🧪 Test Scenario

The main test performs the following steps:

Open the homepage

Navigate to Login / Signup

Enter signup username & random email

Fill the registration form

Select country (United States)

Generate random phone number

Create a new account

Assert that account was created successfully

Continue to the next page

Each test run uses:

random email → prevents duplicates

random mobile number

📌 Technologies Used

Cypress

JavaScript

Node.js

Page Object Model (POM)

✔ Page Object Model

All selectors and page actions are located in:

test/pageobjects/shopping.page.js


The test file imports this object for clean, readable test cases.

💡 Notes

No cookie banner handling is required — test works without interacting with it.

Test automatically generates a unique email and mobile number.

The project is structured for scalability and easy extension.

📜 License

This project is created for learning purposes and personal automation practice