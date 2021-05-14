
//Script for Player name entry
function PlayerNameEntry (){
var player1 = "Player1";
var player2 = "Player2";


// prompt players for names
player1 = prompt("Please enter a name for Player 1.");
player2 = prompt("Please enter a name for Player 2.");
}

function Player1RollFirstSixSidedDie() {
  //Variables needed for first die
  var die1Roll = 0;
  var img1 = document.createElement("img");
  img1.src = "diceImages/dice1.png";
  var img2 = document.createElement("img");
  img2.src = "diceImages/dice2.png";
  var img3 = document.createElement("img");
  img3.src = "diceImages/dice3.png";
  var img4 = document.createElement("img");
  img4.src = "diceImages/dice4.png";
  var img5 = document.createElement("img");
  img5.src = "diceImages/dice5.png";
  var img6 = document.createElement("img");
  img6.src = "diceImages/dice6.png";

  //Die 1 math for random number
  die1Roll = Math.floor(Math.random() * 6 + 1);

  //Die 1 result logic and image display
  if (die1Roll === 1) {
      document.getElementById("player1Result1").innerHTML = player1 + " Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player1Result1").appendChild(img1);
  } else if (die1Roll === 2) {
      document.getElementById("player1Result1").innerHTML = "Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player1Result1").appendChild(img2);
  } else if (die1Roll === 3) {
      document.getElementById("player1Result1").innerHTML = "Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player1Result1").appendChild(img3);
  } else if (die1Roll === 4) {
      document.getElementById("player1Result1").innerHTML = "Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player1Result1").appendChild(img4);
  } else if (die1Roll === 5) {
      document.getElementById("player1Result1").innerHTML = "Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player1Result1").appendChild(img5);
  } else if (die1Roll === 6) {
      document.getElementById("player1Result1").innerHTML = "Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player1Result1").appendChild(img6);
  }
}

function Player1RollSecondSixSidedDie() {
  //Variables needed for first die
  var die2Roll = 0;
  var img1 = document.createElement("img");
  img1.src = "diceImages/dice1.png";
  var img2 = document.createElement("img");
  img2.src = "diceImages/dice2.png";
  var img3 = document.createElement("img");
  img3.src = "diceImages/dice3.png";
  var img4 = document.createElement("img");
  img4.src = "diceImages/dice4.png";
  var img5 = document.createElement("img");
  img5.src = "diceImages/dice5.png";
  var img6 = document.createElement("img");
  img6.src = "diceImages/dice6.png";

  //Die 1 math for random number
  die2Roll = Math.floor(Math.random() * 6 + 1);

  //Die 1 result logic and image display
  if (die2Roll === 1) {
      document.getElementById("player1Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player1Result2").appendChild(img1);
  } else if (die2Roll === 2) {
      document.getElementById("player1Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player1Result2").appendChild(img2);
  } else if (die2Roll === 3) {
      document.getElementById("player1Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player1Result2").appendChild(img3);
  } else if (die2Roll === 4) {
      document.getElementById("player1Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player1Result2").appendChild(img4);
  } else if (die2Roll === 5) {
      document.getElementById("player1Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player1Result2").appendChild(img5);
  } else if (die2Roll === 6) {
      document.getElementById("player1Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player1Result2").appendChild(img6);
  }
}

function Player1RollThirdSixSidedDie() {
  //Variables needed for first die
  var die3Roll = 0;
  var img1 = document.createElement("img");
  img1.src = "diceImages/dice1.png";
  var img2 = document.createElement("img");
  img2.src = "diceImages/dice2.png";
  var img3 = document.createElement("img");
  img3.src = "diceImages/dice3.png";
  var img4 = document.createElement("img");
  img4.src = "diceImages/dice4.png";
  var img5 = document.createElement("img");
  img5.src = "diceImages/dice5.png";
  var img6 = document.createElement("img");
  img6.src = "diceImages/dice6.png";

  //Die 1 math for random number 
  die3Roll = Math.floor(Math.random() * 6 + 1);

  //Die 1 result logic and image display
  if (die3Roll === 1) {
      document.getElementById("player1Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player1Result3").appendChild(img1);
  } else if (die3Roll === 2) {
      document.getElementById("player1Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player1Result3").appendChild(img2);
  } else if (die3Roll === 3) {
      document.getElementById("player1Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player1Result3").appendChild(img3);
  } else if (die3Roll === 4) {
      document.getElementById("player1Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player1Result3").appendChild(img4);
  } else if (die3Roll === 5) {
      document.getElementById("player1Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player1Result3").appendChild(img5);
  } else if (die3Roll === 6) {
      document.getElementById("player1Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player1Result3").appendChild(img6);
  }
}

