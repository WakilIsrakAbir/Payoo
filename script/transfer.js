// using machine function

document.getElementById("transfer-btn")
    .addEventListener("click", function() {
        // 1. Get The Agent Number & validate
        const transferNumber = getValueFromInput("transfer-number");
        if(transferNumber.length != 11) {
            alert("Invalid Agent Number");
            return;
        }

        // 2. get the amount
        const transferAmount = getValueFromInput("transfer-amount");

        // 3. get current balance
        const currentBalance = getBalance();

        // 4. calculate new balance
        const newBalance = currentBalance - Number(transferAmount);
        if(newBalance < 0) {
            alert("Invalid Amount");
            return;
        }
        console.log("new balance: ", newBalance);

        // 5. get the pin and verify
        const pin = getValueFromInput("transfer-pin");
        if(pin === "4312") {
            // 5-1. true:::show the alert > set balence
            alert("Transfer Successful");
            setBalance(newBalance);

            // 1. History container k dhore niye asbo
            const history  = document.getElementById("history-container");

            // 2. New div create korbo
            const newHistory = document.createElement("div");

            // 3. new div inner HTML add korbo
            newHistory.innerHTML = `
            <div class="transection-card p-5 bg-base-100">
           Send Money ${transferAmount} taka Successful to 
                ${transferNumber} at ${new Date()}
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