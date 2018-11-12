var body;
var output;
var i;
var recipe;
var number;
var page;
var outputmessage;
//var value = "";
function normal(){
   page = 1;
   recipe = "";
   while(recipe == ""){
      recipe = prompt('주재료를 입력하세요');
   }
   On1Click();
}
function next(){
    page+=1;
    On1Click();
}
function before() {
      page -= 1;
      On1Click();
}
function On1Click(){
	number = 1;
	output = {};
  i = 1;
	var message = document.getElementById('message');
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
			while(/(\d).([^|]+).([^|]+).([^|]+).([\d]+)/.test(body)){
            var jung = /(\d).([^|]+).([^|]+).([^|]+).([\d]+)/.exec(body);
            body = body.replace(jung[0], '');
            //jung[1]=번호, jung[2]=요리이름, jung[3]=간단레시피주소, jung[4]=이미지주소, jung[5]=상세레시피주소
            if(new RegExp(recipe).test(jung[2])){
               output[i] = number+'. <a href="'+jung[3]+'"target="_blank" title="'+jung[3]+'">'+jung[2]+'</a> ('+jung[1]+'번째 요리)</br>'+jung[4]+' href="http://www.10000recipe.com/recipe/'+jung[5]+'"></br>';
               i += 1;
               number+=1;
            }
      }
      if(i==1){
        alert("검색결과가 없습니다");
        bunsu.innerHTML = "";
        return false;
      }
      var max = page*10;
      var min = (max-9);
      var pagemax = Math.ceil((i-1)/10);
      var repeat;
      outputmessage = '';
      for(repeat=min;repeat<=max;repeat++){
        if(typeof output[repeat] == "undefined"){
          break;
        }
        outputmessage = outputmessage+output[repeat];
      }
      if (page > 1 && page < pagemax) {
          message.innerHTML = outputmessage + '</br><a onClick="before()" href="#top" class="next">이전</a> <a onClick="next()" class="next">다음</a>';
      }
      else if (page==1 && pagemax > 1) {
          message.innerHTML = outputmessage + '</br><a onClick="next()" href="#top" class="next">다음</a>';
      }
      else if (page == pagemax && page > 1){
          message.innerHTML = outputmessage + '</br><a onClick="before()" href="#top" class="next">이전</a>';
      }
      else{
        message.innerHTML = outputmessage;
      }
			bunsu.innerHTML = page+'번째 page / 총 '+pagemax+'pages';
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
