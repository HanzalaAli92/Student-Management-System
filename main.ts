#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

let management: string [] = [];
let balance: number = 10000;
    
     console.log(chalk.italic.blueBright.bold("\n\t*******Welcome to the student management system*******\n\t"));
     
async function studentManagementSystem(){
    let student = await inquirer.prompt([ 
        {
            name: "system",
            type: "list",
            message: chalk.italic.yellowBright.bold("\nPlease select an option:\n"),
            choices: [
                chalk.italic.blueBright.bold("Add new student"),
                chalk.italic.yellowBright.bold("Student id"),
                chalk.italic.redBright.bold("Student courses"),
                chalk.italic.cyanBright.bold("Student enroll"),
                chalk.italic.blueBright.bold("Student view balance"),
                chalk.italic.gray.bold("Student pay tuition fees"),
                chalk.italic.red.bold("Exit"),
            ]
        }
    ])
    if (student.system ===chalk.italic.blueBright.bold("Add new student")){
        let addAns = await inquirer.prompt({
            name: "new",
            type: "input",
            message: chalk.italic.blue.bold("\nPlease Enter student name:\n")
        })
        management.push(addAns.new);
        console.log(chalk.italic.greenBright.bold(`\n\t${management}`));
        studentManagementSystem();
    }
    else if (student.system ===chalk.italic.yellowBright.bold("Student id")){
        let idAns = await inquirer.prompt({
            name: "id",
            type: "input",
            message: chalk.italic.green.bold("\nPlease Enter student id:\n")
        })
        let id = idAns.id;
        console.log(chalk.italic.yellowBright.bold(`\n\t${id}: \n\tYour id is correct:`));
        studentManagementSystem();
    }
    else if (student.system ===chalk.italic.redBright.bold("Student courses")){
        let courseAns = await inquirer.prompt({
            name: "course",
            type: "list",
            message: chalk.italic.yellow.bold("\nPlease Enter student course:\n"),
            choices: [
                chalk.italic.cyanBright.bold("TypeScript"),
                chalk.italic.gray.bold("Python"),
                chalk.italic.yellowBright.bold("JavaScript"),
                chalk.italic.greenBright.bold("C++"),
                chalk.italic.redBright.bold("Css"),
                chalk.italic.blueBright.bold("Html"),
            ]
        })
        let course = courseAns.course;
        console.log(chalk.italic.cyanBright.bold(`\n\t${course}`));
        studentManagementSystem();
    }
    else if (student.system ===chalk.italic.cyanBright.bold("Student enroll")){
        let enrollAns = await inquirer.prompt({
            name: "roll",
            type: "input",
            message: chalk.italic.gray.bold("\nPlease Enter student roll number:\n")
        })
        let roll = enrollAns.roll;
        console.log(chalk.italic.blueBright.bold(`\n\t${roll}: \n\tyour roll number has been entered:`));
        studentManagementSystem();
    }
    else if (student.system ===chalk.italic.blueBright.bold("Student view balance")){
        console.log(chalk.italic.gray.bold(`"\n\tBalance is:"\n\t${balance}:`));
        studentManagementSystem();
    }
    else if (student.system ===chalk.italic.gray.bold("Student pay tuition fees")){
        let payAns = await inquirer.prompt({
            name: "pay",
            type: "list",
            message: chalk.italic.cyan.bold("\nPlease Enter student pay amount:\n"),
            choices: [
                chalk.italic.blue.bold("TypeScript fees 1000"),
                chalk.italic.gray.bold("Python fees 1500"),
                chalk.italic.yellow.bold("JavaScript fees 2000"),
                chalk.italic.green.bold("C++ fees 2500"),
                chalk.italic.cyan.bold("Css fees 3000"),
                chalk.italic.redBright.bold("Html fees 3500"),
            ]
        })
        let pay = payAns.pay;
        console.log(chalk.italic.yellow.bold(`\n\t${pay}: "\n\tYour fees has been collected":`));
        studentManagementSystem();
    }
    else if(student.system ===chalk.italic.red.bold("Exit"))
        console.log(chalk.italic.yellow.bold("\n\t<<<<<<<Thank you for using our system>>>>>>>\n\t")); 
} 
studentManagementSystem();

     
