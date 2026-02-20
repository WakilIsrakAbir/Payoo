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

            // 1. History container k dhore niye asbo
            const history  = document.getElementById("history-container");

            // 2. New div create korbo
            const newHistory = document.createElement("div");

            // 3. new div inner HTML add korbo
            newHistory.innerHTML = `
            <div class="transection-card p-5 bg-base-100">
           Cashout ${cashoutAmount} taka Successful to 
                ${cashoutNumber} at ${new Date()}
            </div>
            `

            // history container e new div append kore felbo
            history.append(newHistory);
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