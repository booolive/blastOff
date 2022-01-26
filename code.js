
var stopFlag = new Boolean(true);
var BOOWOMP = new Audio('BOOWOMP.mp3');
var AWESOME_MUSIC = new Audio('jeopardy.mp3');
var currentTimeout;
function startBlast() {
    //check if stopped, dont start timer again if its already going
    if(stopFlag) {
        stopFlag = false;
        document.getElementById("BlastOffText").innerHTML = "";
        console.log("ok, im blasting off now")
        AWESOME_MUSIC.play();
        var currTime = 50;
        //recursive solutions
        blastOff(currTime);
        function blastOff(timeRemaining) {
            //if stopped, dont do anything
            if(!stopFlag) {
                document.getElementById("BlastOffText").innerHTML+=timeRemaining+"\n";
                //if theres still time to count down, recursively call function with time-5
                //i havent worked with javascript before but im assuming setTimeout is asychronous 
                //so i cant just do setTimeOut(blastOff(x-5),5000) because it would run instantly
                //i tested it and that appeared to be the case
                if(timeRemaining > 0) {
                    currentTimeout = setTimeout(function() {
                        blastOff(timeRemaining-5);
                    }, 5000);
                } else {
                    
                    alert("blast off ! ! ! ! !");
                    stopFlag = true;
                }
            }
        }
    }
}

function stopThat() {
    AWESOME_MUSIC.pause();
    AWESOME_MUSIC.currentTime = 0;
    BOOWOMP.play();
    if(!stopFlag) {
        stopFlag = true;
        clearTimeout(currentTimeout);
        document.getElementById("BlastOffText").innerHTML = "ok ill stop jeez";
    } else {
        //get mad if it isnt doing anything, because its funny
        document.getElementById("BlastOffText").innerHTML = "dude im not even doing anything";
    }
}