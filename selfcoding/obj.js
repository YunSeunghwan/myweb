function obj1() {
	let st = new Date();
	document.write(st+ "st<br>");
	let addition = 0
	for (let i=0 ; i<1000000; i++){
		addition += i;
		if (i== 100000){
			let mi = new Date();
			document.write(mi-st + " mi <br>");
		}
	}
	let en = new Date();
	document.write(en + "<br>");
	document.write(en==st);
	document.write(en==mi);
}
