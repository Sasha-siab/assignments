
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
var floor = 0;
var dir  = 'up';
var user = 0;


myEmitter.on('down', function() {
	floor--;
	// console.log(floor);
})



myEmitter.on('up', function() {
	floor++;
	// console.log(floor);
})


let people = [ { name: 'Jerry', destination: 4 }, { name: 'Kramer', destination: 10 }, { name: 'Newman', destination: 2 }]


setInterval(function(){
		let dest = people[user].destination;
		// console.log(dest);
	if (floor == 0) {
		dir = 'up' 
	} else if (floor == dest){
		console.log("get out, it's your floor");
		console.log(floor);
		dir = "down";
		user++;
	}
			
			// when we drop off a user, lets add 1 to the user variable.
	
	myEmitter.emit(dir);
},1000);

 


// when the elevator gets to the 10 floor switch the direction to the opposite  DONE
// when the elevator gets to the 0 floor switch again   DONE
// every time  when the elevator gets to a new floor - console log the current floor 




// loop the people 
// create a var that has a destination of every person  ( dest)
// check the destination 
// if floor = dest {
// } switch the dir
// go down















