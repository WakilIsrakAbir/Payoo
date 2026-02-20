// using machine function

document.getElementById("cashout-btn")
    .addEventListener("click", function() {
        // 1. Get The Agent Number & validate
        const cashoutNumber = getValueFromInput("cashout-number");
        if(cashoutNumber.length != 11) {
            alert("Invalid Agent Number");
            return;
        }

        // 2. get the amount
        const cashoutAmount = getValueFromInput("cashout-amount");

        // 3. get current balance
        const currentBalance = getBalance();

        // 4. calculate new balance
        const newBalance = currentBalance - Number(cashoutAmount);
        if(newBalance < 0) {
            alert("Invalid Amount");
            return;
        }
        console.log("new balance: ", newBalance);

        // 5. get the pin and verify
        const pin = getValueFromInput("cashout-pin");
        if(pin === "4312") {
            // 5-1. true:::show the alert > set balence
            alert("Cashout Successful");
            setBalance(newBalance);
        } else {
            // 5-2. false:::show an error alert > return
            alert("Invalid Pin");
            return;
        }
    });







// without function


// document.getElementById("cashout-btn")
//     .addEventListener("click", function() {
//         // 1. Get The Agent Number & validate
//         const casoutNumberInput = document.getElementById("cashout-number");
//         const cashoutNumber = casoutNumberInput.value;
//         console.log(cashoutNumber);
//         if(cashoutNumber.length != 11) {
//             alert("Invalid Agent Number");
//             return;
//         }

//         // 2. get the amount
//         const cashoutAmountInput = document.getElementById("cashout-amount");
//         const cashoutAmount = cashoutAmountInput.value;
//         console.log(cashoutAmount);

//         // 3. get current balance
//         const balanceElement = document.getElementById("balance");
//         const balance = balanceElement.innerText;
//         console.log(balance);

//         // 4. calculate new balance
//         const newBalance = Number(balance) - Number(cashoutAmount);
//         if(newBalance < 0) {
//             alert("Invalid Amount");
//             return;
//         }
//         console.log("new balance: ", newBalance);

//         // 5. get the pin and verify
//         const cashoutPinInput = document.getElementById("cashout-pin");
//         const pin = cashoutPinInput.value;
//         if(pin === "4312") {
//             // 5-1. true:::show the alert > set balence
//             alert("Cashout Successful");
//             console.log(newBalance);
//             balanceElement.innerText = newBalance;
//         } else {
//             // 5-2. false:::show an error alert > return
//             alert("Invalid Pin");
//             return;
//         }
        
//     });