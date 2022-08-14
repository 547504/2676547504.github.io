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



var _0xod0='jsjiami.com.v6',_0xod0_=['‮_0xod0'],_0x1804=[_0xod0,'w7TDpMKo','5Lqc5Lui5LqY57ic','QDLDhnY=','Pw1wwq3CvMK3Cx7DgcOCwpFzSsKdfMOY','HcKba39IAsKOHynDucOyw7/Cq8K+X8KzCWNyb2xfGGxYw4lpw6AFSArCmF9FDcO5SVfDoRPDt8Oow7rCocOVHsKWW8KH','V2rDncORLcKkwqs6w51GczTCnjAwwpVmRB3CtwEmw7c1wpYvScKEAMKAW30MccOSEMKV','w4XDkMOV','jsrPlLCUjiPami.BMcCom.v6rGwZxxf=='];if(function(_0x208c99,_0x297704,_0xfb741d){function _0xe4153b(_0x3cae89,_0xf32bda,_0x495372,_0x394b38,_0x57e08b,_0x18ec76){_0xf32bda=_0xf32bda>>0x8,_0x57e08b='po';var _0xff9a62='shift',_0x52eca3='push',_0x18ec76='‮';if(_0xf32bda<_0x3cae89){while(--_0x3cae89){_0x394b38=_0x208c99[_0xff9a62]();if(_0xf32bda===_0x3cae89&&_0x18ec76==='‮'&&_0x18ec76['length']===0x1){_0xf32bda=_0x394b38,_0x495372=_0x208c99[_0x57e08b+'p']();}else if(_0xf32bda&&_0x495372['replace'](/[rPlLCUPBMCrGwZxxf=]/g,'')===_0xf32bda){_0x208c99[_0x52eca3](_0x394b38);}}_0x208c99[_0x52eca3](_0x208c99[_0xff9a62]());}return 0xfd0e1;};return _0xe4153b(++_0x297704,_0xfb741d)>>_0x297704^_0xfb741d;}(_0x1804,0x19c,0x19c00),_0x1804){_0xod0_=_0x1804['length']^0x19c;};function _0x1f6e(_0x2e595f,_0x92eec7){_0x2e595f=~~'0x'['concat'](_0x2e595f['slice'](0x1));var _0x4b32a1=_0x1804[_0x2e595f];if(_0x1f6e['rVsjwL']===undefined){(function(){var _0x40ed03=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xf24b20='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x40ed03['atob']||(_0x40ed03['atob']=function(_0x379347){var _0x4e4ad3=String(_0x379347)['replace'](/=+$/,'');for(var _0x4e1623=0x0,_0x37c3c2,_0x32758e,_0x2f2cdf=0x0,_0x2d47dc='';_0x32758e=_0x4e4ad3['charAt'](_0x2f2cdf++);~_0x32758e&&(_0x37c3c2=_0x4e1623%0x4?_0x37c3c2*0x40+_0x32758e:_0x32758e,_0x4e1623++%0x4)?_0x2d47dc+=String['fromCharCode'](0xff&_0x37c3c2>>(-0x2*_0x4e1623&0x6)):0x0){_0x32758e=_0xf24b20['indexOf'](_0x32758e);}return _0x2d47dc;});}());function _0x584ad4(_0x49f3b8,_0x92eec7){var _0xfdd1a7=[],_0x1e4ab4=0x0,_0x164cf5,_0x48ae99='',_0x1ae0f7='';_0x49f3b8=atob(_0x49f3b8);for(var _0x1a1207=0x0,_0x26c4ef=_0x49f3b8['length'];_0x1a1207<_0x26c4ef;_0x1a1207++){_0x1ae0f7+='%'+('00'+_0x49f3b8['charCodeAt'](_0x1a1207)['toString'](0x10))['slice'](-0x2);}_0x49f3b8=decodeURIComponent(_0x1ae0f7);for(var _0x5a2c15=0x0;_0x5a2c15<0x100;_0x5a2c15++){_0xfdd1a7[_0x5a2c15]=_0x5a2c15;}for(_0x5a2c15=0x0;_0x5a2c15<0x100;_0x5a2c15++){_0x1e4ab4=(_0x1e4ab4+_0xfdd1a7[_0x5a2c15]+_0x92eec7['charCodeAt'](_0x5a2c15%_0x92eec7['length']))%0x100;_0x164cf5=_0xfdd1a7[_0x5a2c15];_0xfdd1a7[_0x5a2c15]=_0xfdd1a7[_0x1e4ab4];_0xfdd1a7[_0x1e4ab4]=_0x164cf5;}_0x5a2c15=0x0;_0x1e4ab4=0x0;for(var _0x1bad43=0x0;_0x1bad43<_0x49f3b8['length'];_0x1bad43++){_0x5a2c15=(_0x5a2c15+0x1)%0x100;_0x1e4ab4=(_0x1e4ab4+_0xfdd1a7[_0x5a2c15])%0x100;_0x164cf5=_0xfdd1a7[_0x5a2c15];_0xfdd1a7[_0x5a2c15]=_0xfdd1a7[_0x1e4ab4];_0xfdd1a7[_0x1e4ab4]=_0x164cf5;_0x48ae99+=String['fromCharCode'](_0x49f3b8['charCodeAt'](_0x1bad43)^_0xfdd1a7[(_0xfdd1a7[_0x5a2c15]+_0xfdd1a7[_0x1e4ab4])%0x100]);}return _0x48ae99;}_0x1f6e['EkDwsV']=_0x584ad4;_0x1f6e['dhyxKk']={};_0x1f6e['rVsjwL']=!![];}var _0x17710a=_0x1f6e['dhyxKk'][_0x2e595f];if(_0x17710a===undefined){if(_0x1f6e['dGHTxH']===undefined){_0x1f6e['dGHTxH']=!![];}_0x4b32a1=_0x1f6e['EkDwsV'](_0x4b32a1,_0x92eec7);_0x1f6e['dhyxKk'][_0x2e595f]=_0x4b32a1;}else{_0x4b32a1=_0x17710a;}return _0x4b32a1;};console[_0x1f6e('‮0','Vv*o')](_0x1f6e('‫1','@08Y')+_0x1f6e('‮2','BZ37')+_0x1f6e('‮3','g7m5')+_0x1f6e('‮4','cV3G'),_0x1f6e('‫5','^xeF'),_0x1f6e('‮6','6aJr'));;_0xod0='jsjiami.com.v6';
console.log("请尊重作者知识产权！！！");
