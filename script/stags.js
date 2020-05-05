// JavaScript Document

function stg1_vis(){
	if(document.getElementById('first_stage')){
		var obj = document.getElementById('first_stage');
		if(obj.style.visibility == "hidden"){
			obj.style.visibility = "visible";
		}
		else obj.style.visibility = "hidden";
	}
	else alert("Элемент с id:" + 'first_stage' + " не найден");
}

function stg2_vis(){
	if(document.getElementById('second_stage')){
		var obj = document.getElementById('second_stage');
		if(obj.style.visibility == "hidden"){
			obj.style.visibility = "visible";
		}
		else obj.style.visibility = "hidden";
	}
	else alert("Элемент с id:" + 'second_stage' + " не найден");
}

function stg3_vis(){
	if(document.getElementById('third_stage')){
		var obj = document.getElementById('third_stage');
		if(obj.style.visibility == "hidden"){
			obj.style.visibility = "visible";
		}
		else obj.style.visibility = "hidden";
	}
	else alert("Элемент с id:" + 'third_stage' + " не найден");
}

function stg4_vis(){
	if(document.getElementById('fourth_stage')){
		var obj = document.getElementById('fourth_stage');
		if(obj.style.visibility == "hidden"){
			obj.style.visibility = "visible";
		}
		else obj.style.visibility = "hidden";
	}
	else alert("Элемент с id:" + 'fourth_stage' + " не найден");
}