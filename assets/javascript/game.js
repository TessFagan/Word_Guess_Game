// @ts-check

// List of Variables used:
// 1 - gamewordoptions = an array showing the possible options that the game can randomly select to use for hangman
// 2 - computerchoice = computer choice pick a word from the array - random math floor function
// 3 - userguesses = empty array that I will put the user guesses into
// 4 - lowerAlph = all the letters of the alphabet in lowercase
// 5 - hangmanspaces = dynamic number of _ based on word length
// 6 - computerchoicearray = turned the computerchoice into an array so i can match against it
// 7 - text = input of guess

// Step 1: I need the game to start when they type anything
// Step 2: I need the computer to randomly pick a word to use from the gamewordoptions array for hangman
// Step 3: I need the screen to display blank spaces equal to the number of letters in the word the computer chose
// Step 4: I need to capture user guess using an onkeyup event
// Step 5: I need to check if the user guess is a letter or not, and convert to lowercase
// Step 6: If the guess is a letter, I need to add it to an empty array to store the user guesses made so far
// Step 7: I need to check if the letter guessed is part of the word chosen
// Step 8: If the letter guessed is successfully part of the word, i need it to fill in the hangmanspaces array in the right position, and display on screen



var gamewordoptions = ["apple", "banana", "peach", "orange", "kiwi", "strawberry"]
var computerchoice = gamewordoptions[Math.floor(Math.random() * gamewordoptions.length)];
console.log(computerchoice);
var userguesses = [""];
console.log(userguesses);
var lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// computer choice picks a word from the array
// set the number of spaces to the length of the word the computer picked

var hangmanspaces = []
hangmanspaces.length = computerchoice.length
console.log(hangmanspaces)
hangmanspaces.fill("_")
console.log(hangmanspaces)
var hangmanspacesstring = hangmanspaces.toString()
document.getElementById("hangmanspaces").innerHTML = hangmanspacesstring;

// make an array from the computer choice
var computerchoicearray = computerchoice.split("");
console.log(computerchoicearray)




for (i = 0; i < gamewordoptions.length; i++) {

    document.onkeyup = function (event) {
        // get the content of the user input
        var input = event.key.toLowerCase();
        var text = input;
        console.log(text);
        // see if it is part of the a-z, if it is, add to guess array
        if (lowerAlph.indexOf(text) === -1) {
            alert("NOT VALID GUESS")
        }
        else {
            userguesses.push(text);
            var userguessstring = userguesses.toString();
            document.getElementById("guesses").innerHTML = userguessstring;
        }

        // see if the guess is part of computer chosen word, if it is, alert success

        if (computerchoicearray.indexOf(text) === -1) {
            alert("NO LUCK");
        }
        else {
            alert("Success!");
            var a = computerchoicearray.indexOf(text);
            console.log(a)

            // function getAllIndexes(computerchoicearray, text) {
            // var indexes = [], i;
            // for (i = 0; i < computerchoicearray.length; i++)
            // if (computerchoicearray[i] === text)
            // indexes.push(i);
            // return indexes;
        }
        // var b = getAllIndexes()
        // console.log(b)
    }
}

// I am having trouble figuring out how to find index positions of all instances of element in array 