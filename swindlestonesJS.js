
var player1 = "Player1";
var player2 = "Player2";



//Script for Player name entry
function PlayerNameEntry() {
    var player1 = "Player1";
    var player2 = "Player2";


    // prompt players for names
    player1 = prompt("Please enter a name for Player 1.");
    player2 = prompt("Please enter a name for Player 2.");
    document.getElementById("playerNameIdentity1").innerHTML = player1 + "\n";
    document.getElementById("playerNameIdentity2").innerHTML = player2 + "\n";
    document.getElementById("player1RollButton").innerHTML = player1 + " Roll your dice.";
    document.getElementById("player2RollButton").innerHTML = player2 + " Roll your dice.";
}

function Player1RollFirstSixSidedDie() {
    //Variables needed for first die
    var player1 = document.getElementById('playerNameIdentity1').innerHTML;
    var p1DiceRoll1 = 0;
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
    p1DiceRoll1 = Math.floor(Math.random() * 6 + 1);

    //Die 1 result logic and image display
    if (p1DiceRoll1 === 1) {
        document.getElementById("player1Result1").innerHTML = player1 + " Die 1 result is: " + p1DiceRoll1 + "\n";
        document.getElementById("player1Result1").appendChild(img1);
        return p1DiceRoll1;
    } else if (p1DiceRoll1 === 2) {
        document.getElementById("player1Result1").innerHTML = player1 + "Die 1 result is: " + p1DiceRoll1 + "\n";
        document.getElementById("player1Result1").appendChild(img2);
        return p1DiceRoll1;
    } else if (p1DiceRoll1 === 3) {
        document.getElementById("player1Result1").innerHTML = player1 + "Die 1 result is: " + p1DiceRoll1 + "\n";
        document.getElementById("player1Result1").appendChild(img3);
        return p1DiceRoll1;
    } else if (p1DiceRoll1 === 4) {
        document.getElementById("player1Result1").innerHTML = player1 + "Die 1 result is: " + p1DiceRoll1 + "\n";
        document.getElementById("player1Result1").appendChild(img4);
        return p1DiceRoll1;
    } else if (p1DiceRoll1 === 5) {
        document.getElementById("player1Result1").innerHTML = player1 + "Die 1 result is: " + p1DiceRoll1 + "\n";
        document.getElementById("player1Result1").appendChild(img5);
        return p1DiceRoll1;
    } else if (p1DiceRoll1 === 6) {
        document.getElementById("player1Result1").innerHTML = player1 + "Die 1 result is: " + p1DiceRoll1 + "\n";
        document.getElementById("player1Result1").appendChild(img6);
        return p1DiceRoll1;
    }
}

function Player1RollSecondSixSidedDie() {
    //Variables needed for first die
    var player1 = document.getElementById('playerNameIdentity1').innerHTML;
    var p1DiceRoll2 = 0;
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

    //Die 2 math for random number
    p1DiceRoll2 = Math.floor(Math.random() * 6 + 1);

    //Die 2 result logic and image display
    if (p1DiceRoll2 === 1) {
        document.getElementById("player1Result2").innerHTML = player1 + "Die 2 result is: " + p1DiceRoll2 + "\n";
        document.getElementById("player1Result2").appendChild(img1);
        return p1DiceRoll2;
    } else if (p1DiceRoll2 === 2) {
        document.getElementById("player1Result2").innerHTML = player1 + "Die 2 result is: " + p1DiceRoll2 + "\n";
        document.getElementById("player1Result2").appendChild(img2);
        return p1DiceRoll2;
    } else if (p1DiceRoll2 === 3) {
        document.getElementById("player1Result2").innerHTML = player1 + "Die 2 result is: " + p1DiceRoll2 + "\n";
        document.getElementById("player1Result2").appendChild(img3);
        return p1DiceRoll2;
    } else if (p1DiceRoll2 === 4) {
        document.getElementById("player1Result2").innerHTML = player1 + "Die 2 result is: " + p1DiceRoll2 + "\n";
        document.getElementById("player1Result2").appendChild(img4);
        return p1DiceRoll2;
    } else if (p1DiceRoll2 === 5) {
        document.getElementById("player1Result2").innerHTML = player1 + "Die 2 result is: " + p1DiceRoll2 + "\n";
        document.getElementById("player1Result2").appendChild(img5);
        return p1DiceRoll2;
    } else if (p1DiceRoll2 === 6) {
        document.getElementById("player1Result2").innerHTML = player1 + "Die 2 result is: " + p1DiceRoll2 + "\n";
        document.getElementById("player1Result2").appendChild(img6);
        return p1DiceRoll2;
    }
}

