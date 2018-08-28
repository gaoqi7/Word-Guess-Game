// Initial Module
var arr = ["start","ok","dark","dock","fake","quick","world","bucks"];
//TODO use Array manage the pressed key.
var pressedKey = [];
// Random Pick one word and turn string to array
var wordRandom = arr[Math.floor(Math.random() * arr.length)].split("");
//! Cheating Code
console.log(wordRandom);

// Data Process Module
var oriArr = Array(wordRandom.length).fill("*")
var oriStr = oriArr.join("");
//Character flip function & disable used key & reset or a trigger("gameStart()") 
function charFlip (char){
        var n = wordRandom.indexOf(char)
        while (n !== -1){
            oriArr[n] = wordRandom[n];
            n = wordRandom.indexOf(char,n+1);
        }
//*    console.log("*** change to " + oriArr);
//*    console.log(userInput);
        document.getElementById(userInput.toUpperCase()).disabled = true;
        gameStart();  
}
//Loop Control Module 
var i = 0;
function gameStart(){
    document.getElementById("passwordInput").value = oriArr.join(""); 
    alert("Input Character");
    i++;
// Define how many time user can try basing on the random word length
//TODO Modify the rate number for Increase the difficulty.
    if (i >= Math.ceil(wordRandom.length * 1.5) ){
    alert("Times UP");
    };
    if (oriArr.join("") === wordRandom.join("") ){
        alert("what a great job")
    }; 
}





















