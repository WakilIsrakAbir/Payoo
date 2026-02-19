document.getElementById("login-btn")
    .addEventListener("click", function() {
        // 1. get the mobile number input
        const numberInput = document.getElementById("input-number");
        const contactNumber = numberInput.value;
        console.log(contactNumber);

        // 2. get the pin input
        const inputPin = document.getElementById("input-pin");
        const pin = inputPin.value;
        console.log(pin);

        // 3. match pin & number
        if(contactNumber === "01849846805" && pin === "4312") {
            // 3-1. true:::>> alart> home
            alert("Login Successfully");
            window.location.assign("./home.html")
        }
        else{
            // 3-2. false:::>> alart> return
            alert("Login Fail");
            return;
        }
    });