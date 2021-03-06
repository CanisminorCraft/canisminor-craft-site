function getMinecraftTime(servertime) {
    servertime = parseInt(servertime);
    var day = servertime >= 0 && servertime < 13700;
    return {
        servertime: servertime,
        days: parseInt((servertime + 8000) / 24000),

        // Assuming it is day at 6:00
        hours: (parseInt(servertime / 1000) + 6) % 24,
        minutes: parseInt(((servertime / 1000) % 1) * 60),
        seconds: parseInt(((((servertime / 1000) % 1) * 60) % 1) * 60),

        day: day,
        night: !day
    };
}


$(function () {
    var className = $("#server");
    var strHtml = "";

    $.getJSON("http://map.canisminor.cc/up/world/world/", function (json) {
        var servertime = getMinecraftTime(json.servertime),
            nowtime = servertime.hours + ":" + servertime.minutes + ":" + servertime.seconds
        //html
        strHtml +=
            "<div class='w-card'>" +
            "<div class='w-avatar'><img src='//canisminor.cc/img/logo.png'></div>" +
            "<div class='w-box'>" +
            "<div class='w-title'>Server:<a href='/pages/map.html'>Canisminor Craft</a></div>" +
            "<div class='w-time'><span>" + json.currentcount + "/20" + "</span>" + nowtime + "</div>";
        strHtml += "<div class='w-message'></div>";
        //player
        strHtml += "<div class='p-card'>";
        strHtml += "<div class='p-oneline'>在线玩家:<span>" + json.currentcount + "</span>人</div>";
        if (json.currentcount > 0) {
            for (var i = 0; i < json.players.length; i++) {
                strHtml += "<div class='p-box'>";
                var imgurl = "http://mcapi.ca/skin/" + json.players[i].name.replace(/\[(.*)\]/, '') + "/true";
                var imgdefault = "javascript:this.src='http://www.canisminor.cc/img/dynmap/player.png'";
                strHtml += '<div class="p-avata"><img onerror="' + imgdefault + '" src="' + imgurl + '"></div>';

                strHtml += "<div class='p-content'>";
                strHtml += "<div class='p-name'>" + json.players[i].name;
                var xyz = "x:" + json.players[i].x + " y:" + json.players[i].y + " z:" + json.players[i].z
                strHtml += "<span>" + xyz + "</span>";
                strHtml += "</div>"
                strHtml += "</div>"
                strHtml += "</div>"
            }
        }
        strHtml += "</div>"
        // state
        if (json) {
            strHtml += "<div class='auto-build'>Online</div>";
        } else {
            strHtml += "<div class='auto-build offline'>Offline</div>";
        }
        strHtml += "</div>";
        className.html(strHtml)
        $("#server .w-message").text($('#content .version').text())
    })
})
