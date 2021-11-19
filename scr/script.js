// 页面加载前
window.onload = function (){
 var Alice = new Array();	
 var Author = new Array();
    Alice['title'] = '%u4E2A%u4EBA%u4ECB%u7ECD';
    Alice['url'] = 'aHR0cHM6Ly9hLmNvbm4udGsv';    
    Alice['text'] = '请尊重作者知识产权！！！';    
    Author['img'] = 'aHR0cDovL3ExLnFsb2dvLmNuL2c/Yj1xcSZuaz0yNjc2NTQ3NTA0JnM9NjQw';
    Author['name'] = '%u4E0D%u77E5の%u540D';//escape


 document.getElementsByClassName("author-bar")[0].onclick= function () {
 	 document.getElementsByClassName("sidenav")[0].className = "sidenav off";
 };
 document.getElementsByClassName("mask")[0].onclick= function () {
 	 document.getElementsByClassName("sidenav")[0].className = "sidenav no";
 }; 


//随机句子
  var a = Math.random() + ""          //产生一个随机数  

    text = new Array                 //创建消息数组  

    text[1] = '"支离破碎的梦，<br>绘织平淡生活的刺."'               

    text[2] = '"我的心之所以存在，<br>是因为能感受到我想感受的."'  

    text[3] = '"他人种田，我种花，<br>我虽死，浪漫不死."'  

    text[4] = '"井底之蛙未曾见过大海，<br>但见过湛蓝的天空."'  

    text[5] = '"我只希望平淡的日子里有风，<br>风吹来的是花的香味."'  

    text[6] = '"生活不止眼前的苟且，<br>还有诗和远方."'  

    text[7] = '"名为阳光的朝露，<br>寻以斑斓之色."'  

    text[8] = '"他人笑我太疯癫，<br>我笑他人看不穿."'  

    text[9] = '"If you shed tears when you miss the sun,<br>you also miss the stars. "'  

    text[0] = '"Love look not with the eyes，<br>but with the mind"'  


 
 document.getElementsByClassName("author-img")[0].src = window.atob(Author['img']);
 document.getElementsByClassName("author-name")[0].innerHTML = unescape(Author['name']);
 document.getElementsByClassName("author-text")[0].innerHTML = text[a.charAt(6)];








console.log("%c "+ unescape(Alice['title']) +" %c " + window.atob(Alice['url']) ,"color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
console.log(Alice['text']);

};