function Player1RollFourthSixSidedDie() {
  //Variables needed for first die
  var die4Roll = 0;
  var img1 = document.createElement("img");
  img1.src = "diceImages/dice1.png";
  var img2 = document.createElement("img");
  img2.src = "diceImages/dice2.png";
  var img3 = document.createElement("img");
  img3.src = "diceImages/dice3.png";
  var img4 = document.createElement("img");
  img4.src = "diceImages/dice4.png";
  var img5 = document.createElement("img");
  img5.src = "diceImages/dice5.png";
  var img6 = document.createElement("img");
  img6.src = "diceImages/dice6.png";

  //Die 1 math for random number
  die4Roll = Math.floor(Math.random() * 6 + 1);

  //Die 1 result logic and image display
  if (die4Roll === 1) {
      document.getElementById("player1Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player1Result4").appendChild(img1);
  } else if (die4Roll === 2) {
      document.getElementById("player1Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player1Result4").appendChild(img2);
  } else if (die4Roll === 3) {
      document.getElementById("player1Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player1Result4").appendChild(img3);
  } else if (die4Roll === 4) {
      document.getElementById("player1Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player1Result4").appendChild(img4);
  } else if (die4Roll === 5) {
      document.getElementById("player1Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player1Result4").appendChild(img5);
  } else if (die4Roll === 6) {
      document.getElementById("player1Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player1Result4").appendChild(img6);
  }
}



//Player2

function Player2RollFirstSixSidedDie() {
  //Variables needed for first die
  var die1Roll = 0;
  var img1 = document.createElement("img");
  img1.src = "diceImages/dice1.png";
  var img2 = document.createElement("img");
  img2.src = "diceImages/dice2.png";
  var img3 = document.createElement("img");
  img3.src = "diceImages/dice3.png";
  var img4 = document.createElement("img");
  img4.src = "diceImages/dice4.png";
  var img5 = document.createElement("img");
  img5.src = "diceImages/dice5.png";
  var img6 = document.createElement("img");
  img6.src = "diceImages/dice6.png";

  //Die 1 math for random number
  die1Roll = Math.floor(Math.random() * 6 + 1);

  //Die 1 result logic and image display
  if (die1Roll === 1) {
      document.getElementById("player2Result1").innerHTML = "Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player2Result1").appendChild(img1);
  } else if (die1Roll === 2) {
      document.getElementById("player2Result1").innerHTML = "Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player2Result1").appendChild(img2);
  } else if (die1Roll === 3) {
      document.getElementById("player2Result1").innerHTML = "Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player2Result1").appendChild(img3);
  } else if (die1Roll === 4) {
      document.getElementById("player2Result1").innerHTML = "Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player2Result1").appendChild(img4);
  } else if (die1Roll === 5) {
      document.getElementById("player2Result1").innerHTML = "Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player2Result1").appendChild(img5);
  } else if (die1Roll === 6) {
      document.getElementById("player2Result1").innerHTML = "Die 1 result is: " + die1Roll + "\n";
      document.getElementById("player2Result1").appendChild(img6);
  }
}