function Player1RollThirdSixSidedDie() {
    //Variables needed for first die
    var player1 = document.getElementById('playerNameIdentity1').innerHTML;
    var p1DiceRoll3 = 0;
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

    //Die 3 math for random number 
    p1DiceRoll3 = Math.floor(Math.random() * 6 + 1);

    //Die 3 result logic and image display
    if (p1DiceRoll3 === 1) {
        document.getElementById("player1Result3").innerHTML = player1 + "Die 3 result is: " + p1DiceRoll3 + "\n";
        document.getElementById("player1Result3").appendChild(img1);
        return p1DiceRoll3;
    } else if (p1DiceRoll3 === 2) {
        document.getElementById("player1Result3").innerHTML = player1 + "Die 3 result is: " + p1DiceRoll3 + "\n";
        document.getElementById("player1Result3").appendChild(img2);
        return p1DiceRoll3;
    } else if (p1DiceRoll3 === 3) {
        document.getElementById("player1Result3").innerHTML = player1 + "Die 3 result is: " + p1DiceRoll3 + "\n";
        document.getElementById("player1Result3").appendChild(img3);
        return p1DiceRoll3;
    } else if (p1DiceRoll3 === 4) {
        document.getElementById("player1Result3").innerHTML = player1 + "Die 3 result is: " + p1DiceRoll3 + "\n";
        document.getElementById("player1Result3").appendChild(img4);
        return p1DiceRoll3;
    } else if (p1DiceRoll3 === 5) {
        document.getElementById("player1Result3").innerHTML = player1 + "Die 3 result is: " + p1DiceRoll3 + "\n";
        document.getElementById("player1Result3").appendChild(img5);
        return p1DiceRoll3;
    } else if (p1DiceRoll3 === 6) {
        document.getElementById("player1Result3").innerHTML = player1 + "Die 3 result is: " + p1DiceRoll3 + "\n";
        document.getElementById("player1Result3").appendChild(img6);
        return p1DiceRoll3;
    }
}

function Player1RollFourthSixSidedDie() {
    //Variables needed for first die
    var player1 = document.getElementById('playerNameIdentity1').innerHTML;
    var p1DiceRoll4 = 0;
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

    //Die 4 math for random number
    p1DiceRoll4 = Math.floor(Math.random() * 6 + 1);

    //Die 4 result logic and image display
    if (p1DiceRoll4 === 1) {
        document.getElementById("player1Result4").innerHTML = player1 + "Die 4 result is: " + p1DiceRoll4 + "\n";
        document.getElementById("player1Result4").appendChild(img1);
        return p1DiceRoll4;
    } else if (p1DiceRoll4 === 2) {
        document.getElementById("player1Result4").innerHTML = player1 + "Die 4 result is: " + p1DiceRoll4 + "\n";
        document.getElementById("player1Result4").appendChild(img2);
        return p1DiceRoll4;
    } else if (p1DiceRoll4 === 3) {
        document.getElementById("player1Result4").innerHTML = player1 + "Die 4 result is: " + p1DiceRoll4 + "\n";
        document.getElementById("player1Result4").appendChild(img3);
        return p1DiceRoll4;
    } else if (p1DiceRoll4 === 4) {
        document.getElementById("player1Result4").innerHTML = player1 + "Die 4 result is: " + p1DiceRoll4 + "\n";
        document.getElementById("player1Result4").appendChild(img4);
        return p1DiceRoll4;
    } else if (p1DiceRoll4 === 5) {
        document.getElementById("player1Result4").innerHTML = player1 + "Die 4 result is: " + p1DiceRoll4 + "\n";
        document.getElementById("player1Result4").appendChild(img5);
        return p1DiceRoll4;
    } else if (p1DiceRoll4 === 6) {
        document.getElementById("player1Result4").innerHTML = player1 + "Die 4 result is: " + p1DiceRoll4 + "\n";
        document.getElementById("player1Result4").appendChild(img6);
        return p1DiceRoll4;
    }
}



//Player2

