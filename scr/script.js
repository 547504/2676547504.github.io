// 页面加载前
window.onload = function (){
ajax__load();
console.log("%c "+ "个人介绍" +" %c " + "http://a.conn.tk" ,"color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
console.log("请尊重作者知识产权！！！");

function ajax__load(){
  var xmlhttp;
  var a = Math.random() + "";
  if (window.XMLHttpRequest) {
      //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp = new XMLHttpRequest();
  }
  else {
      // IE6, IE5 浏览器执行代码
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var text = JSON.parse(xmlhttp.responseText); 
          //配置内容
    document.getElementsByClassName('author__img')[0].src = text.introdece[0]["头像"];     
    document.getElementsByClassName('author__name')[0].innerHTML = text.introdece[0]["名字"];                
    document.getElementsByClassName('author__text')[0].innerHTML = text.text[0][a.charAt(6)];
            //   console.log(text.introdece[0]["名字"]);                
               
      }
  }
  xmlhttp.open("GET", "./scr/data.json", true);
  xmlhttp.send();
}


}




