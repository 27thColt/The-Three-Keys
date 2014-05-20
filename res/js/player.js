//the Player cunstructor
Player = function(name, room) {
	this.name = name;
	room.playerInside = true;
	this.room = room;
	this.inventory = [];
};

//for changing rooms
Player.prototype.changeRoom = function(oldRoom, newRoom) {
	oldRoom.playerInside = false
	newRoom.playerInside = true;
	this.room = newRoom;
};

//for putting an item into your inventory
Player.prototype.getItem = function(item) {
	for (var i = 0; i < this.room.items.length; i++) {
		if (item == this.room.items[i].name && this.room.items[i].canPickup == true) {
			this.inventory.push(this.room.items[i]);

			this.room.items.splice(i, 1);
			$("#game").append("<br> <br> You took the " + item + ".");

			break;
		};
	};
};