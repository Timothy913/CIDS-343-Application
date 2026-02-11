let clickerButton = document.getElementById("ClickerButton");
let counterDisplay = document.getElementById("CounterDisplay");
let upgrade1 = document.getElementById("upgrade1");
let upgrade2 = document.getElementById("upgrade2");


let passiveTimeout = 3000;
let passiveIncomeUpgrades = [];
let count = 0;

function welcome() {
    alert ("Step into the world of digital wealth where every tap brings you closer to the ultimate payout. Our single-page clicker game allows you to go from rags to riches by clicking the dollar sign to earn crypto. Players can use their accumulated riches to purchase upgrades to including automated clickers to keep your fortune growing in while you are sleep! hover your mouse over upgrades to see the a cost and description. To earn your fortune start clicking the dollar sign!")
}

function changeMoneyCount(change) {	
	count += change;
	counterDisplay.textContent = "Crypto Coins: " + String(count);
}

function tickPassiveIncomeObjects() {
	let sum = 0;
	passiveIncomeUpgrades.forEach((pi) => {
		sum += pi.getValue();
	});
	changeMoneyCount(sum);
}

passiveIncome1 = new PassiveIncome(passiveIncomeUpgrades, 15, "smallGPU", "New GPU to mine Crypto");
passiveIncome2 = new PassiveIncome(passiveIncomeUpgrades, 100, "roomOfGPU", "A whole room of GPUs");
var intervalId = setInterval(function() { tickPassiveIncomeObjects(); }, 3000);


clickerButton.addEventListener("click", function() {
	changeMoneyCount(1);
});

upgrade1.addEventListener("click", function() {
    if (count < 15){
        alert("not enough crypto")
    }else{
    alert("success")
    passiveIncome1.enable();
    this.remove()
    count = -15;
    }
})

upgrade2.addEventListener("click", function() {
    if (count < 100){
        alert("not enough Crypto")
    }else{
    alert("success")
    passiveIncome2.enable();
    this.remove()
    count = -100;
    }
})
