// Words poll
var arr = ["start","ok","dark","dock","fake","quick","world","starbucks"];
//TODO use Array manage the pressed key.
// var pressedKey = [];
// Random Pick one word and turn string to array
var wordRandom = arr[Math.floor(Math.random() * arr.length)].split("");
// ith key press
var i = 0;
// degree of difficulty
var rate = 1.75;
// origin state of the random word.
var oriArr = Array(wordRandom.length).fill("*");
//chances left
var k = Math.ceil(wordRandom.length * rate) - i ;
//toggle virtualKeyboard's visibility( visible or hidden )
function vKdOn(){
document.getElementById("virtualKeyboard").style.visibility = "visible";
};
function vKdOff(){
    document.getElementById("virtualKeyboard").style.visibility = "hidden";
    };
//Another way for hide and show virtual Keyboard
    // function overlayOn() {document.getElementById("overlay").style.display = "block";};
    // function overlayOff(){document.getElementById("overlay").style.display = "none";document.getElementById("overlay").style.opacity = 0;};
    // overlayOn();

//! Cheating Code
console.log(wordRandom);
//All the action after "start" key pressed. 
function gameStart(){
    //initialize
    if (i == 0) {
        document.getElementById("passwordInput").value = "[  " + oriArr.join("") + "  ]";
        document.getElementById("livesNumber").value = "You have " + k +  " chances left!";
        document.getElementById("startButton").textContent = "Good Luck !";
        vKdOn();
    };
    i++;
    k--;
}

// Data Process Module
function charFlip (char){
    var n = wordRandom.indexOf(char);
    //if the pressed key included in the chosen word, then switch "*" with the keyCode
    while (n !== -1){
        oriArr[n] = wordRandom[n];
        n = wordRandom.indexOf(char,n+1);
    }
    //disable the used key
    document.getElementById(userInput.toUpperCase()).setAttribute("disabled","disabled");
    //Output the result of current round
    document.getElementById("passwordInput").value = "[  " + oriArr.join("") + "  ]"; 
    document.getElementById("livesNumber").value = "You have " + k +  " chances left!";
    // Condition: Haven't found the word but still have chances left. Action: Continual
    if (i < Math.ceil(wordRandom.length * rate) && oriArr.join("") != wordRandom.join("") ){
        gameStart();  
    // Condition: Word found but still have chances left. Action: End the game by hide input device :)
    } else if ( i <= Math.ceil(wordRandom.length * rate) && oriArr.join("") === wordRandom.join("")  ) {
        vKdOff();
    // Condition: Word no found and  chances no left. Action: End the game.
    } else {
        vKdOff();

    }
}




















