function hook_client(a,s,e){var s=$(s),t="";$.each(a.client,function(s){var i=a.client[s].data,o=a.client[s].time,c=a.client[s].url.replace("/","");t+="<div class='w-card' ",s>e&&(t+="style='display:none'"),t+="><div class='w-avatar'><img src='";var r=RegExp("http").test(i.user.avatar);t+=r?i.user.avatar:"https://coding.net"+i.user.avatar,t+="'></div><div class='w-box'><div class='w-title'>"+i.event+":<a href='"+i.repository.web_url+"'>"+i.repository.name+"</a></div><div class='w-time'><span>"+i.ref.split("/")[2]+"</span>"+o+"</div>";for(s in i.commits)t+="<a class='w-message' href='"+i.commits[s].web_url+"'>"+i.commits[s].short_message+"</a><div class='w-author'>committer: <span>"+i.commits[s].committer.name+"</span></div>";t+="</div>";for(var s=0;s<projects.length;s++)c==projects[s]&&(t+="<div class='auto-build'>客户端更新</div>");t+="</div>"}),t||(t="<div class='w-card w-null'>暂无数据</div>"),s.html(t)}function hook_webhook(a,s,e){var s=$(s),t="";$.each(a.webhook,function(s){var i=a.webhook[s].data,o=a.webhook[s].time,c=a.webhook[s].url.replace("/","");t+="<div class='w-card' ",s>e&&(t+="style='display:none'"),t+="><div class='w-avatar'><img src='";var r=RegExp("http").test(i.user.avatar);t+=r?i.user.avatar:"https://coding.net"+i.user.avatar,t+="'></div><div class='w-box'><div class='w-title'>"+i.event+":<a href='"+i.repository.web_url+"'>"+i.repository.name+"</a></div><div class='w-time'><span>"+i.ref.split("/")[2]+"</span>"+o+"</div>";for(s in i.commits)t+="<a class='w-message' href='"+i.commits[s].web_url+"'>"+i.commits[s].short_message+"</a><div class='w-author'>committer: <span>"+i.commits[s].committer.name+"</span></div>";t+="</div>";for(var s=0;s<projects.length;s++)c==projects[s]&&(t+="<div class='auto-build'>自动部署</div>");t+="</div>"}),t||(t="<div class='w-card w-null'>暂无数据</div>"),s.html(t)}var projects=["client","server","hook","website"];$(function(){$.getJSON("//hook.canisminor.cc/",function(a){hook_client(a,"#client",3),hook_webhook(a,"#webhook",3)}),$("#clientShow").click(function(){$("#client .w-card").show()}),$("#webhookShow").click(function(){$("#webhook .w-card").show()})});