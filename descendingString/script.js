

// Goal:
// Develop a small script using JavaScript and
// have the output display in a terminal window using Node.


var LetsCount = setInterval(function(){
    console.log(letsCountDown("*"));  // console log a star every second
}, 1000)   // one second interval

var myStars = 11; // the max amount of stars to start counting down from 



function letsCountDown(x){ // a function that decreases the number of stars each time it repeats itself
    myStars--;     // minus one each time
    return x.repeat(myStars); // repeat the function
}


setTimeout(function(){
    clearInterval(LetsCount);  // stop looping
}, 11000);