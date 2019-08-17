flagArray = new Array();
for(var i = 0; i < 62; i++){
	flagArray.push(0);
}

function imgClick(id, pic) {
	// id取得
	var pic_span = document.getElementById(id);
	
	// flag(on, off)
	changeFlag(id, pic);
	
	// pic(on, off)
	changePic(id, pic, pic_span);
	
	// updateCount
	updateCount();
}

function changeFlag(id){
	if(flagArray[id] == 0){
		flagArray[id] = 1;
	}
	else{
		flagArray[id] = 0;
	}
}

function changePic(id, pic, pic_span){
	if(flagArray[id] == 0){
		pic_span.src = "./pic/" + pic + ".png";
	}
	else{
		pic_span.src = "./pic/" + pic + "_c.png";
	}
}

function updateCount(){
	// 配列全部足して表示
	var count = document.getElementById('get_count');
	
	// 配列全部足す
	var num = 0;
	for(var i = 0; i < flagArray.length; i++){
		if(flagArray[i] == 1){
			num++;
		}
	}
	
	count.innerHTML = num;
}