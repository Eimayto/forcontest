var body;
var output;
var i;
var recipe;
//var value = "";
function normal(){
	i = 3;
	recipe = "";
	while(recipe == ""){
		recipe = prompt('요리 또는 재료를 입력하세요',"김치,양파,~~~");
	}
	On1Click();
}
function next(){
	On1Click();
}
function On1Click(){
	output = "";
	var message = document.getElementById('message');
	var loading = document.getElementById('loading');
	message.innerHTML = "";
	//모듈 로드
	/*var client = require('cheerio-httpcli');

	// 다운로드 ---- ( ※ 2)
	var i;
	for(i=3; i<=1947;i++){
		var url = "http://jpub.tistory."+i;
		var param = {};

		client.fetch(url, param, function (err, $, res) {
		// 에러 체크
		if (err) { console.log("Error:", err); return; }

		// 다운로드한 결과를 화면에 출력  ---- ( ※ 3)
		var body = $.html();
		console.log(body);*/
		//loading.innerHTML = i+"/100... 로딩중...";
		var min = i;
		for(i=i;i<=min+20;i++){
			//alert(i);
			var file = "https://raw.githubusercontent.com/Eimayto/forcontest/master/js/download1/"+i+".txt";
			var rawFile = new XMLHttpRequest();
	    rawFile.open("GET", file, false);
			//value = value+rawFile.readyState+"----> 1</br></br>";
			//value = "";
			//value = value+rawFile.status+"----> 3</br></br>";
	    rawFile.onreadystatechange = function ()
	    {
			//value = value+rawFile.readyState+"----> 4</br></br>";
			//value = value+rawFile.onreadystatechange+"----> 5</br></br>";
			//value = value+rawFile.status+"----> 6</br></br>";
	        if(rawFile.readyState === 4)
	        {
	            if(rawFile.status === 200 || rawFile.status == 0)
	            {
	                var allText = rawFile.responseText;
									body = allText;
	            }
	        }
	    }
	    rawFile.send(null);
			//body = change(body);
			//var body = document.getElementById("message").innerHTML;
			//var jung = new RegExp("<b>([^<]+)");
			//var b = body.match(jung)[1];
			while(/<h1><b>\d\./.test(body)){
				var jung = /<h1><b>\d\.([^<]+)/.exec(body);
				var body = body.replace(jung[0],'');
				if(jung[1].match(new RegExp(recipe)) == recipe){
					 output = output+'<a href="http://www.10000recipe.com/bbs/'+i+'" target="_blank">'+jung[1]+'</a></br>';
					//alert("URL: www.10000recipe.com/bbs/1947");
				}
			}
		}
		message.innerHTML = output+'</br><a onClick="next()" class="next">다음</a>';
		//message.innerHTML = value;
		//});
	//}
}
function change(data){
	while(/<h1><b>\d\./.test(data)){
		var jung = /<h1><b>\d\.([^<]+)/.exec(data);
		var data = data.replace(jung[0],'');
		output = output+jung[1];
		if(/<dt>.주재료.<.dt>/.test(data)){
			var jung = /<dt>.주재료.<.dt>[\r\n][^<]+<dd>([^<]+)/.exec(data);
			var data = data.replace(jung[0],'');
			output = output+"|"+jung[1];
		}
		if(/<dt>.양념 및 소스재료.<.dt>/.test(data)){
			var jung = /<dt>.양념 및 소스재료.<.dt>[\r\n][^<]+<dd>([^<]+)/.exec(data);
			var data = data.replace(jung[0],'');
			output = output+","+jung[1]+"\n";
		}
	}
	return output;
}
function On2Click(){
	alert("삭제된 기능입니다");
	/*var count=Math.floor(prompt('재료의 개수를 입력하세요'));
	var m = {};
	var i;

	for(i = 0; i < count; i++){
		m[i] = prompt((i+1)+'번째 재료를 입력하세요');
	}
	//모듈 로드
	var client = require('cheerio-httpcli');

	// 다운로드 ---- ( ※ 2)
	var i;
	for(i=3; i<=1947;i++){
		var url = "http://jpub.tistory."+i;
		var param = {};

		client.fetch(url, param, function (err, $, res) {
		// 에러 체크
		if (err) { console.log("Error:", err); return; }

		// 다운로드한 결과를 화면에 출력  ---- ( ※ 3)
		var body = $.html();
		console.log(body);
		});
	}*/
}
