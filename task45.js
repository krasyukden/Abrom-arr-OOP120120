//Не работ вар 2 -  С расширением (использовать результат метода родителя для дальнейших расчетов).

"use ctrict"
function Square (){
	this._side = 0;
}
Square.prototype.setSquareSide = function(value){
	if(this._isCorrectData(value)){
		this._side = value;
	}
};
Square.prototype._isCorrectData = function(value){
	if(typeof value == "number" && !isNaN(value)){
		return true;
	}
	else{
		return false;
	}
}
Square.prototype.info = function(){
	console.log(this._side * 4);
	//return this._side * 4;// через return ????
}

function Cube (){
	Square.call(this);
	this._side = 0;
}
Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;
Cube.prototype.setSquareSide = function(value){
	if(this._isCorrectData(value)){
		this._side = value;
	}
};
/*Cube.prototype.info = function(){ // РАБОТАЕТ Полиморфизм БЕЗ расширения
	//console.log(this._side * 12);
	return this._side * 12;// 
}*/
Cube.prototype.info = function (){ //function areaCube 
	 return Square.prototype.info.call(this);
// Полиморфизм с расширением - площать куба
	/*var areaCub = Square.prototype.info.call(this);
	var tmp = areaCub / 4;
	var res = tmp * tmp * 6;
	return res;//НЕльзя в переменную ???? */
	
}

var squ = new Square();
var cub = new Cube();
squ.setSquareSide(5);
squ.setSquareSide("ffdggdg");
squ.info();
cub.setSquareSide(3);
cub.info();

/*var areaCub = areaCube();
console.log(areaCub);*/

/*var areaCub = Cube.prototype.info;
console.log(areaCub);// Показ самой ф-ции*/