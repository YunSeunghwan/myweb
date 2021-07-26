function basic1(){
	document.write("첫걸음입니다!<br>");
	var n = prompt("여기에 이름을 입력하세요!");
	if (n == null) {
		n = "읭읭"
	} else if (n == "윤승환") {
		document.write("환영합니다 주인님!");
	} else {
		document.write("당신의 이름은 " + n + "입니다!");
	}
}

function basic2(){
	var nn = 0;
	for(let i = 0; i<= 100; i++){
		nn += i;
	}
	document.write(nn)
	
}

function basic3(){
	var orbit = ["수성","금성","지구","화성","목성","토성","천왕성","해왕성"];
	for(let i= 0; i<orbit.length; i++){
		document.write(orbit[i] + "<br>");
	}
}

function basic4(){
	function bs1(n){
		if (n === true){// ==랑 ===랑은 차이가 없다.
			document.write("당신은 확인을 누르셨군요.")
		} else{
			document.write("당신은 취소를 누르셨어요.")
		}
	}
	function bs2(n){
		let arr = ['확인','취소'];
		document.write("당신은 " + arr[1] + "을 누르셨어요")
	}
	let n = confirm("선택하세요");
	bs2(n)
}
