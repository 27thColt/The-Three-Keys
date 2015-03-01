NPC = function(name, room, talkable, text) {
	this.name = name;
	room.people.push(this);
	this.talkable = talkable;

	if (talkable == true) {
		this.text = text;
	} else {
		this.text = null;
	};
};

NPC.prototype.talk = function() {
	$("#game").empty();
	$("#game").append("" + this.name + ":");
	$("#game").append("<br> <br>" + this.text);
};