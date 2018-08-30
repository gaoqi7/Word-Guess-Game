// Initial Module
var arr = ["start","ok","dark","dock","fake","quick","world","starbucks"];
//TODO use Array manage the pressed key.
// var pressedKey = [];
// Random Pick one word and turn string to array
var wordRandom = arr[Math.floor(Math.random() * arr.length)].split("");
var i = 0;
var rate = 1.75;
var oriArr = Array(wordRandom.length).fill("*");
var k = Math.ceil(wordRandom.length * rate) - i ;
function vKdOn(){
document.getElementById("virtualKeyboard").style.visibility = "visible";
};
function vKdOff(){
    document.getElementById("virtualKeyboard").style.visibility = "hidden";
    };
// function overlayOn() {document.getElementById("overlay").style.display = "block";};
// function overlayOff(){document.getElementById("overlay").style.display = "none";document.getElementById("overlay").style.opacity = 0;};
// overlayOn();

//! Cheating Code
console.log(wordRandom);
//Loop Control Module 
function gameStart(){
    if (i == 0) {
        document.getElementById("passwordInput").value = "[  " + oriArr.join("") + "  ]";
        document.getElementById("livesNumber").value = "You have " + k +  " chances left!";
        // vKdSt.setAttribute("visibility","hidden");
        vKdOn();
        
        // overlayOff();
    }
    i++;
    k--;
}

// Data Process Module
function charFlip (char){
    var n = wordRandom.indexOf(char)
    while (n !== -1){
        oriArr[n] = wordRandom[n];
        n = wordRandom.indexOf(char,n+1);
    }
    document.getElementById(userInput.toUpperCase()).setAttribute("disabled","disabled");
    document.getElementById("passwordInput").value = "[  " + oriArr.join("") + "  ]"; 
    document.getElementById("livesNumber").value = "You have " + k +  " chances left!";
    if (i < Math.ceil(wordRandom.length * rate) && oriArr.join("") != wordRandom.join("") ){
        gameStart();  
    } else if ( i <= Math.ceil(wordRandom.length * rate) && oriArr.join("") === wordRandom.join("")  ) {
        vKdOff();
        
    } else {
        // alert("I know, you tried!");
        vKdOff();

    }
}




















