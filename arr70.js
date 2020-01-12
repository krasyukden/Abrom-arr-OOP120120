//ok
"use strict"; 
var a = [1, 2, -3, -4, 5, 6, 100, 8, 9, 10];
var n = a.length;//10
var tmp;
var k = (n / 2) - 1;//4
//var i = 0;

for(var i = 0; i < n; i++){
	if(i < n / 2){
	tmp = a[i];
	k++;
	a[i] = a[k];
	a[k] = tmp;
	}
	console.log(a[i]);
	
}

/*Array70.Данмассивразмера N (N —четноечисло).Поменять местами первую и вторую половины массива.*/