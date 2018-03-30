

//  //  PART 1 

// Numbers

var alfa = 343;    
var beta = 752;
var result = alfa + beta;

console.log(result);   // output to console
alert(result);   // output as a alert to the web page

console.log( alfa + beta ); // another way to do it

// String

var fname = "Sasha";
var lname = " Siabriuk";
var name = fname + lname;

console.log("this person's name is " + name);



//  // PART 2

var interests = [ " climbing", " coding", " design", " traveling"];
console.log(interests[0] + interests[1]);

console.log(fname + "'s hobbies are " + interests[0] + " and " + interests[1]);

// // PART 3

var number = 10;

if( number < 100) {
  alert("Hey! Your number is " + number +  " , and it is less than 100!" );
 } else  {
   alert("Hey! Your number is " + number + " , and it's greater than 100.");
 }

// //  PART 4


function myName(name) {
	alert( "Your name is " + name);
}

myName("Sasha");

// create a function that will show a typed name;

var person = prompt("What is your name?");  // create a window with the question and the space for answer

if (person != null){    // if something typed - show the typed simbols
	alert ( "Your name is " + person);   // works with numbers and strings
}

// //  PART 5



function virtualDoor(choise) {
	if(choise == 1){
		alert("Your choise is door " + choise + "."  +  " And your prize is NOTHING! HAHAHAHHAHAHAH");
	
    } else if(choise == 2){
		alert("Your choise is door " + choise + "."  +  " And your prize is a huge candy!");
	
    } else if(choise == 3){
		alert("Your choise is door " + choise + "."  +  " And your prize is $ 1000.000!");
	
    } else {
		alert("Well. You are not playing the game."); // in case there is no answer 
	
  }
}

var prompt = prompt("There are 3 doors, which one will you choose? Type 1, 2, or 3 to find out what is your prize.");
virtualDoor(prompt);















