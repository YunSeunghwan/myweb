function test1(){
var num = prompt("100 미만의 정수만 입력하세요.")

if(num > 100) {
	alert("정수" +num + "은(는) 100보다 작지 않습니다.");
	test1();
} else {
	document.write("입력하신 값은 " +num + "으로 100보다 작습니다.");
}
	return 0
}
//test1()

function test2(){
	var x = 0;
	for (var i = 0; i<=100; i++){
		x += i;
	}
	
	alert(x)
}


//test2()

function test3(){
	document.write("<--태양계의 모든 행성을 배열에 저장하고 반복하면서 행성의 이름을 경고 상자로 출력하시오.-->");
	
	var planet = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
	
	for (var i = 0; i<= planet.length -1; i++){
		//console.log(planet[i]);
		//alert(planet[i]);
	}
}

//test3()

function test4(){
	function process(game){
		if (game == true){
		alert("좋습니다. 게임을 시작합니다.");
	} else {
		alert("네, 나중에 하시죠.");
	}
}
	var game = confirm("게임 한판 하실래요?");
	process(game);
}

//test4()

function test5(){
	function music(){
		var music_array = {
			"가수" : "한혜진",
			"연주시간" : "03:40",
			"제목" : "갈색추억"
		};
		
		
		document.write("제가 좋아하는 가수는 " +music_array["가수"] + "님 입니다. <br />");
		document.write("제가 좋아하는 제목는 " +music_array["제목"] + " 입니다. <br />");
		document.write("제가 좋아하는 노래 " +music_array["제목"] + "의 플레이시간은 " + music_array["연주시간"] + " 입니다.");
	}
	music();
}

test5()