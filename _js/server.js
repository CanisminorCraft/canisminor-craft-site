$(function () {
    var className = $("server");
    var strHtml = "";
    $.getJSON("https://mcapi.ca/query/canisminor.cc/info", function (json) {
        // json = {
        //     status: true,
        //     hostname: "canisminor.cc",
        //     port: 25565,
        //     ping: 639,
        //     version: "Spigot 1.11",
        //     protocol: 315,
        //     players: {
        //         online: 3, var
        //         max: 20
        //     },
        //     motd: "Welcome to Canisminor Craft",
        //     htmlmotd: "Welcome to Canisminor Craft",
        //     favicon: ""
        // }

        //html
        strHtml +=
            "<div class='w-card'>" +
            "<div class='w-avatar'><img src='";

        strHtml += json.favicon;

        strHtml += "'></div>" +
            "<div class='w-box'>" +
            "<div class='w-title'>" + Server + ":<a href='//canisminor.cc'>" +
            json.hostname + "</a></div>" +
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
        className.html(strHtml)
    })
})