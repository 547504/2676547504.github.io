window.onload = function (){
// 配置区域
  var qq = '2676547504';
  var author = "不知名";
  var bilibili = '#';
  var mail = '#';
  var github = '#';



//随机句子
  var a = Math.random() + ""          //产生一个随机数  
    var rand1 = a.charAt(5)           //到这个数的第五个字符(实际还是从0~9的数字)  

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

   var quote = text[rand1]   //由随机数选择一句话 

  var text = document.getElementsByClassName("text")[0];
  text.innerHTML = quote;

  document.getElementsByClassName("author")[0].innerHTML = author;
  document.getElementsByClassName("bilibili")[0].href = bilibili;
  document.getElementsByClassName("mail")[0].href = mail;
  document.getElementsByClassName("author-img")[0].src = 'http://q1.qlogo.cn/g?b=qq&nk=' + qq + '&s=640';
  
}
