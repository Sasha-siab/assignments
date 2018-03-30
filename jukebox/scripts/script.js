console.log("hello");

var track1 = new Audio("./audio/08_biyo.m4a"); //earth wind and fire, spirit
var track2 = new Audio("./audio/2-02_joy_inside_my_tears.m4a");//st w , songs in the key of life
var track3 = new Audio("./audio/2-07_another_star.m4a");// st w , songs in the key of life
var track4 = new Audio("./audio/02_wipe_ur_mouth.m4a");// demarkus lewis, snazitron EP
//create an array with all Songs
var audioFiles = [track1, track2, track3, track4];

var tracks = document.getElementsByClassName("track");
var titleHolder = document.getElementById("title1");
var artistHolder = document.getElementById("artist1");
var albumHolder = document.getElementById("album1");
var timeHolder = document.getElementById("time1");
// for (let i in audioFiles) {
//  this['MusicItem'+i] = MusicItem( )
// }

var MusicItem = function(music, trackInfo, index) {
  this.music = music;
  this.trackInfo = trackInfo;
  this.index = index;
}

var object0 = new MusicItem(audioFiles[0],tracks[0],0);
var object1 = new MusicItem(audioFiles[1],tracks[1],1);
var object2 = new MusicItem(audioFiles[2],tracks[2],2);
var object3 = new MusicItem(audioFiles[3],tracks[3],3);

var currentlyPlaying;
var currentlyPlayingIndex;

var songs = [object0, object1, object2, object3];


// ________________________________________PLAY BUTTON

var playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
  if (currentlyPlaying) {
    currentlyPlaying.play();
  }else{
    object0.music.play();
    currentlyPlaying = object0.music;
    currentlyPlayingIndex = object0.index;
  }
})


//_________________________________________PAUSE BUTTON

var pauseButton =document.getElementById("pause");
pauseButton.addEventListener("click", function () {
  currentlyPlaying.pause();
})

//_________________________________________STOP BUTTON
//currentlyPlaying from the beggining
var stopButton =document.getElementById("stop");
stopButton.addEventListener("click", function () {
  currentlyPlaying.currentTime = 0;
  currentlyPlaying.pause();
})

//_________________________________________PREV BUTTON
// get an index of a current playing songs
// check if the index is less than 0, if it is  - play last song
//  if it is not - decrease index by 1 and play it

var prevButton =document.getElementById("prev");
prevButton.addEventListener("click", function () {
  if (!currentlyPlaying) {  // check if something is not  playing
    object0.music.play(); // if nothing is playing  go to the first song
    currentlyPlaying = object0.music;
    currentlyPlayingIndex = object0.index;
    return; // get out of the function
  }
  currentlyPlaying.pause(); // stops playing song
  if (currentlyPlayingIndex <= 0) {  // checking current index
    currentlyPlaying = window['object' + (songs.length-1)].music ; //  send us to the last song
    currentlyPlayingIndex = songs.length - 1;  //  changes index  to the last song
    currentlyPlaying.play();
  }else{    // if the index more than 0
    currentlyPlayingIndex--;  // decrease  index by 1
    currentlyPlaying = window['object'+currentlyPlayingIndex].music; // store new song
    currentlyPlaying.play();

  }

})


// // ___________________________________________NEXT BUTTON
// get an index of a current playing songs
// check if the index is less than length , if it is play first song
//  if it is not - increase index by 1 and play it

var nextButton = document.getElementById("next");
nextButton.addEventListener("click", function () {
  if (!currentlyPlaying) {  // check if something is not  playing
    object0.music.play(); // if nothing is playing  go to the first song
    currentlyPlaying = object0.music;
    currentlyPlayingIndex = object0.index;
    return; // get out of the function
  }
  currentlyPlaying.pause(); // stops playing song
  if (currentlyPlayingIndex == (songs.length-1)){
    object0.music.play(); // if nothing is playing  go to the first song
    currentlyPlaying = object0.music;
    currentlyPlayingIndex = object0.index;
    return; // get out of the function
  }else{
    // currentlyPlaying.pause(); // stops playing song
    currentlyPlayingIndex ++;
    currentlyPlaying = window["object" + currentlyPlayingIndex].music;
    currentlyPlaying.play();
  }
})

// // ___________________________________________SHUFFLE  BUTTON
// check currently playing song
// if nothing - play random
// if something - stop it and play random

 var shuffleButton = document.getElementById("shuffle");
 shuffleButton.addEventListener("click", function () {
   var a = Math.floor(Math.random() * songs.length); //  random number limited by length of a arr
   if (!currentlyPlaying) { // if nothing is playing
     currentlyPlaying = window["object" + a].music; // getting a random song
     currentlyPlaying.play();
     return;
   }
   currentlyPlaying.pause();  // if something is playing
   currentlyPlaying = window["object" + a].music;  // store new var
   currentlyPlayingIndex = a; // grub index
   currentlyPlaying.play();
   return;
 })






// ___________________________________________CLICK SONGS ITEM
// assign songs data to the box above the player
for (let i in tracks) {
tracks[i].addEventListener("click", function() {
  if (currentlyPlaying) { // check if something is playing
currentlyPlaying.pause(); //stops prev song
  }
title1.innerHTML = tracks[i].innerHTML;
artist1.innerHTML = tracks[i].dataset.artist;
album1.innerHTML = tracks[i].dataset.album;
time1.innerHTML = tracks[i].dataset.time;
window['object'+i].music.play(); //plays
currentlyPlaying = window["object"+i].music; // assigns for manipulating
currentlyPlayingIndex = i;
})
}
