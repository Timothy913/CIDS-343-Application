let clickerButton = document.getElementById("ClickerButton");
let counterDisplay = document.getElementById("CounterDisplay");

let passiveTimeout = 3000;
let passiveIncomeUpgrades = [];
let count = 0;

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