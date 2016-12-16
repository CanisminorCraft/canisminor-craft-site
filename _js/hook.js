var projects = ['client', 'server', 'hook', 'website'];
$('#clientShow').click(function () {
    $('#client .w-card').show()
})
$(function () {
    var strHtml = "";
    $.getJSON("//hook.canisminor.cc/", function (data) {
        //merge
        hook_client(data, "#client", 3);

        //webhook
        hook_webhook(data, "#hook", 3);

    })

    $('#clientShow').click(function () {
        $('#client .w-card').css('display','block!important')
    })
    $('#hookShow').click(function () {
        $('#hook .w-card').css('display','block!important')
    })
})

//client

function hook_client(data, className, num) {
    var className = $(className);
    var strHtml = "";
    $.each(data.client, function (i) {
        var json = data.client[i].data;
        var time = data.client[i].time;
        var url = data.client[i].url.replace("/", "")
        //html
        strHtml +=
            "<div class='w-card' ";

        if (i > num) {
            strHtml += "style='display:none'"
        }
        strHtml += ">" +
            "<div class='w-avatar'><img src='";

        var ifCoding = RegExp('http').test(json.user.avatar);
        if (ifCoding) {
            strHtml += json.user.avatar;
        } else {
            strHtml += "https://coding.net" + json.user.avatar
        }

        strHtml += "'></div>" +
            "<div class='w-box'>" +
            "<div class='w-title'>" + json.event + ":<a href='" + json.repository.web_url + "'>" +
            json.repository.name + "</a></div>" +
            "<div class='w-time'><span>" +
            json.ref.split("/")[2] +
            "</span>" + time + "</div>";

        for (i in json.commits) {
            strHtml +=
                "<a class='w-message' href='" + json.commits[i].web_url + "'>" +
                json.commits[i].short_message + "</a>" +
                "<div class='w-author'>committer: " + "<span>" +
                json.commits[i].committer.name + "</span></div>";
        }

        strHtml += "</div>";
        for (var i = 0; i < projects.length; i++) {
            if (url == projects[i]) {
                strHtml += "<div class='auto-build'>客户端更新</div>";
            }
        }
        strHtml += "</div>";
    })
    if (!strHtml) {
        strHtml = "<div class='w-card w-null'>暂无数据</div>"
    }
    className.html(strHtml)
}

//webhook

function hook_webhook(data, className, num) {
    var className = $(className);
    var strHtml = "";
    $.each(data.webhook, function (i) {
        var json = data.webhook[i].data;
        var time = data.webhook[i].time;
        var url = data.webhook[i].url.replace("/", "")
        //html
        strHtml +=
            "<div class='w-card' ";

        if (i > num) {
            strHtml += "style='display:none'"
        }
        strHtml += ">" +
            "<div class='w-avatar'><img src='";

        var ifCoding = RegExp('http').test(json.user.avatar);
        if (ifCoding) {
            strHtml += json.user.avatar;
        } else {
            strHtml += "https://coding.net" + json.user.avatar
        }

        strHtml += "'></div>" +
            "<div class='w-box'>" +
            "<div class='w-title'>" + json.event + ":<a href='" + json.repository.web_url + "'>" +
            json.repository.name + "</a></div>" +
            "<div class='w-time'><span>" +
            json.ref.split("/")[2] +
            "</span>" + time + "</div>";

        for (i in json.commits) {
            strHtml +=
                "<a class='w-message' href='" + json.commits[i].web_url + "'>" +
                json.commits[i].short_message + "</a>" +
                "<div class='w-author'>committer: " + "<span>" +
                json.commits[i].committer.name + "</span></div>";
        }

        strHtml += "</div>";
        for (var i = 0; i < projects.length; i++) {
            if (url == projects[i]) {
                strHtml += "<div class='auto-build'>自动部署</div>";
            }
        }
        strHtml += "</div>";
    })
    if (!strHtml) {
        strHtml = "<div class='w-card w-null'>暂无数据</div>"
    }
    className.html(strHtml)
}