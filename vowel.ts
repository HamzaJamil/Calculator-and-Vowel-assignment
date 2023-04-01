import inquirer from "inquirer";
import chalk from "chalk";

let option;
do{
        
let answers = await inquirer.prompt([
   {
    type : 'input',
    name: 'userInput',
    message: chalk.bgBlue(" Enter the character to check if it's vowel or not : ")

   } 
]);
let letter = answers.userInput;
letter = letter.toLowerCase()
let validCharacter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
if(validCharacter.includes(letter)){
    if(letter === 'a'|| letter === 'e'|| letter === 'i' || letter === 'o' || letter === 'u'){      
        console.log(' ',chalk.bold.bgYellow(` "${letter.toUpperCase()}" is Vowel `),'\n')
    } else{
        console.log(' ',chalk.bold.bgRed(`  "${letter.toUpperCase()}" is not Vowel `),'\n')
    }
} else {
    console.log(" Enter a valid Character ")
}

// repeat the process to perform another operation
    let choice = await inquirer.prompt([{
        type: 'confirm',
        name: "option",
        message: chalk.black(" Check Vowel again? press Y for Yes and N for No: ")
    }   
    ]);
    if(choice.option === true){
        option = 'y'
    } else {
        option = 'n'
    }
}while(option.toLowerCase() === "y");