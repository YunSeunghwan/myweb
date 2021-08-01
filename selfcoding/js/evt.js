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

function evt5(){
	
}
