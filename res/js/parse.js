//for parsing the text
parse = function(string) {
	//help command
	if (string.substr(0, 4) == "help") {
		$("#game").empty();
		$("#game").append("Commands: <br> -look [looks at the current area the player is in] <br> -go (north/east/south/west) [go to another area] <br> -examine (item) [looks at an item] <br> -get (item) [puts an item from your current area and puts it in you inventory for later use] <br> -inventory [give you a list of items in your inventory]");
		$("#game").append("<br> -use (item) [use an item that is in your inventory] <br> -talk (person's name) [talk to someone who is in the room]");
		$("#game").append("<br> <br> type \"look\" to see your surroundings.");

	//look command
	} else if (string.substr(0, 4) == "look") {
		player.room.display();

	//go command
	} else if (string.substr(0, 2) == "go") {

		//checks which direction the player wants to go
		if (string.substr(3, 5) == "north") {
			if (player.room.exits.NORTH != null) {
				player.changeRoom(player.room, player.room.exits.NORTH);
				player.room.display();
			} else {
				$("#game").append("<br>You can't go that way.");
			};
		} else if (string.substr(3, 5) == "south") {
			if (player.room.exits.SOUTH != null) {
				player.changeRoom(player.room, player.room.exits.SOUTH);
				player.room.display();
			} else {
				$("#game").append("<br>You can't go that way.");
			};
		} else if (string.substr(3, 4) == "east") {
			if (player.room.exits.EAST != null) {
				player.changeRoom(player.room, player.room.exits.EAST);
				player.room.display();
			} else {
				$("#game").append("<br>You can't go that way.");
			};
		} else if (string.substr(3, 4) == "west") {
			if (player.room.exits.WEST != null) {
				player.changeRoom(player.room, player.room.exits.WEST);
				player.room.display();
			} else {
				$("#game").append("<br>You can't go that way.");
			};
		};

	//examine commmand
	} else if (string.substr(0, 7) == "examine") {
		//test for the room 
		for (var i = 0; i < player.room.items.length; i++) {
			if (string.substr(8, string.length - 8) == player.room.items[i].name) {
				player.room.items[i].display();
				break;
			};
		};
		//if that doesn't work, try the inventory
		for (var i = 0; i < player.inventory.length; i++) {
			if (string.substr(8, string.length - 8) == player.inventory[i].name) {
				player.inventory[i].display();
				break;
			};
		};

	//the get command
	} else if (string.substr(0,3) == "get") {
		player.getItem(string.substr(4, string.length - 4));

	//use command
	} else if (string.substr(0, 3) == "use"){
		for (var i = 0; i < player.inventory.length; i++) {
			if (string.substr(4, string.length - 4) == player.inventory[i].name && player.inventory[i].usable == true) {
				player.inventory[i].useFunc();
			};
		};

	//talk command
	} else if (string.substr(0, 4) == "talk") {
		for (var i = 0; i < player.room.people.length; i++) {
			if (string.substr(5, string.length - 5) == player.room.people[i].name && player.room.people[i].talkable == true) {
				player.room.people[i].talk();
			};
		};
	} else {
		$("#game").empty();
		$("#game").append("Sorry, \"" + input +  "\" is not a command" + "<br> type \"help\" for a list of commands.");
	};
};