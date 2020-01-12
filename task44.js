"use strict"

function Geo (figure){
	this.figure = figure;// 
	this._numberX = 0;
	this._numberY = 0;
}
Geo.prototype.setNumberX = function (value){
	if(this._isCorrectData(value)){
		this._numberX = value;
	}
};

Geo.prototype.setNumberY = function(value){
	if(this._isCorrectData(value)){
		this._numberY = value;
	}
}; 
Geo.prototype._isCorrectData = function(value){
	if(typeof value == "number" && !isNaN(value)){
		return true;
	}
	else{
		return false;
	}
}
// Наследник прямоугольник
function Rectangle (figure){
	Geo.call(this, figure);
	this._diagonalRectangle = 0;
	
}
Rectangle.prototype = Object.create(Geo.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.setDiagonalRectangle = function(value){
	if(this._isCorrectData(value)){
		this._diagonalRectangle = value;
	};
}
Rectangle.prototype.info = function(){
	console.log(this._diagonalRectangle);
	console.log(this._numberX);
	console.log(this._numberY);
}
// Наслед Круг
function Circle (figure){
	Geo.call(this, figure);
	this._diagonalCircle = 0;	
}
Circle.prototype = Object.create(Geo.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.setDiagonalCircle = function(value){
	if(this._isCorrectData(value)){
	this._diagonalCircle = value;
	}
	
}
Circle.prototype.info = function(){
	//return this._diagonalCircle;
	console.log(this._diagonalCircle);
	console.log(this._numberX);
	console.log(this._numberY);
}

var rect = new Rectangle("rectangle"); // работ
var circ = new Circle("circle");// Почему в ""??

rect.setNumberX(2);
rect.setNumberY(5);
rect.setNumberX("sferfgerge");
rect.setDiagonalRectangle(18);
rect.info();
circ.setNumberX(3);
circ.setNumberY(6);
circ.setDiagonalCircle(13);
circ.info();