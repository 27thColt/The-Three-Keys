//item constructor
Item = function(name, text, room, canPickup, usable, useFunc) {
	this.name = name;
	this.text = text;
	room.items.push(this);
	this.canPickup = canPickup;
	this.usable = usable;

	//to see if the item is usable
	if (usable == true) {
		this.useFunc = useFunc;
	} else {
		this.useFunc = null;
	};
};

//displays the text of the item
Item.prototype.display = function() {
	$("#game").empty()
	if (this.canPickup == true) {
		$("#game").append(this.text + "<br> <br> Type \"get " + this.name + "\" put it in your inventory." + "<br> <br> Type \"look\" to see your surroundings.");
	} else {
		$("#game").append(this.text + "<br> <br> Type \"look\" to see your surroundings.");
	};
};