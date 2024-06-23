import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
async function StartTimer(val) {
    let intTime = new Date().setSeconds(new Date().getSeconds() + val);
    let intervalTime = new Date(intTime);
    setInterval(() => {
        let currentTime = new Date();
        let TimeDiff = differenceInSeconds(intervalTime, currentTime);
        if (TimeDiff <= 0) {
            console.log("Time Has Expired");
            process.exit();
        }
        let min = Math.floor(TimeDiff / 60);
        let sec = TimeDiff % 60;
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
let result = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Enter Seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "Enter a valid number";
        }
        else if (input > 60) {
            return "Enter seconds within the range of 60";
        }
        else {
            return true;
        }
    }
});
let input = result.userInput;
StartTimer(input);
