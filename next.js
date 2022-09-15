var userInput = document.getElementById("userInput");
var submitButton = document.getElementById("submit");
var score = 0
var scoreText = document.getElementById("score")
var correctlyGuessed = []

var array = localStorage.getItem("list");
array = JSON.parse(array);


scoreText.innerHTML = `You have gotten ${score}/${array.length}`

function submit() {
    guess = document.getElementById("inputField").value;

    var array = localStorage.getItem("list");
    array = JSON.parse(array);

    if (correctlyGuessed.includes(guess)) {
        document.getElementById("correct").style.color = "orange";
        document.getElementById("correct").innerHTML = "You have already guessed this";
    } else if (array.includes(guess)) {
        score += 1
        correctlyGuessed.push(guess)

        document.getElementById("correct").style.color = "green";
        document.getElementById("correct").innerHTML = "Correct";
        console.log("correct")


        scoreText.innerHTML = `You have gotten ${score}/${array.length}`
    } else {
        document.getElementById("correct").style.color = "red";
        document.getElementById("correct").innerHTML = "Incorrect";
    }
}