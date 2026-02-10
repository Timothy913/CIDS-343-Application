
const middleColumn = document.getElementById("column middle");


function PassiveIncome(upgradeList, moneyPerPeriod, elementId, description) {
	
	this.upgradeList = upgradeList;
	this.moneyPerPeriod = moneyPerPeriod;
	this.elementId = elementId;
	this.description = description;
	this.initialize();
}

PassiveIncome.prototype.initialize = function(){
	var newDiv = document.createElement("div");
	this.newDiv = newDiv;
	newDiv.className = "container";
	newDiv.setAttribute("id", this.elementId);
	newDiv.textContent = this.description + "\n(+" + String(this.moneyPerPeriod) + ")";
}

PassiveIncome.prototype.enable = function() {
	middleColumn.appendChild(this.newDiv);
	this.upgradeList.push(this);
}

PassiveIncome.prototype.disable = function() {
	this.upgradeList.pop(this);
	this.newDiv.remove();
}

PassiveIncome.prototype.getValue = function() {
	return this.moneyPerPeriod;
}

PassiveIncome.prototype.getDescription = function() {
	return this.description;
}