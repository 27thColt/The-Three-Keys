//checks if the web page is ready
$(document).ready(function() {
	init();

	forest1.display();

	$("#form").submit(function() {
		input = $("#commandLine").val()
		console.log(input);
		parse(input);
		$("#commandLine").val("");
	});
});