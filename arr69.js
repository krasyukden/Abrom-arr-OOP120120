//ok
"use strict"; 
var a = [1, 2, -3, -4, 5, 6, 100, 8, 9, 10];
var n = a.length;
var tmp;
//var i = 0;

for(var i = 0; i < n; i+=2){
	tmp = a[i];
	a[i] = a[i + 1];
	a[i + 1] = tmp;
	console.log(a[i]);
	console.log(a[i + 1]);
}
//console.log(a[i]);
/*Array69. Дан массив размера N (N — четное число). Поменять местами его первый элемент со вторым, третий — с четвертым и т.д. */