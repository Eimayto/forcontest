var body;
var output;
var i;
var recipe;
var number;
//var value = "";
function normal(){
   i = 1;
   recipe = "";
   while(recipe == ""){
      recipe = prompt('요리를 입력하세요');
   }
   On1Click();
}
function next(){
   if(i==4){
      alert("더 이상 앞으로 넘길 수 없습니다.");
   }
   else{
      i+=1;
      On1Click();
   }
}
function before() {
    if (i == 1) {
        alert("더 이상 뒤로 넘길 수 없습니다.");
    }
    else {
        i -= 1;
        On1Click();
    }
}
function On1Click(){
	number = 1;
	output = "";
	var message = document.getElementById('message');
	var loading = document.getElementById('loading');
	var bunsu = document.getElementById('bunsu');
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
		//alert(i);
		var file = "https://raw.githubusercontent.com/Eimayto/forcontest/master/js/download/file"+i+".txt";
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
			while(/(\d)\.([^|]+).([^\n\r]+)/.test(body)){
            var jung = /(\d)\.([^|]+).([^\n\r]+)/.exec(body);
                body = body.replace(jung[0], '');
                switch (jung[1]){
                    case "1":
                        var move = "#top";
                        break;
                    case "2":
                        var move = "#middle";
                        break;
                    case "3":
                        var move = "#bottom";
                        break;
                }
            if(new RegExp(recipe).exec(jung[2]) == recipe){
               output = output+number+'. <a href="'+jung[3]+move+'"target="_blank" title="'+jung[3]+move+'">'+jung[2]+'</a></br>';
							 number += 1;
            }
      }
      if (i > 1 && i < 4) {
          message.innerHTML = output + '</br><a onClick="before()" class="next">이전</a> <a onClick="next()" class="next">다음</a>';
      }
      else if (i==1) {
          message.innerHTML = output + '</br><a onClick="next()" class="next">다음</a>';
      }
      else {
          message.innerHTML = output + '</br><a onClick="before()" class="next">이전</a>';
      }
			bunsu.innerHTML = +i+'/4';
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