function Player2RollSecondSixSidedDie() {
  //Variables needed for first die
  var die2Roll = 0;
  var img1 = document.createElement("img");
  img1.src = "diceImages/dice1.png";
  var img2 = document.createElement("img");
  img2.src = "diceImages/dice2.png";
  var img3 = document.createElement("img");
  img3.src = "diceImages/dice3.png";
  var img4 = document.createElement("img");
  img4.src = "diceImages/dice4.png";
  var img5 = document.createElement("img");
  img5.src = "diceImages/dice5.png";
  var img6 = document.createElement("img");
  img6.src = "diceImages/dice6.png";

  //Die 1 math for random number
  die2Roll = Math.floor(Math.random() * 6 + 1);

  //Die 1 result logic and image display
  if (die2Roll === 1) {
      document.getElementById("player2Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player2Result2").appendChild(img1);
  } else if (die2Roll === 2) {
      document.getElementById("player2Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player1Result2").appendChild(img2);
  } else if (die2Roll === 3) {
      document.getElementById("player2Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player2Result2").appendChild(img3);
  } else if (die2Roll === 4) {
      document.getElementById("player2Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player2Result2").appendChild(img4);
  } else if (die2Roll === 5) {
      document.getElementById("player2Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player2Result2").appendChild(img5);
  } else if (die2Roll === 6) {
      document.getElementById("player2Result2").innerHTML = "Die 2 result is: " + die2Roll + "\n";
      document.getElementById("player2Result2").appendChild(img6);
  }
}

function Player2RollThirdSixSidedDie() {
  //Variables needed for first die
  var die3Roll = 0;
  var img1 = document.createElement("img");
  img1.src = "diceImages/dice1.png";
  var img2 = document.createElement("img");
  img2.src = "diceImages/dice2.png";
  var img3 = document.createElement("img");
  img3.src = "diceImages/dice3.png";
  var img4 = document.createElement("img");
  img4.src = "diceImages/dice4.png";
  var img5 = document.createElement("img");
  img5.src = "diceImages/dice5.png";
  var img6 = document.createElement("img");
  img6.src = "diceImages/dice6.png";

  //Die 1 math for random number
  die3Roll = Math.floor(Math.random() * 6 + 1);

  //Die 1 result logic and image display
  if (die3Roll === 1) {
      document.getElementById("player2Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player2Result3").appendChild(img1);
  } else if (die3Roll === 2) {
      document.getElementById("player2Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player2Result3").appendChild(img2);
  } else if (die3Roll === 3) {
      document.getElementById("player2Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player2Result3").appendChild(img3);
  } else if (die3Roll === 4) {
      document.getElementById("player2Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player2Result3").appendChild(img4);
  } else if (die3Roll === 5) {
      document.getElementById("player2Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player2Result3").appendChild(img5);
  } else if (die3Roll === 6) {
      document.getElementById("player2Result3").innerHTML = "Die 3 result is: " + die3Roll + "\n";
      document.getElementById("player2Result3").appendChild(img6);
  }
}

function Player2RollFourthSixSidedDie() {
  //Variables needed for first die
  var die4Roll = 0;
  var img1 = document.createElement("img");
  img1.src = "diceImages/dice1.png";
  var img2 = document.createElement("img");
  img2.src = "diceImages/dice2.png";
  var img3 = document.createElement("img");
  img3.src = "diceImages/dice3.png";
  var img4 = document.createElement("img");
  img4.src = "diceImages/dice4.png";
  var img5 = document.createElement("img");
  img5.src = "diceImages/dice5.png";
  var img6 = document.createElement("img");
  img6.src = "diceImages/dice6.png";

  //Die 1 math for random number
  die4Roll = Math.floor(Math.random() * 6 + 1);

  //Die 1 result logic and image display
  if (die4Roll === 1) {
      document.getElementById("player2Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player2Result4").appendChild(img1);
  } else if (die4Roll === 2) {
      document.getElementById("player2Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player2Result4").appendChild(img2);
  } else if (die4Roll === 3) {
      document.getElementById("player2Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player2Result4").appendChild(img3);
  } else if (die4Roll === 4) {
      document.getElementById("player2Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player2Result4").appendChild(img4);
  } else if (die4Roll === 5) {
      document.getElementById("player2Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player2Result4").appendChild(img5);
  } else if (die4Roll === 6) {
      document.getElementById("player2Result4").innerHTML = "Die 4 result is: " + die4Roll + "\n";
      document.getElementById("player2Result4").appendChild(img6);
  }
}
