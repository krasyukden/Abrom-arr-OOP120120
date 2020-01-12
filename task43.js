// ok
"use strict"
function Mp3 (currentTrack, currentVolume){
	this.currentTrack = currentTrack;
	this.currentVolume = currentVolume;
	console.log("Current Track" + "-" + this.currentTrack);
	console.log("Current Volume" + "-" + this.currentVolume);
}

Mp3.prototype.nextTrack = function(){
	this.currentTrack++;
	console.log("New current Track" + "-" + this.currentTrack);
}
Mp3.prototype.selectVolume = function(newVolume){
	this.currentVolume = newVolume;//
	console.log("New current Volume" + "-" + this.currentVolume);
}
Mp3.prototype.nextVolume = function(){
	this.currentVolume++;
}
Mp3.prototype.previousVolume = function(){
	this.currentVolume--;
	console.log("New current Volume" + "-" + this.currentVolume);
}
Mp3.prototype.previousTrack = function(){
	this.currentTrack--;
	console.log("New current Track" + "-" + this.currentTrack);
}
Mp3.prototype.selectTrack = function(newTrack){
	this.currentTrack = newTrack;
	console.log("New current Track" + "-" + this.currentTrack);
}

var mp3 = new Mp3(8, 5);
mp3.nextTrack();
mp3.selectVolume(30);
mp3.previousTrack();
mp3.selectTrack(12);
mp3.previousVolume();