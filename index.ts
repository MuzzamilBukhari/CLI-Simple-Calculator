#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\t Welcome to 'Code with Muzzi' - CLI Simple Calculator ");

(async () => {
  const response = await inquirer.prompt([
    {
      type: "number",
      name: "numberOne",
      message: "Enter first no : ",
    },
    {
      type: "number",
      name: "numeberTwo",
      message: "Enter second no : ",
    },
    {
      type: "list",
      name: "operator",
      choices: ["Add", "Subtract", "Multiply", "Divide"],
      message: "Select Operator : ",
    },
  ]);

  if (response.numberOne && response.numeberTwo && response.operator) {
    let result = 0;
    if (response.operator === "Add") {
      result = response.numberOne + response.numeberTwo;
    } else if (response.operator === "Subtract") {
      result = response.numberOne - response.numeberTwo;
    } else if (response.operator === "Multiply") {
      result = response.numberOne * response.numeberTwo;
    } else if (response.operator === "Divide") {
      result = response.numberOne / response.numeberTwo;
    }
    console.log("Your result is " + result);
  } else {
    console.log("Enter a valid input");
  }
})();
