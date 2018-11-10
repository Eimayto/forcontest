var body;
function On1Click(){
	var recipe = "";
	while(recipe == ""){
		var recipe = prompt('요리 이름을 입력하세요');
	}
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
		var file = "https://raw.githubusercontent.com/Eimayto/forcontest/master/js/download1/3.txt";
		var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                //alert(allText);
								body = allText;
            }
        }
    }
    rawFile.send(null);
		//var body = document.getElementById("message").innerHTML;
		var output = '';
		//var jung = new RegExp("<b>([^<]+)");
		//var b = body.match(jung)[1];
		while(/<b>/.test(body)){
			var jung = body.match(new RegExp("<b>([^<]+)"));
			var body = body.replace(jung[0],'');
			if(jung[1].match(new RegExp(recipe)) == recipe){
				var i = 1947;
				 output = output+'<a href="http://www.10000recipe.com/bbs/'+i+'" target="_blank">'+jung[0]+'</a></br>';
				//alert("URL: www.10000recipe.com/bbs/1947");
			}
		}
		document.getElementById("message").innerHTML = output;
		//});
	//}
}
function On2Click(){
	var count=Math.floor(prompt('재료의 개수를 입력하세요'));
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
	}
}
