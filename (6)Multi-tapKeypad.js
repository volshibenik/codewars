function presses(phrase) {
	var arr = phrase.toLowerCase().split(''); //97-122 ' ' - 32  '1' - 49  '9' - 57
	var qty = 0;
	return arr.reduce(function(acc, cur) {
		switch(cur[0]) {
			case '7':
			case '9':
				qty = 5; break;
			case '1':
			case ' ':
				qty = 1; break;
			case '0':
				qty = 2; break;
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '8':
			case 's':
			case 'z':
				qty = 4; break;
			default:
				qty = (cur.charCodeAt(0)-93)%3 ? (cur.charCodeAt(0)-93)%3 : 3; break;
		}
		if (cur.match(/[tuvwxy]/)){
			qty -=1;
		} 
		return acc + qty;
	}, 0); 

}