function Player2RollFirstSixSidedDie() {
    //Variables needed for first die
    var player2 = document.getElementById('playerNameIdentity2').innerHTML;
    var p2DiceRoll1 = 0;
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
    p2DiceRoll1 = Math.floor(Math.random() * 6 + 1);

    //Die 1 result logic and image display
    if (p2DiceRoll1 === 1) {
        document.getElementById("player2Result1").innerHTML = player2 + "Die 1 result is: " + p2DiceRoll1 + "\n";
        document.getElementById("player2Result1").appendChild(img1);
        return p2DiceRoll1;
    } else if (p2DiceRoll1 === 2) {
        document.getElementById("player2Result1").innerHTML = player2 + "Die 1 result is: " + p2DiceRoll1 + "\n";
        document.getElementById("player2Result1").appendChild(img2);
        return p2DiceRoll1;
    } else if (p2DiceRoll1 === 3) {
        document.getElementById("player2Result1").innerHTML = player2 + "Die 1 result is: " + p2DiceRoll1 + "\n";
        document.getElementById("player2Result1").appendChild(img3);
        return p2DiceRoll1;
    } else if (p2DiceRoll1 === 4) {
        document.getElementById("player2Result1").innerHTML = player2 + "Die 1 result is: " + p2DiceRoll1 + "\n";
        document.getElementById("player2Result1").appendChild(img4);
        return p2DiceRoll1;
    } else if (p2DiceRoll1 === 5) {
        document.getElementById("player2Result1").innerHTML = player2 + "Die 1 result is: " + p2DiceRoll1 + "\n";
        document.getElementById("player2Result1").appendChild(img5);
        return p2DiceRoll1;
    } else if (p2DiceRoll1 === 6) {
        document.getElementById("player2Result1").innerHTML = player2 + "Die 1 result is: " + p2DiceRoll1 + "\n";
        document.getElementById("player2Result1").appendChild(img6);
        return p2DiceRoll1;
    }
}

function Player2RollSecondSixSidedDie() {
    //Variables needed for die and name
    var player2 = document.getElementById('playerNameIdentity2').innerHTML;
    var p2DiceRoll2 = 0;
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

    //Die 2 math for random number
    p2DiceRoll2 = Math.floor(Math.random() * 6 + 1);

    //Die 2 result logic and image display
    if (p2DiceRoll2 === 1) {
        document.getElementById("player2Result2").innerHTML = player2 + "Die 2 result is: " + p2DiceRoll2 + "\n";
        document.getElementById("player2Result2").appendChild(img1);
        return p2DiceRoll2;
    } else if (p2DiceRoll2 === 2) {
        document.getElementById("player2Result2").innerHTML = player2 + "Die 2 result is: " + p2DiceRoll2 + "\n";
        document.getElementById("player1Result2").appendChild(img2);
        return p2DiceRoll2;
    } else if (p2DiceRoll2 === 3) {
        document.getElementById("player2Result2").innerHTML = player2 + "Die 2 result is: " + p2DiceRoll2 + "\n";
        document.getElementById("player2Result2").appendChild(img3);
        return p2DiceRoll2;
    } else if (p2DiceRoll2 === 4) {
        document.getElementById("player2Result2").innerHTML = player2 + "Die 2 result is: " + p2DiceRoll2 + "\n";
        document.getElementById("player2Result2").appendChild(img4);
        return p2DiceRoll2;
    } else if (p2DiceRoll2 === 5) {
        document.getElementById("player2Result2").innerHTML = player2 + "Die 2 result is: " + p2DiceRoll2 + "\n";
        document.getElementById("player2Result2").appendChild(img5);
        return p2DiceRoll2;
    } else if (p2DiceRoll2 === 6) {
        document.getElementById("player2Result2").innerHTML = player2 + "Die 2 result is: " + p2DiceRoll2 + "\n";
        document.getElementById("player2Result2").appendChild(img6);
        return p2DiceRoll2;
    }
}

function Player2RollThirdSixSidedDie() {
    //Variables needed for die
    var player2 = document.getElementById('playerNameIdentity2').innerHTML;
    var p2DiceRoll3 = 0;
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

    //Die 3 math for random number
    p2DiceRoll3 = Math.floor(Math.random() * 6 + 1);

    //Die 3 result logic and image display
    if (p2DiceRoll3 === 1) {
        document.getElementById("player2Result3").innerHTML = player2 + "Die 3 result is: " + p2DiceRoll3 + "\n";
        document.getElementById("player2Result3").appendChild(img1);
        return p2DiceRoll3;
    } else if (p2DiceRoll3 === 2) {
        document.getElementById("player2Result3").innerHTML = player2 + "Die 3 result is: " + p2DiceRoll3 + "\n";
        document.getElementById("player2Result3").appendChild(img2);
        return p2DiceRoll3;
    } else if (p2DiceRoll3 === 3) {
        document.getElementById("player2Result3").innerHTML = player2 + "Die 3 result is: " + p2DiceRoll3 + "\n";
        document.getElementById("player2Result3").appendChild(img3);
        return p2DiceRoll3;
    } else if (p2DiceRoll3 === 4) {
        document.getElementById("player2Result3").innerHTML = player2 + "Die 3 result is: " + p2DiceRoll3 + "\n";
        document.getElementById("player2Result3").appendChild(img4);
        return p2DiceRoll3;
    } else if (p2DiceRoll3 === 5) {
        document.getElementById("player2Result3").innerHTML = player2 + "Die 3 result is: " + p2DiceRoll3 + "\n";
        document.getElementById("player2Result3").appendChild(img5);
        return p2DiceRoll3;
    } else if (p2DiceRoll3 === 6) {
        document.getElementById("player2Result3").innerHTML = player2 + "Die 3 result is: " + p2DiceRoll3 + "\n";
        document.getElementById("player2Result3").appendChild(img6);
        return p2DiceRoll3;
    }
}

