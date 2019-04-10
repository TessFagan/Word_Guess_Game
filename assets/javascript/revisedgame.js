// variables:
var gamewordoptions = ["apple", "banana", "peach", "orange", "kiwi", "strawberry", "lemon"]
var computerchoice = gamewordoptions[Math.floor(Math.random() * gamewordoptions.length)];
console.log(computerchoice)
var computerchoicearray = computerchoice.split("");
var userguesses = [""];
var lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var totalwins = 0
var guessesremaining = 12
var hangmanspaces = []
hangmanspaces.length = computerchoice.length
hangmanspaces.fill("_")
document.getElementById("hangmanspaces").innerHTML = hangmanspaces;
hangmanspacesstring = hangmanspaces.join("")
var indexpositions = []
var gamestart = false


document.onkeyup = function (event) {
    var text = event.key.toLowerCase();
    console.log(text);

    if (gamestart === false && text === "enter") {
        alert("Guess a letter!");
        console.log("The game started");
        gamestart = true;
    }

    else if (gamestart === true) {
        checkifguessvalid(text, gamestart);
        checkifvalidguesscorrect(text, gamestart, guessesremaining);
        addtospaces(text, gamestart, guessesremaining);
        winlose(gamestart, hangmanspacesstring, guessesremaining);
        // if(iwin? restart)
        if (guessesremaining === 0) {
            restart()
        }

    }

    else {
        alert("invalid input!");
    }
}

// functions //

function checkifguessvalid(text, gamestart) {
    if (gamestart === true && guessesremaining > 0 && lowerAlph.indexOf(text) === -1) {
        alert("bad Guess!")
    }
    else {
        userguesses.push(text);
        var userguessstring = userguesses.toString();
        console.log(userguessstring)
        document.getElementById("guesses").innerHTML = userguessstring;
        guessesremaining--
    }
}

function checkifvalidguesscorrect(text, gamestart) {
    if (gamestart === true && guessesremaining > 0 && computerchoicearray.indexOf(text) === -1) {
        // do nothing
    }
    else if (guessesremaining > 0 && gamestart === true) {
        alert("Success!");
    }
}

function addtospaces(text, gamestart) {
    for (j = 0; j < computerchoicearray.length; j++) {
        if (gamestart === true && guessesremaining > 0 && computerchoicearray[j] === text) {
            console.log(j);
            indexpositions.push(j);
            console.log(indexpositions)
            hangmanspaces[j] = text
            console.log(hangmanspaces)
            document.getElementById("hangmanspaces").innerHTML = hangmanspaces;
            hangmanspacesstring = hangmanspaces.join("")
            console.log(hangmanspacesstring)
        }
    }
}

function winlose(gamestart, hangmanspacesstring, guessesremaining) {
    if (gamestart === true && guessesremaining > 0 && hangmanspacesstring === computerchoice) {
        alert("you win!");
        totalwins++
        document.getElementById("wins").innerHTML = totalwins;
        console.log(totalwins)
    }
    else if (gamestart === true && guessesremaining === 0) {
        alert("you lose!")
    }
}

function restart() {
    computerchoice = gamewordoptions[Math.floor(Math.random() * gamewordoptions.length)];
    userguesses = [""];
    hangmanspaces = [];
    hangmanspaces.length = computerchoice.length;
    hangmanspaces.fill("_");
    document.getElementById("hangmanspaces").innerHTML = hangmanspaces;
    computerchoicearray = computerchoice.split("");
    userguessstring = userguesses.toString();
    document.getElementById("guesses").innerHTML = userguessstring;
    guessesremaining = 12;
    gametstart = false
}