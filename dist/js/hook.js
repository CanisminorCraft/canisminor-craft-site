function hook_client(a,s,t){for(var s=$(s),e="",i=0;i<t;i++){var r=a.client[i].data,o=a.client[i].time,c=a.client[i].url.replace("/","");e+="<div class='w-card'><div class='w-avatar'><img src='";var v=RegExp("http").test(r.user.avatar);e+=v?r.user.avatar:"https://coding.net"+r.user.avatar,e+="'></div><div class='w-box'><div class='w-title'>"+r.event+":<a href='"+r.repository.web_url+"'>"+r.repository.name+"</a></div><div class='w-time'><span>"+r.ref.split("/")[2]+"</span>"+o+"</div>";for(i in r.commits)e+="<a class='w-message' href='"+r.commits[i].web_url+"'>"+r.commits[i].short_message+"</a><div class='w-author'>committer: <span>"+r.commits[i].committer.name+"</span></div>";e+="</div>";for(var i=0;i<projects.length;i++)c==projects[i]&&(e+="<div class='auto-build'>客户端更新</div>");e+="</div>"}e||(e="<div class='w-card w-null'>暂无数据</div>"),s.html(e)}function hook_webhook(a,s,t){for(var s=$(s),e="",i=0;i<t;i++){var r=a.webhook[i].data,o=a.webhook[i].time,c=a.webhook[i].url.replace("/","");e+="<div class='w-card'><div class='w-avatar'><img src='";var v=RegExp("http").test(r.user.avatar);e+=v?r.user.avatar:"https://coding.net"+r.user.avatar,e+="'></div><div class='w-box'><div class='w-title'>"+r.event+":<a href='"+r.repository.web_url+"'>"+r.repository.name+"</a></div><div class='w-time'><span>"+r.ref.split("/")[2]+"</span>"+o+"</div>";for(i in r.commits)e+="<a class='w-message' href='"+r.commits[i].web_url+"'>"+r.commits[i].short_message+"</a><div class='w-author'>committer: <span>"+r.commits[i].committer.name+"</span></div>";e+="</div>";for(var i=0;i<projects.length;i++)c==projects[i]&&(e+="<div class='auto-build'>自动部署</div>");e+="</div>"}e||(e="<div class='w-card w-null'>暂无数据</div>"),s.html(e)}var projects=["client","server","hook","website"];$(function(){$.getJSON("//hook.canisminor.cc/",function(a){hook_client(a,"div#client",3),hook_webhook(a,"div#webhook",3)})});