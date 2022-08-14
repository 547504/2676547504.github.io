// 页面加载前
window.onload = function (){
ajax__load();
theme__load();

 
}





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

function theme__load(){
    var back = document.body;
    var but = document.querySelector('.author__img');
    var no = true;
    but.onclick = function (){
            if(no){
                back.setAttribute("theme","black");      
                no = false;          
            }else{
                back.setAttribute("theme","white");   
                no = true;
            }
    }
}

