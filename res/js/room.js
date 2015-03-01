//Room constructor
Room = function(name, text, picSrc) {
	this.name = name;
	this.playerInside = false;
	this.text = text;
	this.exits = {NORTH:null, SOUTH:null, EAST:null, WEST:null};
	this.items = [];
	this.people = [];
	this.picSrc = "<img src=\"" + picSrc + "\"></img>";
};

//for displaying text
Room.prototype.display = function() {
	$("#game").empty();
	$("#game").append(this.text + "<br> <br> Type \"help\" to go see a list of commands.");

	//adds the picture display
	$("#displayPicture").empty();
	$("#displayPicture").prepend("Area <br>");
	$("#displayPicture").append(this.picSrc);
};

//for adding exits for the rooms
Room.prototype.addExit = function(direction, room) {
	switch (direction) {
		case "NORTH":
			this.exits.NORTH = room;
			break;
		case "SOUTH":
			this.exits.SOUTH = room;
			break;
		case "WEST":
			this.exits.WEST = room;
			break;
		case "EAST":
			this.exits.EAST = room;	
			break;
		default:
			$("#game").append("<br> <br> You can't go this way.");
			break;
	};
	
};