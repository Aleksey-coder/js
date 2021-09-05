window.onload = function(){
		document.querySelector('.btnStart').onclick = function(){
			training()
		}
}
function mathOp(a, b, op){
		if(op == '+') {
			res = a + b;
		}
		else if(op == '-') {
			res = a - b;
		}
		else if(op == '*') {
			res = a * b;
		}
		else if(op == '/') {
			if(b == 0) {
				res = false;
			//на будующее throw new
			}
		else {	
			res = a / b;
		}
		
}		else {
			res = false;
			//на будующее throw new
		}
		return res
	}
	
	
	function randomInt(min, max){
		let length = max - min +1;
		let rand = Math.floor(Math.random() * length) + min;
		return rand;
	}
	
	
	function training(){
		let x, y, code, op, res, answer, answerStr, good = 0, error = 0, errors = [];
		let variants = ['*', '-', '+', '/'];
		
		for(let i = 0; i < 10; i++) {
			x = randomInt(3, 15);
			y = randomInt(3, 15);
			code = randomInt(0, 3);
			op = variants[code];
			res = mathOp(x, y, op);
			
			do{
				answerStr = prompt(x + '  ' + op + ' ' + y + " = ?");
				answer = +answerStr;
			}
			
			while(answerStr == '' || isNaN(answer));
			
			if(res.toFixed(2) == answer.toFixed(2)) {
				good ++;
			}
			else{
				error++;
				errors.push(x + ' ' + op + ' ' + y + " = " + res.toFixed(2) + ' , Ваш ответ ' + answer);
			}
		}
		
		document.querySelector('.good').innerHTML = good;
		document.querySelector('.bad').innerHTML = error;
		
		let divErrors = document.querySelector('.errors');
		divErrors.innerHTML = '';
		
		for(let i = 0; i < errors.length; i++){
			divErrors.innerHTML +=('<p>' + errors[i] + '</p>');
		}
	}