// OK
"use strict"; 
var a = [7, -3, -2, 0, 4, 5, 6, 8, 9, 10];
var n = a.length;//10
var tmp = a[0];
var m = 1;

//for(var i = n; i > 0; i--){
for(var i = 0; i < n; i++){	 
	//if(tmp > a[i] && tmp < a[i + 1]){
	if(a[i] < tmp){	
		a[i - m] = a[i];// без a[i] = tmp;сдвиг в лево
		//a[i] = tmp;
		//break;
	}
}


for(var k = 0; k < n; k++){	
	if(tmp > a[k] && tmp < a[k + 1]){
		a[k] = tmp;
	}
	console.log(a[k]);
}	
	

/*Array87. Дан массив размера N, все элементы которого, кроме первого, упорядочены по возрастанию. Сделать массив упорядоченным, переместив первый элемент на новую позицию.*/ 