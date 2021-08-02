function dc(elem){
	document.getElementById(elem).innterHTML = ""
}

function evt1(){
	alert("text!");
}

function evt2(){
	document.getElementById("2step").innerHTML = "두번째걸음이지롱!"
}

function evt3(arg){
	alert(arg.value)
	//arg.focus();
	let temp = arg.value;
	let exp = /^[0-9]+$/;
	alert(temp.match(exp)||isNaN(Number(temp)) != true)
	
}

function evt4(){
	document.getElementById("galaxy").src = "./img/1111.jpg"
}

function evt5(form) {
	// 아이디 검증
	var temp = form["name"].value;
	if (temp =="") {
		alert("아이디 입력 부분이 공백입니다.");
	} else {
		if (temp.length < 2) {
			alert("아이디를 2자 이상 입력해주세요.");
		} else{
			alert("입력하신 아이디는 " + temp + "입니다.");
		}
	}
	
	// 휴대폰 번호 검증
	var temp = form["tel"].value;
	var exp = /^[0-9]+$/;
	
	if (temp =="") {
		alert("휴대폰 입력 부분이 공백입니다.");
	} else {
		if (temp.match(exp) || isNaN(Number(temp)) != true){
			alert("입력하신 휴대폰 번호는 " + temp + " 입니다.");
		} else {
			alert("휴대폰 번호에 -를 빼고 입력해주세요.");
		}
	}
	
	// 이메일 검증
	var temp = form["email"].value
	var exp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,}$/;
	
	if (temp =="") {
		alert("이메일 입력 부분이 공백입니다.");
	} else {
		if (temp.match(exp)) {
			alert("입력하신 이메일은 " + temp + " 입니다.");
		} else {
			alert("입력하신 이메일을 확인해주세요")
		}
	}
	
	// 패스워드 검증
	var temp1 = form["password1"].value
	var temp2 = form["password2"].value
	
	if (temp1 =="" || temp2 == "") {
		alert("패스워드 부분이 공백입니다.");
	} else {
		if (temp1 == temp2) {
			alert("패스워드가 정확합니다.");
		} else{
			alert("패스워드가 다릅니다.");
		}
	}
}
