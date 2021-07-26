function setNumPosition() {
	const nums = document.querySelectorAll(".number");
	for (let i = 0; i < nums.length; i++) {
		if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;
		
		const angle = (i+1) * (Math.PI / 6);
		const x =
			  132 - 
			  nums[i].offsetWidth / 2 + 
			  132 * Math.abs(Math.sin(angle).toFixed(2));
		const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));
		if (i + 1 > 6) nums[i].style.right = '${x}px';
		else nums[i].style.left = '${x}px';
		
		if ((i+1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3))
			nums[i].style.top = '${y}px';
		else nums[i].style.bottom = '${y}px';
	}
	alert("asdf")
}

function clock() {//쿼리를 불러오는 것 같은데... 쿼리가 없는데??
	const digital Clock = document.querrySelector(".digital-clock");
	const secondPointer = document.getElementById("second");
	const minutePointer = document.getElementById("minute");
	const hourPointer = document.getElementById("hour");
	
	const currentTime = new Date();
	
	let second = currentTime.getSeconds();
	let secondAngle = second * 6;
	let secondAngleValue = 'rotate(${secondAngle}deg)';
	
	let minute = currentTime.getMinutes();
	let minuteAngle = minute * 6;
	let minuteAngleValue = 'rotate(${minuteAngle}deg)';
	
	let hour = currentTime.getHours();
	let hourAngle = (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;
	let hourAngleValue = 'rotate(${hourAngle}deg)';
	
	secondPointer.style.transform = secondAngleValue;
	minutePointer.style.transform = minuteAngleValue;
	hourPointer.style.transform = hourAngleValue;
	digitalClock.innertext = '${
	hour < 10
	? '오전 0${hour}'
	: '${hour > 12 ? '오후 0${hour - 12}' : '오전 ${hour}'}'
}:${minute < 10 ? '0${minute}' : '${minute}'}:${second < 10? '0${second}' : '${second}'}';
'
}

function handleLoad() {
	setInterval(clock, 1000);
}

function init() {
	setNumPosition();
	window.addEventListener("load", handleLoad);
}

init();
