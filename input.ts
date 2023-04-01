import inquirer from "inquirer";

let answers = await inquirer.prompt(
    [
        {
            type: "input",
            name: "firstName",
            message: "Enter your First Name : ",
        },
        {
            type:  "input",
            name: "secondName",
            message: "Enter your Second Name : ",
        },
        {
            type : "number",
            name : "age",
            message: " Enter your age : "
        },
        {
            type: 'confirm',
            name: "option",
            message: " Check Vowel again? press Y for Yes and N for No: "
        }
    ]
);

console.log(`My name is ${answers.firstName} ${answers.secondName} and my age is ${answers.age}.`)