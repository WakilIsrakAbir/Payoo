document.getElementById("bonus-btn")
    .addEventListener("click", function() {
        const newBalance = getBalance() + 10;
        console.log(newBalance);

        // 4. get the coupon and verify
        const coupon = getValueFromInput("coupon");
        if(coupon === "heartarx") {
            // 5-1. true:::add money and show the alert > set balence
            alert(`Get Coupon Successful from`);
            setBalance(newBalance);
        } else {
            // 5-2. false:::show an error alert > return
            alert("Invalid Coupon");
            return;
        }
    });