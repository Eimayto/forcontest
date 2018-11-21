var body;
var output;
var i;
var allText;
var recipe;
var number;
var page;
var outputmessage;
//var value = "";
function nosearch(){
  document.getElementById('message').innerHTML = "검색 결과가 없습니다";
  document.getElementById('bunsu').innerHTML = '';
}
function normal(){
   page = 1;
   recipe = document.getElementById('input').value;
   if(recipe == ''){
     nosearch();
   }
   else{
     On1Click();
   }
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
		var file = "https://raw.githubusercontent.com/Eimayto/forcontest/master/download/file"+i+".txt";
		var rawFile = new XMLHttpRequest();
	  rawFile.open("GET", file, false);
	   rawFile.onreadystatechange = function ()
	   {
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
			while(/(\d).([^|]+).([^|]+).([^|]+).([\d]+)/.test(body)){
            var jung = /(\d).([^|]+).([^|]+).([^|]+).([\d]+)/.exec(body);
            body = body.replace(jung[0], '');
            //jung[1]=번호, jung[2]=요리이름, jung[3]=간단레시피주소, jung[4]=이미지주소, jung[5]=상세레시피주소
            if(new RegExp(recipe).test(jung[2])){
               output[i] = number+'. <a href="'+jung[3]+'"target="_blank" title="'+jung[3]+'">'+jung[2]+'</a> ('+jung[1]+'번째 요리)<br><a href="http://www.10000recipe.com/recipe/'+jung[5]+'" target="_blank">'+jung[4]+' title="http://www.10000recipe.com/recipe/'+jung[5]+'" width="30%"></a><br>';
               i += 1;
               number+=1;
            }
      }
      if(i==1){
        nosearch();
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
          message.innerHTML = outputmessage + '<br><a onClick="before()" href="#top" class="next">이전</a> <a onClick="next()" class="next">다음</a>';
      }
      else if (page==1 && pagemax > 1) {
          message.innerHTML = outputmessage + '<br><a onClick="next()" href="#top" class="next">다음</a>';
      }
      else if (page == pagemax && page > 1){
          message.innerHTML = outputmessage + '<br><a onClick="before()" href="#top" class="next">이전</a>';
      }
      else{
        message.innerHTML = outputmessage;
      }
			bunsu.innerHTML = page+'번째 page / 총 '+pagemax+'pages';
}
function button1(choose){
  var r;
  var message = '';
  var file = "https://raw.githubusercontent.com/Eimayto/forcontest/master/download/mainpage.txt";
  var for_for;
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              allText = rawFile.responseText;
          }
      }
  }
  rawFile.send();
  if(choose == 1){
    for(for_for=1;for_for<=4;for_for++){
      var jung1 = new RegExp('<h4><span class="jq_elips">([^<]+)').exec(allText);
      allText = allText.replace(jung1[0],'');
      var jung2 = /<a class="thumbnail" href="([^"]+)/.exec(allText);
      allText = allText.replace(jung2[0],'');
      var jung3 = /<div class="thumbs_hb"><img src="([^"]+)/.exec(allText);
      allText = allText.replace(jung3[0],'');
      if(for_for !== 4){
          message = message+for_for+'. <a href="http://www.10000recipe.com'+jung2[1]+'"title="http://www.10000recipe.com'+jung2[1]+'"target="_blank">'+jung1[1]+'<br><img src="'+jung3[1]+'" width="30%"></a><br>';
      }
      else{
        message = message+for_for+'. <a href="http://www.10000recipe.com'+jung2[1]+'"title="http://www.10000recipe.com'+jung2[1]+'"target="_blank">'+jung1[1]+'<br><img src="'+jung3[1]+'" width="30%"></a>';
      }
    }
  }
  else{
    for(for_for=1;for_for<=36;for_for++){
      var jung = /<a class="thumbnail" href="([^"]+)/.exec(allText);
      allText = allText.replace(jung[0],'');
      var jung = new RegExp('<div class="thumbs_hb"><img src="([^"]+)').exec(allText);
      allText = allText.replace(jung[0],'');
      var jung = new RegExp('<h4><span class="jq_elips">([^<]+)').exec(allText);
      allText = allText.replace(jung[0],'');
    }
    for(for_for=1;for_for<=4;for_for++){
      var jung1 = new RegExp('<h4><span class="jq_elips">([^<]+)').exec(allText);
      allText = allText.replace(jung1[0],'');
      var jung2 = /<a class="thumbnail" href="([^"]+)/.exec(allText);
      allText = allText.replace(jung2[0],'');
      var jung3 = /<div class="thumbs_hb"><img src="([^"]+)/.exec(allText);
      allText = allText.replace(jung3[0],'');
      if(for_for !== 4){
          message = message+for_for+'. <a href="http://www.10000recipe.com'+jung2[1]+'"title="http://www.10000recipe.com'+jung2[1]+'"target="_blank">'+jung1[1]+'<br><img src="'+jung3[1]+'" width="30%"></a><br>';
      }
      else{
        message = message+for_for+'. <a href="http://www.10000recipe.com'+jung2[1]+'"title="http://www.10000recipe.com'+jung2[1]+'"target="_blank">'+jung1[1]+'<br><img src="'+jung3[1]+'" width="30%"></a>';
      }
    }
  }
  document.getElementById('message').innerHTML = message;
}
