randomImg1();
randomImg2();
selectWinner();

function randomImg1() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);

    var randomDiceImage = "images/dice" + randomNumber1 + ".png";

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomDiceImage);

    return randomNumber1;
}

function randomImg2() {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    return randomNumber2;
}

function selectWinner() {
    var randomNumber1 = randomImg1();
    var randomNumber2 = randomImg2();

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "player 2 wins";
    } else {
        document.querySelector("h1").innerHTML = "Game draw";
    }
}