function Player2RollFourthSixSidedDie() {
    //Variables needed for die and name

    var player2 = document.getElementById('playerNameIdentity2').innerHTML;
    var p2DiceRoll4 = 0;
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

    //Die 4 math for random number
    p2DiceRoll4 = Math.floor(Math.random() * 6 + 1);

    //Die 4 result logic and image display
    if (p2DiceRoll4 === 1) {
        document.getElementById("player2Result4").innerHTML = player2 + "Die 4 result is: " + p2DiceRoll4 + "\n";
        document.getElementById("player2Result4").appendChild(img1);
        return p2DiceRoll4;
    } else if (p2DiceRoll4 === 2) {
        document.getElementById("player2Result4").innerHTML = player2 + "Die 4 result is: " + p2DiceRoll4 + "\n";
        document.getElementById("player2Result4").appendChild(img2);
        return p2DiceRoll4;
    } else if (p2DiceRoll4 === 3) {
        document.getElementById("player2Result4").innerHTML = player2 + "Die 4 result is: " + p2DiceRoll4 + "\n";
        document.getElementById("player2Result4").appendChild(img3);
        return p2DiceRoll4;
    } else if (p2DiceRoll4 === 4) {
        document.getElementById("player2Result4").innerHTML = player2 + "Die 4 result is: " + p2DiceRoll4 + "\n";
        document.getElementById("player2Result4").appendChild(img4);
        return p2DiceRoll4;
    } else if (p2DiceRoll4 === 5) {
        document.getElementById("player2Result4").innerHTML = player2 + "Die 4 result is: " + p2DiceRoll4 + "\n";
        document.getElementById("player2Result4").appendChild(img5);
        return p2DiceRoll4;
    } else if (p2DiceRoll4 === 6) {
        document.getElementById("player2Result4").innerHTML = player2 + "Die 4 result is: " + p2DiceRoll4 + "\n";
        document.getElementById("player2Result4").appendChild(img6);
        return p2DiceRoll4;
    }
}

function RollPlayer1Dice() {
    var d1 = Player1RollFirstSixSidedDie();
    var d2 = Player1RollSecondSixSidedDie();
    var d3 = Player1RollThirdSixSidedDie();
    var d4 = Player1RollFourthSixSidedDie();
    var diceArray = [d1, d2, d3, d4];
    document.getElementById("p1DiceArray").innerHTML = diceArray;
}

function RollPlayer2Dice() {
    var d1 = Player2RollFirstSixSidedDie();
    var d2 = Player2RollSecondSixSidedDie();
    var d3 = Player2RollThirdSixSidedDie();
    var d4 = Player2RollFourthSixSidedDie();
    var diceArray = [d1, d2, d3, d4];
    document.getElementById("p2DiceArray").innerHTML = diceArray;
}

function CompareDiceValues() {
    var player1 = document.getElementById('playerNameIdentity1').innerHTML;
    var player2 = document.getElementById('playerNameIdentity2').innerHTML;
    var player1Dice = document.getElementById("p1DiceArray").innerHTML;
    var player2Dice = document.getElementById("p2DiceArray").innerHTML;
    var p1DiceArray = player1Dice.split(",");
    var p2DiceArray = player2Dice.split(",");
    var p1DiceWins = 0;
    var p2DiceWins = 0;

    //Sort arrays
    p1DiceArray = p1DiceArray.sort();
    p2DiceArray = p2DiceArray.sort();

    //Deterimine winner by checking each value in array
    for (i = 0; i < 3; i++) {
        if (p1DiceArray[i] > p2DiceArray[i]) {
            p1DiceWins += 1;
        } else if (p1DiceArray[i] < p2DiceArray[i]) {
            p2DiceWins += 1;
        }
    }
    //Display the winner from dice wins
    if (p1DiceWins > p2DiceWins) {
        document.getElementById("compareResults").innerHTML += player1 + " is the winner!";
    } else if (p1DiceWins < p2DiceWins) {
        document.getElementById("compareResults").innerHTML += player2 + " is the winner!";
    }
}
