import inquirer from "inquirer";
var x = null;
var data = {
    "Ashhar": "Abc123",
    "Ali": "yuio123oo",
    "Fasih": "uio21o",
};
async function userCheck() {
    while (true) {
        var userName = await inquirer.prompt([{
                name: "userName",
                type: "input",
                message: "Please enter user name : "
            },
            {
                name: "password",
                type: "input",
                message: "Please enter password: "
            }
        ]);
        if (data[userName.userName] === userName.password) {
            console.log("Login successful. All ATM functionalities are now available to you");
            break;
        }
        else {
            console.log("User Name or password is wrong. Try again.");
        }
    }
}
userCheck();
export { userCheck };
