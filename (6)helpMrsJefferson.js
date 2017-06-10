function shortestArrang(n) {
	//odd 2
	// n%3 3
	//n/2 odd 4   (10)-[4, 3, 2, 1]); (14)-[5, 4, 3, 2]);
	// n%5  5
	// no 6 10 14 18 22 26 30 34 38 42 46 50 bcs [] of  is odd
	// n%7   central unit [7, 6, 5, //4, 3, 2, 1]
	// for 8 /4 odd ??    [9, 8, 7, 6, 5, 4, 3, 2]
	//n%9 [12, 11, 10, 9, 8, 7, 6, 5, 4]   
	//
	// n%11 [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3]  88 
	//13 [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]  91
	
	// 24 / 8 odd 

	
	function createArr(center, qty) {
		var arr = [];
		if (qty%2)	{
			for (var i = center+(qty-1)/2; i >= center-(qty-1)/2; i--){
				arr.push(i);
			}
		} else {
			for (i = Math.floor(center)+qty/2; i >=Math.floor(center) - (qty/2 - 1);  i--) {
				arr.push(i);
			}
		}
		return arr;
	}

	var qty = 3;

	if (n%2) {
		return Math.floor(n/2)? [Math.floor(n/2)+1, Math.floor(n/2)] : [Math.floor(n/2)+1];
	}
	while (qty < n) {
		if (qty%2 && !(n%qty)) {return createArr(n/qty, qty); }
		if (!(qty%2)) {
			for (var j = 2; j <= qty/2; j*=2) {
				if ((n/j)%2) {
					return createArr(n/qty, qty);
				}
			}
		}
		qty++
	}
	return [-1];
}
function shortestArrang1(n) {
	if (n%2) return n>1?[(n+1)/2,(n-1)/2]:[-1]
	for(var i=2;i*(i-1)/2<=n;i++)
		if((n-i*(i-1)/2)%i==0) return Array.from({length:i},(_,j)=>(n-i*(i-1)/2)/i+i-j-1)
		return [-1]
}