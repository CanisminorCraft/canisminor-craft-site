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
            "<div class='w-title'>Server:<a href='//canisminor.cc'>Canisminor Craft</a></div>" +
            "<div class='w-time'><span>" +
            json.currentcount + "/20" +
            "</span>" + nowtime + "</div>";
        strHtml += "</div>";

        if (json) {
            strHtml += "<div class='auto-build'>Online</div>";
        } else {
            strHtml += "<div class='auto-build offline'>Offline</div>";
        }

        strHtml += "</div>";
        className.html(strHtml)
    })

})