$(document).ready(function() {

	var crystals = ["assets/images/green.png", "assets/images/red.png", "assets/images/purple.png", "assets/images/yellow.png"]

	var wins = 0;
	var losses = 0;
	var crystalNumbers = [];
	var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);

	$("#wins").text(wins);
	$("#losses").text(losses);


	function crystalGen() {


		for (var i = 0; i < 4; i++) {
			var randomNum = Math.floor(Math.random() * 12 + 1);
			crystalNumbers.push(randomNum);
		}
		console.log(crystalNumbers);

		for (var i = 0; i < crystalNumbers.length; i++) {
			var crystalAssign = $("<img>");
			crystalAssign.attr("data-num", crystalNumbers[i]);
			crystalAssign.attr("src", crystals[i]);
			crystalAssign.addClass("crystal-img");
			$("#crystals").append(crystalAssign);
		}
	}


	function reset() {
		var counter = 0;
		$("#current-num").text(counter);

		var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
		$("#target-number").text(targetNumber);

		$(".crystal-img").on("click", function() {
			counter = counter + parseInt($(this).data("num"));

			$("#current-num").text(counter);

			if (counter == targetNumber) {
				console.log("win");
				wins++;
				$("#wins").text(wins);
				$("#crystals").empty();
				crystalGen();
				reset();

			} else if (counter > targetNumber) {
				console.log("lose");
				losses++;
				$("#losses").text(losses);
				$("#crystals").empty();
				crystalGen();
				reset();
			}
		});


	}

crystalGen();
reset();

	});








