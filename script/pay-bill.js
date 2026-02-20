document.getElementById("pay-money-btn")
    .addEventListener("click", function() {
        // 1. bank account get
        const bankAccount = getValueFromInput("pay-money-bank");
        if(bankAccount == "Select Utility"){
            alert("please select Utility");
            return;
        }

        // 2. get bank account number
        const accno = getValueFromInput("pay-money-number");
        if(accno.length != 11) {
            alert("Invalid Account No.");
            return;
        }

        // 3. get amount
        const amount = getValueFromInput("pay-money-amount");

        const newBalance = getBalance() - Number(amount);
        console.log(newBalance);
        if(newBalance < 0) {
            alert("Invalid Amount");
            return;
        }

        // 4. get the pin and verify
        const pin = getValueFromInput("pay-money-pin");
        if(pin === "4312") {
            // 5-1. true:::show the alert > set balence
            alert(`Pay Money Successful from 
                ${bankAccount} 
                at ${new Date()}`);
            setBalance(newBalance);
        } else {
            // 5-2. false:::show an error alert > return
            alert("Invalid Pin");
            return;
        }
    });