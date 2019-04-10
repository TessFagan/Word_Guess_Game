// @ts-check

// List of Variables used:
// 1 - gamewordoptions = an array showing the possible options that the game can randomly select to use for hangman
// 2 - computerchoice = computer choice pick a word from the array - random math floor function
// 3 - userguesses = empty array that I will put the user guesses into
// 4 - lowerAlph = all the letters of the alphabet in lowercase
// 5 - hangmanspaces = dynamic number of spaces based on word length
// 6 - computerchoicearray = turned the computerchoice into an array so i can match against it
// 7 - text = input of guess
// 8 - totalwins = total number of wins all-time
// 9 - GuessesRemaining = Number of Guesses Remaining (I am giving players 12 guesses to start)

// Step 1: I need the game to start when they type anything
// Step 2: I need the computer to randomly pick a word to use from the gamewordoptions array for hangman
// Step 3: I need the screen to display blank spaces equal to the number of letters in the word the computer chose
// Step 4: I need to capture user guess using an onkeyup event
// Step 5: I need to check if the user guess is a letter or not, and convert to lowercase
// Step 6: If the guess is a letter, I need to add it to an empty array to store the user guesses made so far
// Step 7: I need to check if the letter guessed is part of the word chosen
// Step 8: If the letter guessed is successfully part of the word, i need it to fill in the hangmanspaces array in the right position, and display on screen
// Step 9: Need a way to reset the game after the person loses



var gamewordoptions = ["apple", "banana", "peach", "orange", "kiwi", "strawberry", "lemon"]
var computerchoice = gamewordoptions[Math.floor(Math.random() * gamewordoptions.length)];
console.log(computerchoice);
var userguesses = [""];
console.log(userguesses);
var lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var totalwins = 0
var guessesremaining = 12

// computer choice picks a word from the array
// set the number of spaces to the length of the word the computer picked

var hangmanspaces = []
hangmanspaces.length = computerchoice.length
console.log(hangmanspaces)
hangmanspaces.fill("_")
console.log(hangmanspaces)
document.getElementById("hangmanspaces").innerHTML = hangmanspaces;

// make an array from the computer choice
var computerchoicearray = computerchoice.split("");
console.log(computerchoicearray)

// make an empty array to capture index positions of userguess
var indexpositions = []

// function restart(guessesremaining) {
//     if (guessesremaining === 0) {
//         alert("youlose!");
//         var computerchoice = gamewordoptions[Math.floor(Math.random() * gamewordoptions.length)];
//         console.log(computerchoice);
//         var userguesses = [""];
//         console.log(userguesses);
//         var hangmanspaces = [];
//         hangmanspaces.length = computerchoice.length;
//         console.log(hangmanspaces);
//         hangmanspaces.fill("_");
//         console.log(hangmanspaces);
//         document.getElementById("hangmanspaces").innerHTML = hangmanspaces;
//         var computerchoicearray = computerchoice.split("");
//         console.log(computerchoicearray);
//         var userguessstring = userguesses.toString();
//         document.getElementById("guesses").innerHTML = userguessstring;
//         var guessesremaining = 12;
//         console.log(guessesremaining);
//     }
// }

for (i = 0; i < gamewordoptions.length; i++) {

    document.onkeyup = function (event) {
        // get the content of the user input
        var input = event.key.toLowerCase();
        var text = input;
        console.log(text);
        // see if it is part of the a-z, if it is, add to guess array
        // if (lowerAlph.indexOf(text) === -1) {
        // alert("NOT VALID GUESS")
        // }
        // else {
        // userguesses.push(text);
        // var userguessstring = userguesses.toString();
        // document.getElementById("guesses").innerHTML = userguessstring;
        // guessesremaining--
        // console.log(guessesremaining)
        restart(guessesremaining)
    }

    // see if the guess is part of computer chosen word, if it is, alert success

    // if (computerchoicearray.indexOf(text) === -1) {
    // alert("NO LUCK");
    // }
    // else {
    // alert("Success!");
    // for (j = 0; j < computerchoicearray.length; j++) {
    // if (computerchoicearray[j] === text) {
    // console.log(j);
    // indexpositions.push(j);
    // console.log(indexpositions)
    // hangmanspaces[j] = text
    // console.log(hangmanspaces)
    // document.getElementById("hangmanspaces").innerHTML = hangmanspaces;
    // hangmanspacesstring = hangmanspaces.join("")
    // console.log(hangmanspacesstring)
    // if (hangmanspacesstring === computerchoice) {
    // alert("you win!");
    // totalwins++
    // document.getElementById("wins").innerHTML = totalwins;
    // console.log(totalwins)
}
                }
            }
        }
        // if (guessesremaining === 0) {
        // alert("You Lose!")
        // }
    }
}