function getMinecraftTime(e){e=parseInt(e);var a=e>=0&&e<13700;return{servertime:e,days:parseInt((e+8e3)/24e3),hours:(parseInt(e/1e3)+6)%24,minutes:parseInt(e/1e3%1*60),seconds:parseInt(e/1e3%1*60%1*60),day:a,night:!a}}function validateImage(e){var a;return window.ActiveXObject?a=new ActiveXObject("Microsoft.XMLHTTP"):window.XMLHttpRequest&&(a=new XMLHttpRequest),a.open("Get",e,!1),a.send(),404!=a.status}$(function(){var e=$("#server"),a="";$.getJSON("http://map.canisminor.cc/up/world/world/",function(s){var i=getMinecraftTime(s.servertime),t=i.hours+":"+i.minutes+":"+i.seconds;if(a+="<div class='w-card'><div class='w-avatar'><img src='//canisminor.cc/img/logo.png'></div><div class='w-box'><div class='w-title'>Server:<a href='/pages/map.html'>Canisminor Craft</a></div><div class='w-time'><span>"+s.currentcount+"/20</span>"+t+"</div>",a+="<div class='w-message'></div>",a+="<div class='p-card'>",a+="<div class='p-oneline'>在线玩家:<span>"+s.currentcount+"</span>人</div>",s.currentcount>0)for(var n=0;n<s.players.length;n++){a+="<div class='p-box'>";var r="http://map.canisminor.cc/tiles/faces/32x32/"+s.players[n].name.replace(/\[(.*)\]/,"")+".png";a+=validateImage(r)?"<div class='p-avata'><img src='"+r+"'></div>":"<div class='p-avata'><img src='http://www.canisminor.cc/img/dynmap/player.png'></div>",a+="<div class='p-content'>",a+="<div class='p-name'>"+s.players[n].name;var c="x:"+s.players[n].x+" y:"+s.players[n].y+" z:"+s.players[n].z;a+="<span>"+c+"</span>",a+="</div>",a+="</div>",a+="</div>"}a+="</div>",a+=s?"<div class='auto-build'>Online</div>":"<div class='auto-build offline'>Offline</div>",a+="</div>",e.html(a),$("#server .w-message").text($("#content .version").text())})});