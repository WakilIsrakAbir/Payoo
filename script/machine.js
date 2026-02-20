// machine id -> input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}


// machine -> balance
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("current balance", Number(balance))
    return Number(balance);
}


// machine -> set Balance
function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

// machine id ->  hide all -> show id
function showOnly(id) {
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const transfer = document.getElementById("transfer");
    const payBill = document.getElementById("pay-bill");
    const getBonus = document.getElementById("get-bonus");
    // console.log(`add Money - ${addmoney} , cashout - ${cashout}`);
    // sobai k hide kore dao
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transfer.classList.add("hidden");
    payBill.classList.add("hidden");
    getBonus.classList.add("hidden");
    // id wala element k show koro
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}