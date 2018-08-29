// Initial Module
var arr = ["start","ok","dark","dock","fake","quick","world","bucks"];
//TODO use Array manage the pressed key.
var pressedKey = [];
// Random Pick one word and turn string to array
var wordRandom = arr[Math.floor(Math.random() * arr.length)].split("");
var oriArr = Array(wordRandom.length).fill("*")
var oriStr = oriArr.join("");
//! Cheating Code
console.log(wordRandom);

//Loop Control Module 
var i = 0;
function gameStart(){
    
    alert("Input Character");
    i++;
    // Define how many time user can try basing on the random word length
    //TODO Modify the rate number for Increase the difficulty.
    
}

// Data Process Module
function charFlip (char){
    var n = wordRandom.indexOf(char)
    while (n !== -1){
        oriArr[n] = wordRandom[n];
        n = wordRandom.indexOf(char,n+1);
    }
    // console.log("*** change to " + oriArr);
    // console.log(userInput);
    // console.log(i);
    // console.log(oriArr.join(""));
    // console.log(wordRandom.join(""));
    // Define how many time user can try basing on the random word length
    //TODO Modify the rate number for Increase the difficulty.
    document.getElementById(userInput.toUpperCase()).disabled = true;
    document.getElementById("passwordInput").value = oriArr.join(""); 
    if (i < Math.ceil(wordRandom.length * 1.5) && oriArr.join("") != wordRandom.join("") ){
        gameStart();  
    } else if ( i <= Math.ceil(wordRandom.length * 1.5) && oriArr.join("") === wordRandom.join("")  ) {
        var j = 999;
        console.log(j);
    } else {
        alert("I know, you tried!")
    }
}




















