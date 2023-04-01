// Import Packages
import chalk from "chalk";
import inquirer from "inquirer";


console.log(chalk.bold.bgRed(' Welcome to Calculator '));

let option;
do{
let answers = await inquirer.prompt([ // prompt to take inputs
    {
        type: "list",
        name: "calculation",
        message: "Choose operation you want to perform:",
        choices: ['Add', 'Subract', 'Multiply', 'Divide', 'Modulus']
    },
    {
        type: "number",
        name: "number1",
        message: "Enter First Number:",   
    },
    {
        type: "number",
        name: "number2",
        message: "Enter Second Number:",
    },
]);
    // conditionals to check condition for calculator
    if(answers.calculation == 'Add'){
        console.log(`Addition Result:  ${answers.number1 + answers.number2}`);
    } else if(answers.calculation == 'Subract'){
        console.log(`Subraction Result:  ${answers.number1 - answers.number2} `);
    } else if(answers.calculation == 'Multiply'){
        console.log(`Multiplication Result:  ${answers.number1 * answers.number2} `);
    } else if(answers.calculation == 'Divide'){
        console.log(`Division Result:  ${answers.number1 / answers.number2} `);
    } else if(answers.calculation == 'Modulus'){
        console.log(`Modulus Result:  ${answers.number1 % answers.number2} `);

    }

// repeat the process to perform another operation
    let choice = await inquirer.prompt([{
        type: 'confirm',
        name: "selection",
        message: chalk.black("Perform another operation press Y for Yes and N for No: "),
        default: false
    }   
    ]);
    if(choice.selection){
        option = 'y'
    } else {
        option = 'n'
    }
}while(option.toLowerCase() === "y") // check condition to repeat the process