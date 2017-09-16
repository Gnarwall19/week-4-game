$(document).ready(function() {

	//array that holds crystal images
	var crystals = ["assets/images/green.png", "assets/images/red.png", "assets/images/purple.png", "assets/images/yellow.png"]
	//shimmer sound
	var shimmer = new Audio("assets/audio/shimmer.mp3");

	var wins = 0;
	var losses = 0;
	var crystalNumbers = [];	//empty array to be filled with random numbers
	var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);		//generates a random number between 19 & 120

	//displays wins and losses on html page
	$("#wins").text(wins);
	$("#losses").text(losses);


	//function generates four random numbers and pushes them to the crystalNumbers array then assigns each number to a image in the crystal array
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

	//calculates wins and losses and resets variables after a win or loss
	function reset() {
		crystalNumbers = [];
		var counter = 0;
		$("#current-num").text(counter);

		var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
		$("#target-number").text(targetNumber);

		$(".crystal-img").on("click", function() {
			counter += parseInt($(this).data("num"));

			$("#current-num").text(counter);

			if (counter == targetNumber) {
				console.log("win");
				wins++;
				shimmer.play();
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