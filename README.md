# Cypress Automation Test – AutomationExercise.com

This project contains an **end-to-end UI automation test** written in **Cypress + JavaScript**, using the **Page Object Model (POM)** design pattern.

The test automates the **new user registration (Sign Up) flow** on:
👉 [https://automationexercise.com/](https://automationexercise.com/)

---

## ✅ Test Scenario – Register New User

The automated test performs the following steps:

1. Open the home page
2. Navigate to **Signup / Login**
3. Enter **name and random email**
4. Submit the signup form
5. Fill in account details:

   * Password
   * First name
   * Last name
   * Address
   * Country (from dropdown)
   * State
   * City
   * Zip code
   * Random mobile number
7. Create account
8. **Assert that "Account Created" is successfully displayed**
9. Continue after successful registration
10. Delete all cookies after the test

---

## 🎲 Random Test Data

To avoid duplicate user errors, the following random data is generated for every test run:

* ✅ **Random email**
* ✅ **Random mobile number**

Random data is generated inside:

```
/utility/random.js
```

---

## 📁 Project Structure

```
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

```

---

## 🛠 Installation

Install all dependencies:

```bash
npm install
```

```Run tests in headless mode:
npx cypress run
```
```Run tests in headed (interactive) mode:
npx cypress open
```

---

## 🧩 Page Object Model (POM)

All selectors and page actions are stored inside:

```
test/pageobjects/shopping.page.js
```

The test imports the page object like this:

```js
const shoppingPage = require("../pageobjects/shopping.page");
```

This keeps the test:

* ✅ Clean
* ✅ Maintainable
* ✅ Easy to scale

---

## ⚙️ Technologies Used

* **Cypress**
* **JavaScript**
* **Node.js**
* **Page Object Model (POM)**

---

## 📌 Notes

* No cookie banner handling is required — test works without interacting with it.
* Test automatically generates a unique email and mobile number.
* The project is structured for scalability and easy extension.

---

## 📜 License

This project is for **learning and automation practice purposes**.
