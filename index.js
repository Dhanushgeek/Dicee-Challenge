randomImg1();
randomImg2();

function randomImg1() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);

    var randomDiceImage = "images/dice" + randomNumber1 + ".png";

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomDiceImage);
}

function randomImg2() {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
}