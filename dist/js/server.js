function getMinecraftTime(s){s=parseInt(s);var a=s>=0&&s<13700;return{servertime:s,days:parseInt((s+8e3)/24e3),hours:(parseInt(s/1e3)+6)%24,minutes:parseInt(s/1e3%1*60),seconds:parseInt(s/1e3%1*60%1*60),day:a,night:!a}}$(function(){var s=$("#server"),a="";$.getJSON("http://map.canisminor.cc/up/world/world/",function(e){var i=getMinecraftTime(e.servertime),r=i.hours+":"+i.minutes+":"+i.seconds;if(a+="<div class='w-card'><div class='w-avatar'><img src='//canisminor.cc/img/logo.png'></div><div class='w-box'><div class='w-title'>Server:<a href='//canisminor.cc'>Canisminor Craft</a></div><div class='w-time'><span>"+e.currentcount+"/20</span>"+r+"</div>",a+="<div class='w-message'></div>",a+="<div class='p-card'>",a+="<div class='p-oneline'>在线玩家:<span>"+e.currentcount+"</span>人</div>",e.currentcount>0)for(var n=0;n<e.players.length;n++){a+="<div class='p-box'>",a+="<div class='p-avata'><img src='http://map.canisminor.cc/tiles/faces/32x32/"+e.players[n].name+".png'></div>",a+="<div class='p-content'>",a+="<div class='p-name'>"+e.players[n].name;var c="x:"+e.players[n].x+" z:"+e.players[n].z;a+="<span>"+c+"</span>",a+="</div>",a+="<progress class='progress' value='"+e.players[n].health+"' max='20'></progress>",a+="</div>",a+="</div>"}a+="</div>",a+=e?"<div class='auto-build'>Online</div>":"<div class='auto-build offline'>Offline</div>",a+="</div>",s.html(a)}),$.getJSON("http://mcapi.ca/query/canisminor.cc/motd",function(s){$("#server .w-message").text(s.motd)})});