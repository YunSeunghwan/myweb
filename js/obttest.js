function test1(){
	//alert("실행")
	var previousMillisecond = new Date();
	var addition = 0;

	for (var i = 0; i <= 1000000; i++) {
		addition += i;
	}

	var currentMillisecond = new Date();
	cur = currentMillisecond
	pre = previousMillisecond
	var resultMillisecond = 
		cur.getMilliseconds() 
	- 	pre.getMilliseconds();
	document.write(resultMillisecond + "밀리초가 걸렸음!");
}

//test1()

function test2(){
	function strCap(str) {
		//alert("실행");
		document.write(str.charAt(0).toUpperCase() + str.slice(1));
	}
	
	var textMessage = prompt("변환할 글자를 입력해주세요.");
	strCap(textMessage);
}
//test2()

function test3(){
	var currentMonth = new Date();
	var listMonths = ["Jan","Fab","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	
	document.write("It is " + listMonths[currentMonth.getMonth()]);
}

//test3()

function test4(){
	var movies = ["터미네이터", "트랜스포머"];
	
	movies.push("맨오브스틸");
	document.write(movies + "<br />");
	
	movies[movies.length - 2] = "스파이더맨"
	document.write(movies + "<br />");
	
	lastItem = movies.pop();
	alert(lastItem);
}

//test4()

function test5(){
	var arr = ["사과", "오렌지", "귤", "당근", "케일"];
	mIN =0;
	MIN = arr.length -1;
	rIN = Math.floor(Math.random() * (MIN - mIN)) + mIN;
	alert("t")
	
	valueArr = arr[rIN];
	
	alert(valueArr)
}
//test5()

function test6(){
	function find(arr, value) {
		i = arr.indexOf(value);
		document.write(arr + " 배열에서 " + value + "는 " + i + "번 인덱스에 있습니다.");
	}
	
	var arr = ["Hello", 10, 23.6, true];
	
	find (arr, "Hello");
	
}
//test6()

function test7(){
	function check(str) {
		var asd = RegExp("XXX","i");
			alert(asd);
		var asdf = str.match(/XXX/i);
			alert(asdf);
		if (str.match(new RegExp("XXX", "i")) != null) {
			
			document.write("True");
		}else {
			document.write("False");
		}
	}
	check("but XXX now");
}

//test7()

function test8() {
	alert("dd");
	function calendarWork(){
		var dt = new Date();
		var currentMonth = dt.getMonth() + 1;
		var currentDay = dt.getDate();
		document.write(currentMonth + "월 " + currentDay + "일" );
	}
	
	setTimeout(calendarWork(), 8.64e+7);
}

//test8()



//https://developer-ankiwoong.tistory.com/1197?category=902487