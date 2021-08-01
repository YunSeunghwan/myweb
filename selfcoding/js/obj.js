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

function obj2() {
	function strCap(str,i) {
		document.write(str.slice(0,i).toUpperCase() + str.slice(i) + "<br>");
	}
	var msg = "caseme";//prompt("변환할 글자를 입력해주세용");
	for(j=1; j<=msg.length; j++){
	strCap(msg,j);
	}
}

function obj3() {
	let months =["Jan","Fab","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	let mon = new Date();
	document.write(months[mon.getMonth()] + "<br>");
	document.write("<a href = 'https://myhappyman.tistory.com/11' target=_blank> Date.prototype 예시</a>")
	document.write(Date.prototype.getMonth());//이러면 이부분 실행이 안됨.
}

function obj4() {
	let movies = ['터미네이터', '트랜스포머']
	document.write("<pre>let movies = ['터미네이터', '트랜스포머']	->	" + movies + "<br></pre>")
	movies.push("맨오브스틸")
	document.write("<pre>movies.push('맨오브스틸')	->	" + movies + "<br></pre>")
	lastitem = movies.pop()
	document.write(lastitem + " " + movies)
}

function obj5(){
	let gbb = prompt("가위바위보를 해봅시다!");
	let com_gbb = Math.floor(Math.random() * 3);
	list_gbb = ["가위", "바위", "보"];
	//document.write(list_gbb[com_gbb]);
	let com = list_gbb[com_gbb];
	if(gbb == com) {
		document.write("<H2>비겼습니다!</H2>" + "당신 : " + gbb + "	컴퓨터 : " + com);
	} else if((gbb == "가위" && com == "바위") || (gbb == "바위" && com == "보") || (gbb == "보" && com == "가위") ){
		document.write("<H2>졌습니다!</H2>" + "당신 : " + gbb + "	컴퓨터 : " + com);
	} else if((gbb == "보" && com == "바위") || (gbb == "가위" && com == "보") || (gbb == "바위" && com == "가위") ){
		document.write("<H2>이겼습니다!</H2>" + "당신 : " + gbb + "	컴퓨터 : " + com);
	}
}

function obj6(){
	//숫자야구게임
	function validation(num){
		if(num<100 || num>999){
			alert("세자리 숫자를 입력해주세요!!");
		}
	}
	
	
	function check(num){
		let ans = '123';
		let strike = 0;
		let ball = 0;
		for(od=0; od<3; od++){
			//alert('ans : '+ ans);
			t_idx = ans.indexOf(num[od]);
			//alert(t_idx);
			if(t_idx == od){
				strike++;
			} else if(t_idx != od && (t_idx>-1)){
				ball++;
			}
		}
		if(strike==3){
			alert("정답입니다!");
			return "end"
		} else {
			alert(strike + "스트라이크 " + ball +"볼");
		 	return (num + " : " + strike + "S " + ball + "B <br>")
		}	
		// } else {
		// }
	}
	
	let ch = ""
	for(i=0; i<5; i++){
		//let num = prompt("숫자를 입력해주세요")
		let num = prompt("숫자를 입력해주세요")
		validation(num);
		
		ch = check(num);
		if (ch == "end"){
		//if (check(num) == "end"){
			break;
		} else {
			document.write(ch)// 루프가 끝나야 문서가 변경되는데.. 이건 어떻게 해결할지 나중에 찾아보자.
		}
	}
	//document.write("<input type='text' value = '세자리 숫자를 입력해주세요'>"+"<input type='submit' value='던지기'>");
	
}

function obj7(){
	function check(str){
		if (str.match(new RegExp("XXX", "i")) != null){
			document.write("T");
		} else {
			document.write("F");
		}
	}
	check("XXX is the answer")
}

function obj8() {
	function cld(){
		alert("asdf");
	}
	//setTimeout(() => cld, 1000);
	setTimeout(cld(), 5000);
	setTimeout(cld(), 5000);
}
