#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please Guess A Number Between 1-6:",
    },
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("Congratulations you Guessed right number");
}
else {
    console.log("You guess wrong Number");
}
