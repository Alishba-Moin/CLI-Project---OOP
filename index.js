#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Student {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
    displayStudent() {
        console.log(chalk.bold("Students Name:"));
        this.students.forEach(student => {
            console.log(student.name);
        });
    }
}
const MyPerson = new Student();
const startProgram = async () => {
    console.log(chalk.bgBlueBright("WELCOME!"));
    do {
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: chalk.blackBright("Choose an option to know about personality."),
            choices: ["Mystery", "Introvert", "Extrovert"]
        });
        if (ans.select === "Mystery") {
            console.log(chalk.blue.italic("Mystery: Has a mix of introvert and extrovert traits."));
        }
        else if (ans.select === "Introvert") {
            console.log(chalk.blue.italic("Introvert: Enjoys solitude and prefers individual activities."));
        }
        else if (ans.select === "Extrovert") {
            console.log(chalk.blue.italic("Extrovert: Enjoys social interactions and prefers group activities"));
        }
        const askedName = await inquirer.prompt({
            name: "name",
            type: "input",
            message: chalk.green("Please Enter Your Name: ")
        });
        if (askedName) {
            console.log(chalk.yellow.bold(`Your Name Is ${askedName.name} And Your Personality Type Is ${ans.select}`));
        }
        MyPerson.addStudent(new Person(askedName.name));
        MyPerson.displayStudent();
        const exitChoice = await inquirer.prompt({
            name: "exit",
            type: "confirm",
            message: chalk.red("Do you want to quit?")
        });
        if (exitChoice.exit) {
            break;
        }
    } while (true);
};
startProgram();
