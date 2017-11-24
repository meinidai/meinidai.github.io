var num1=0,num2=0,temp,oper,res;
var statusInput = false;
var contentSpan = document.getElementById("content-span");
var resultPanel = document.getElementById("result-panel");
var inputPanel = document.getElementById("input-panel");
var screenHeight = window.screen.availHeight;
var resultSpan = document.getElementById("result-span");
var inputSpan = document.getElementById("input-span");
var dot = document.getElementById("dot");
var equal = document.querySelector(".btn-equal");
var clr = document.querySelector(".btn-clr");
var btnFn = document.getElementsByClassName("btn-fn");
var btnO = document.querySelector(".btn-o");
var btnD = document.querySelector(".btn-d");
var btnH = document.querySelector(".btn-h");

contentSpan.style.height = screenHeight - 33 - 60 - 310 + "px";
resultPanel.style.height = (1/3)*parseFloat(contentSpan.style.height) + "px";
inputPanel.style.height = (2/3)*parseFloat(contentSpan.style.height) + "px";
//console.log(inputPanel.style.height);

var btnNumbers = document.getElementsByClassName("btn-number");
//console.log(btnNumbers);
for(var i=0;i<btnNumbers.length;i++){
	(function(i){
		btnNumbers[i].addEventListener("click",function(){
			console.log(statusInput);
			
			if(statusInput){
				inputSpan.innerHTML = "0";
				resultSpan.innerHTML = "";
				console.log("haha");
				statusInput = false;
			}
			
			if(inputSpan.innerHTML.indexOf("0") == "0" && inputSpan.innerHTML.indexOf(".") == -1){
				inputSpan.innerHTML = inputSpan.innerHTML.replace(/\b(0+)/gi,"")+btnNumbers[i].innerText;
			}else{				
				inputSpan.innerHTML += btnNumbers[i].innerText;			
			}
			if(oper && resultSpan.innerHTML == num1 + oper){
				num2 = inputSpan.innerHTML;
				console.log(num2);
			}	
		},false);
	})(i);
}

dot.addEventListener("click",function(){
	if(inputSpan.innerHTML.indexOf(".") == -1){
		inputSpan.innerHTML += ".";
	}else{
		return;
	}
},false);

for(var i=0;i<btnFn.length;i++){
	(function(i){
		btnFn[i].addEventListener("click",function(){
			if(!Number.isNaN(parseFloat(inputSpan.innerHTML))){
				temp = parseFloat(inputSpan.innerHTML);
				num1 = temp;
			}	
			console.log(num1)
			oper = btnFn[i].innerText;
			console.log(oper)
			resultSpan.innerHTML = num1 + oper;
			inputSpan.innerHTML = ""
		},false);
	})(i);
}

equal.addEventListener("click",function(){
	switch(oper){
		case "+":
			res = parseFloat(num1) + parseFloat(num2);
			break;
		case "-":
			res = parseFloat(num1) - parseFloat(num2);
			break;
		case "*":
			res = parseFloat(num1) * parseFloat(num2);
			break;
		case "/":
			if(num2 != "0"){
				res = parseFloat(num1) / parseFloat(num2);
			}else{
				res = "被除数不能是0";
			}
			break;
		default:
			return;
	}
	resultSpan.innerHTML = res;
	statusInput = true;
},false);

clr.addEventListener("click",function(){
	resultSpan.innerHTML = "";
	inputSpan.innerHTML = "0";
},false);

btnD.addEventListener("click",function(){
	if(inputSpan.innerHTML != "" && statusInput == false){
		resultSpan.innerHTML = parseFloat(inputSpan.innerHTML).toString(2);
		statusInput = true;
	}
},false);

btnO.addEventListener("click",function(){
	if(inputSpan.innerHTML != "" && statusInput == false){
		resultSpan.innerHTML = "0" + parseFloat(inputSpan.innerHTML).toString(8);
		statusInput = true;
	}
},false);

btnH.addEventListener("click",function(){
	if(inputSpan.innerHTML != "" && statusInput == false){
		resultSpan.innerHTML = "0x" + parseFloat(inputSpan.innerHTML).toString(16);
		statusInput = true;
	}
},false);