#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let management = [];
let balance = 10000;
let id = [];
let pay = [];
let course = [];
let roll = [];
console.log(chalk.italic.blueBright.bold(`\n\t*******Welcome to the student management system*******\n\t`));
async function studentManagementSystem() {
    let student = await inquirer.prompt([
        {
            name: "system",
            type: "list",
            message: chalk.italic.yellowBright.bold(`\nPlease select an option:\n`),
            choices: [
                chalk.italic.blueBright.bold("Add new student"),
                chalk.italic.yellowBright.bold("Student id"),
                chalk.italic.redBright.bold("Student courses"),
                chalk.italic.cyanBright.bold("Student enroll"),
                chalk.italic.blueBright.bold("Student view balance"),
                chalk.italic.gray.bold("Student pay tuition fees"),
                chalk.italic.yellow.bold("Student status"),
                chalk.italic.red.bold("Exit"),
            ]
        }
    ]);
    if (student.system === chalk.italic.blueBright.bold("Add new student")) {
        let addAns = await inquirer.prompt({
            name: "new",
            type: "input",
            message: chalk.italic.blue.bold("\nPlease Enter student name:\n")
        });
        management.push(addAns.new);
        console.log(chalk.italic.greenBright.bold(`\n\t${management}`));
        studentManagementSystem();
    }
    else if (student.system === chalk.italic.yellowBright.bold("Student id")) {
        let idAns = await inquirer.prompt({
            name: "id",
            type: "input",
            message: chalk.italic.green.bold("\nPlease Enter a 5 digit student id:\n")
        });
        id.push(idAns.id);
        console.log(chalk.italic.yellowBright.bold(`\n\t${id}: \n\tYour id is correct:`));
        studentManagementSystem();
    }
    else if (student.system === chalk.italic.redBright.bold("Student courses")) {
        let courseAns = await inquirer.prompt({
            name: "course",
            type: "list",
            message: chalk.italic.yellow.bold("\nPlease select student course:\n"),
            choices: [
                chalk.italic.cyanBright.bold("TypeScript"),
                chalk.italic.gray.bold("Python"),
                chalk.italic.yellowBright.bold("JavaScript"),
                chalk.italic.greenBright.bold("C++"),
                chalk.italic.redBright.bold("Css"),
                chalk.italic.blueBright.bold("Html"),
            ]
        });
        course.push(courseAns.course);
        console.log(chalk.italic.cyanBright.bold(`\n\t${course}`));
        studentManagementSystem();
    }
    else if (student.system === chalk.italic.cyanBright.bold("Student enroll")) {
        let enrollAns = await inquirer.prompt({
            name: "roll",
            type: "input",
            message: chalk.italic.gray.bold("\nPlease Enter student roll number:\n")
        });
        roll.push(enrollAns.roll);
        console.log(chalk.italic.blueBright.bold(`\n\t${roll}: \n\tyour roll number has been entered:`));
        studentManagementSystem();
    }
    else if (student.system === chalk.italic.blueBright.bold("Student view balance")) {
        console.log(chalk.italic.gray.bold(`"\n\tBalance is:"\n\t${balance}:`));
        studentManagementSystem();
    }
    else if (student.system === chalk.italic.gray.bold("Student pay tuition fees")) {
        let payAns = await inquirer.prompt([{
                name: "pay",
                type: "list",
                message: chalk.italic.cyan.bold("\nPlease select student fees amount:\n"),
                choices: [
                    chalk.italic.blue.bold("TypeScript fees 1000"),
                    chalk.italic.gray.bold("Python fees 1500"),
                    chalk.italic.yellow.bold("JavaScript fees 2000"),
                    chalk.italic.green.bold("C++ fees 2500"),
                    chalk.italic.cyan.bold("Css fees 3000"),
                    chalk.italic.redBright.bold("Html fees 3500"),
                ]
            },
            {
                name: "paid",
                type: "input",
                message: chalk.italic.blue.bold("\nPlease Enter student fees amount:\n")
            }
        ]);
        pay.push(payAns.pay);
        balance = balance - payAns.paid;
        console.log(chalk.italic.yellow.bold(`\n\t${pay}: \n\tYour fees has been collected:`));
        studentManagementSystem();
    }
    else if (student.system === chalk.italic.yellow.bold("Student status")) {
        console.log(chalk.italic.green.bold(`\n\t++++++Status+++++`));
        console.log(chalk.italic.greenBright.bold(`\n\tName: ${management}`));
        console.log(chalk.italic.yellowBright.bold(`\n\tId number: ${id}`));
        console.log(chalk.italic.cyanBright.bold(`\n\tCourse: ${course}`));
        console.log(chalk.italic.blueBright.bold(`\n\tRoll number: ${roll}`));
        console.log(chalk.italic.gray.bold(`\n\tBalance: ${balance}`));
        console.log(chalk.italic.yellow.bold(`\n\tPay fees: ${pay}`));
        studentManagementSystem();
    }
    else if (student.system === chalk.italic.red.bold("Exit"))
        console.log(chalk.italic.yellow.bold("\n\t<<<<<<<Thank you for using our system>>>>>>>\n\t"));
}
studentManagementSystem();
