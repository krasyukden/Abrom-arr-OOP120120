//ok
"use strict"; 
var a = [1, 2, -3, -4, 5, 6, 100, 8, 9, 10];
var n = a.length;//10
var tmp;
var k;

for(var i = 1; i < n / 2; i++){
	//a[length + 1] = a[0];
	tmp = a[i];
	a[i] = a[a.length - i];
	a[a.length - i] = tmp;
}
	k = a[0];
	a.shift();// удал  с нач
	a.push(k);// добав в конец

for(var j = 0; j < n; j++){	
	console.log(a[j]);
}	

/*Array71. Дан массив размера N. Поменять порядок его элементов на обратный. */