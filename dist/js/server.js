function getMinecraftTime(s){s=parseInt(s);var a=s>=0&&s<13700;return{servertime:s,days:parseInt((s+8e3)/24e3),hours:(parseInt(s/1e3)+6)%24,minutes:parseInt(s/1e3%1*60),seconds:parseInt(s/1e3%1*60%1*60),day:a,night:!a}}$(function(){var s=$("#server"),a="";$.getJSON("http://map.canisminor.cc/up/world/world/",function(e){var i=getMinecraftTime(e.servertime),n=i.hours+":"+i.minutes+":"+i.seconds;if(a+="<div class='w-card'><div class='w-avatar'><img src='//canisminor.cc/img/logo.png'></div><div class='w-box'><div class='w-title'>Server:<a href='/pages/map.html'>Canisminor Craft</a></div><div class='w-time'><span>"+e.currentcount+"/20</span>"+n+"</div>",a+="<div class='w-message'></div>",a+="<div class='p-card'>",a+="<div class='p-oneline'>在线玩家:<span>"+e.currentcount+"</span>人</div>",e.currentcount>0)for(var r=0;r<e.players.length;r++){a+="<div class='p-box'>";var t="http://s3.amazonaws.com/MinecraftSkins/"+e.players[r].name.replace(/\[(.*)\]/,"")+".png",c="javascript:this.src='http://www.canisminor.cc/img/dynmap/player.png'";a+='<div class="p-avata"><img onerror="'+c+'" src="'+t+'"></div>',a+="<div class='p-content'>",a+="<div class='p-name'>"+e.players[r].name;var v="x:"+e.players[r].x+" y:"+e.players[r].y+" z:"+e.players[r].z;a+="<span>"+v+"</span>",a+="</div>",a+="</div>",a+="</div>"}a+="</div>",a+=e?"<div class='auto-build'>Online</div>":"<div class='auto-build offline'>Offline</div>",a+="</div>",s.html(a),$("#server .w-message").text($("#content .version").text())})});