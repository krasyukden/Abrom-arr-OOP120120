//ok
"use strict"; 
var a = [1, 2, -3, -4, 5, 6, 100, 8, 9, 10];
var n = a.length;
var min = a[0];
var max = a[0];

for(var i = 0; i < n; i++){
	
	if(min > a[i]) {
		min = a[i];
		var indexMin = i;
		
	}
	
	else if(max < a[i]){
		max = a[i];
		var indexMax = i;
		
	}
}
console.log(indexMin);
console.log(indexMax);
var tmp = a[indexMin];
a[indexMin] = a[indexMax];
a[indexMax] = tmp;
console.log(a);
 

/*Array68◦. Дан массив размера N. Поменять местами его минимальный и максимальный элементы. */