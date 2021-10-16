
var highScore = document.querySelector("#highScore");
var reset = document.querySelector("#reset");
var startOver = document.querySelector("#startOver");

// Event listener to reset scores 
reset.addEventListener("click", function () {
    localStorage.reset();
    location.reload();
});
// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to move to index page
startOver.addEventListener("click", function () {
    window.location.replace("./index.html");
});