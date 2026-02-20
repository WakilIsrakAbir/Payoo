document.getElementById("add-money-btn")
    .addEventListener("click", function() {
        // 1. bank account get
        const bankAccount = getValueFromInput("add-money-bank");
        if(bankAccount == "Select a Bank"){
            alert("please select a bank");
            return;
        }

        // 2. get bank account number
        const accno = getValueFromInput("add-money-number");
        if(accno.length != 11) {
            alert("Invalid Account No.");
            return;
        }

        // 3. get amount
        const amount = getValueFromInput("add-money-amount");

        const newBalance = getBalance() + Number(amount);
        console.log(newBalance);

        // 4. get the pin and verify
        const pin = getValueFromInput("add-money-pin");
        if(pin === "4312") {
            // 5-1. true:::show the alert > set balence
            alert(`Add Money Successful from 
                ${bankAccount} 
                at ${new Date()}`);
            setBalance(newBalance);

            // 1. History container k dhore niye asbo
            const history  = document.getElementById("history-container");

            // 2. New div create korbo
            const newHistory = document.createElement("div");

            // 3. new div inner HTML add korbo
            newHistory.innerHTML = `
            <div class="transection-card p-5 bg-base-100">
            Add Money Successful from 
                ${bankAccount} , acc-no ${accno} at ${new Date()}
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