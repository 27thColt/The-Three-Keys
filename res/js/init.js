//use functions
funcInit = function() {
	//axe
	axeFunc = function() {
		if (player.room.name == "forest clearing") {
			$("#game").append("<br> <br> You used the axe.");
			$("#game").append("<br> You chopped down some trees! There is now a path leading west.");
			forestClearing1.text = "You are in a forest clearing, there is nothing but grass and flowers. <br> There is a path to the south that leads deeper in the forest. <br> There are chopped trees leading to a small village to the west.";
			forestClearing1.addExit("WEST", smallTown1);
		} else {
			$("#game").append("<br> <br> You hear Prof. Oak's words: Now is not the time to use that..");
		};
	};
};



//loads everything
init = function() {
	var name = prompt("What is the name you want to use in the game?");

	//rooms
	forest1 = new Room("forest", "You are in the middle of a forest. <br> You see a path north of you leading to somewhere mysterious. <br> There is a cabin to the east. ", "assets/img/areaDisplay/forest1.png");
	forestClearing1 = new Room("forest clearing", "You are in a forest clearing, there is nothing but grass and flowers. <br> There is a path to the south that leads deeper in the forest.", "assets/img/areaDisplay/forestClearing1.png");
	cabin1 = new Room("cabin", "It is warm inside. <br> There are a few posters and a table. <br> There is also a refrigerator at the side. <br> You see a green carpet on the floor and a note is on the floor.", "assets/img/areaDisplay/cabin1.png");
	smallTown1 = new Room("small town", "A small village. <br> There is an inn to the west. <br> There is a small cafe to the north. <br> There is a strange man eyeing the window of the cafe. <br> There are chopped trees to the east.");

	//player
	player = new Player(name, forest1);

	funcInit();

	//items
	poster = new Item("poster", "Think your the best of the best? <br> Then take on the Adventurer's Dream! <br> What is it you say? <br> It is a contest to see who is the best explorer! <br> You can earn fabulous prizes like an unlimited supply of Fried Chicken! <br> So go to Gorigan City and apply now!", cabin1, true, false);
	note = new Item("note", "Dear, " + player.name+ "<br> I have gone to face the Adventurer's Dream challenge. <br> I might not return.... <br> from, Buddy", cabin1, true, false);
	refridgerator = new Item("refridgerator", "Looks like it is off..", cabin1, false, false);
	table = new Item("table", "Woah, there is an axe under the table!", cabin1, false, false);
	axe = new Item("axe", "This axe looks like it could cut off some of the trees around here..", cabin1, true, true, axeFunc);

	//exits
	forest1.addExit("NORTH", forestClearing1);
	forest1.addExit("EAST", cabin1);
	forestClearing1.addExit("SOUTH", forest1);
	cabin1.addExit("WEST", forest1);	
};