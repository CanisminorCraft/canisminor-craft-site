function getMinecraftTime(s){s=parseInt(s);var e=s>=0&&s<13700;return{servertime:s,days:parseInt((s+8e3)/24e3),hours:(parseInt(s/1e3)+6)%24,minutes:parseInt(s/1e3%1*60),seconds:parseInt(s/1e3%1*60%1*60),day:e,night:!e}}$(function(){var s=$("#server"),e="";$.getJSON("http://map.canisminor.cc/up/world/world/",function(a){var i=getMinecraftTime(a.servertime),r=i.hours+":"+i.minutes+":"+i.seconds;if(e+="<div class='w-card'><div class='w-avatar'><img src='//canisminor.cc/img/logo.png'></div><div class='w-box'><div class='w-title'>Server:<a href='//canisminor.cc'>Canisminor Craft</a></div><div class='w-time'><span>"+a.currentcount+"/20</span>"+r+"</div>",e+="<div class='w-message'></div>",e+="<div class='p-card'>",e+="<div class='p-oneline'>在线玩家:<span>"+a.currentcount+"</span>人</div>",a.currentcount>0)for(var n=0;n<a.players.length;n++){e+="<div class='p-box'>",e+="<div class='p-avata'><img src='http://map.canisminor.cc/tiles/faces/32x32/"+a.players[n].name+".png'></div>",e+="<div class='p-content'>",e+="<div class='p-name'>"+a.players[n].name;var t="x:"+a.players[n].x+" z:"+a.players[n].z;e+="<span>"+t+"</span>",e+="</div>",e+="<progress class='progress' value='"+a.players[n].health+"' max='20'></progress>",e+="</div>",e+="</div>"}e+="</div>",e+=a?"<div class='auto-build'>Online</div>":"<div class='auto-build offline'>Offline</div>",e+="</div>",s.html(e),$("#server .w-message").text($("#content .version").text())})});