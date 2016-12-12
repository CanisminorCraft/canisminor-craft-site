var Marketch = function (t) {
    this.cache = {
        selected: null,
        target: null
    }, this.sketchData = t.sketchData, this.currentArtboardId = null, this.currentAbData = {}, this.unit = {}, this.showSlice = !1, this.language = t.sketchData.language, this.I18N = t.sketchData.I18N, this.setup()
};
Marketch.prototype = {
    setup: function () {
        var t = $("#page textarea").val();
        $.each(this.I18N, function (e, s) {
            var a = new RegExp("{" + e + "}", "g");
            t = t.replace(a, s)
        }), $("#page").html(t), $("html").addClass("lan-" + this.language)
    }, render: function () {
        this.buildMarker(), this.buildLighthouse(), this.buildRuler(), this.buildSliceNav(), this.bind(), this.buildList()
    }, buildSliceNav: function () {
        var t = [];
        t.push('<div id="sk-slice" class="sk-slice">', '<a title="', this.I18N.DRAGTOSAVE, '" target="_blank" href="#"><img src="about:blank" /><span>@1x</span></a>', '<a title="', this.I18N.DRAGTOSAVE, '" target="_blank" href="#"><img src="about:blank" /><span>@2x</span></a>', "</div>"), $("#wrap").append(t.join(""))
    }, buildMarker: function () {
        var t = $("<div>");
        t.attr({
            id: "sketch-marker",
            "class": "sketch-marker"
        }), t.html('<b class="skm-w" w=""></b><b class="skm-h" h=""></b><span class="skm-tl"></span><span class="skm-tr"></span><span class="skm-bl"></span><span class="skm-br"></span>'), $("#wrap").append(t)
    }, buildLighthouse: function () {
        var t = [];
        t.push('<div id="skl-top" class="skl-top"></div>', '<div id="skl-bottom" class="skl-bottom"></div>', '<div id="skl-left" class="skl-left"></div>', '<div id="skl-right" class="skl-right"></div>'), $("#wrap").append(t.join(""))
    }, changeLightHouseState: function () {
        var t = $("#skl-top"), e = $("#skl-bottom"), s = $("#skl-left"), a = $("#skl-right"), i = this.cache.selected, l = null, n = null;
        this.cache.selected ? (l = i.position(), n = i.parents(".wrap-layer"), t.css({
            display: "block",
            top: l.top,
            width: n.width()
        }), e.css({display: "block", top: l.top + i.height(), width: n.width()}), s.css({
            display: "block",
            left: l.left,
            height: n.height()
        }), a.css({
            display: "block",
            left: l.left + i.width(),
            height: n.height()
        })) : (t.hide(), e.hide(), s.hide(), a.hide())
    }, buildRuler: function () {
        for (var t = document.createDocumentFragment(), e = ["skm-r-top", "skm-r-right", "skm-r-bottom", "skm-r-left"], s = 0, a = e.length; a > s; s++) {
            var i = document.createElement("div");
            i.id = e[s], i.className = "skm-rule " + e[s], i.innerHTML = "<span></span>", t.appendChild(i)
        }
        $("#wrap").append(t)
    }, decode: function (t) {
        return decodeURIComponent(t).replace(/^\s+|\s+$/g, "")
    }, buildList: function () {
        var t = this, e = $("#aside"), s = [], a = null, i = {
            standard: {unit: "px", factor: 1},
            points: {unit: "pt", factor: 1},
            retina: {unit: "pt", factor: 2},
            retinahd: {unit: "pt", factor: 3},
            ldpi: {unit: "dp", factor: .75},
            mdpi: {unit: "dp", factor: 1},
            hdpi: {unit: "dp", factor: 1.5},
            xhdpi: {unit: "dp", factor: 2},
            xxhdpi: {unit: "dp", factor: 3},
            xxxhdpi: {unit: "dp", factor: 4}
        };
        s.push('<ul class="page-list">'), $.each(t.sketchData.pageOrder, function (e, i) {
            var l = t.sketchData.pageData[i];
            s.push('<li data-page="' + l.pageId + '"><h2 class="more" title="' + t.decode(l.name) + '"><span>' + t.decode(l.name) + "</span></h2>"), 0 == e && (a = l.pageId), s.push('<ul class="ab-list">');
            for (var n = l.artboardId.length - 1; n >= 0; n--) {
                var r = l.artboardId[n], c = t.sketchData.artboard[r];
                s.push('<li data-ab="' + c.id + '"><h3 title="' + t.decode(c.name) + '">' + t.decode(c.name) + "</h3></li>")
            }
            s.push("</ul></li>")
        }), s.push("</ul>"), e.html(s.join("")), $("#aside h3").on("click", function () {
            var e = $(this).parent(), s = e.attr("data-ab"), a = t.sketchData.artboard[s];
            $("#aside .page-active").removeClass("page-active"), $("#aside .art-active").removeClass("art-active"), e.addClass("art-active"), e.parents("li").addClass("page-active"), t.cache.selected = null, $("#sketch-marker").css("visibility", "hidden"), $("#panel").removeClass("panel-active"), $("#wrap").width($("#wrap").attr("data-width")), t.changeLightHouseState(), t.loadArtboard(a)
        }).eq(0).click(), $("#unit").on("click", function () {
            var t = $(this).siblings(".dropdown");
            $(this).toggleClass("active"), t.toggleClass("active")
        }), $("#sk-slice").on("click", function (t) {
            t.stopPropagation()
        }), $("#dropdown").on("click", function (e) {
            if (e.stopPropagation(), $(this).removeClass("active"), $(e.target).is($("#dropdown")))return !1;
            var s = $(e.target).attr("data-value"), a = $(e.target).text();
            $("#unit").find(".unit-current").text(a).end().removeClass("active"), t.unit = i[s], t.cache.selected && (t.selectedLayer(), t.showPanel())
        }).children().first().click()
    }, loadArtboard: function (t) {
        var e = this, s = t.id, a = $("#" + s), i = t.x, l = t.y, n = [];
        e.currentArtboardId = s, e.showSlice = !1, $("#wrap").removeClass("wrap-slice-active"), this.sketchData.exportEveryLayer && t.slice && t.slice.length > 0 ? $("#hd-slice").show() : $("#hd-slice").hide().find("input").get(0).checked = !1, 0 == a.size() && (a = $("<div>"), a.attr("id", s), $.each(t.layer, function (t, s) {
            var a = (s.x, s.y, s.width), r = s.height;
            s.borderWidth && (a += 2 * s.borderWidth, r += 2 * s.borderWidth), e.currentAbData[s.id] = s, n.push('<div class="art-layer" id="', s.id, '" style="', "position:absolute;top:", s.y - l, "px;", "z-index:", s.zIndex, ";", "left:", s.x - i, "px;", "width: ", a, "px;", "height: ", r, "px;", '" name="', e.decode(s.name), '">', "</div>")
        }), t.slice && $.each(t.slice, function (t, s) {
            s.x, s.y;
            e.currentAbData[s.id] = s, n.push('<div class="art-slice" id="', s.id, '" style="', "position:absolute;top:", s.y - l, "px;", "z-index:", s.zIndex, ";", "left:", s.x - i, "px;", "width: ", s.width, "px;", "height: ", s.height, "px;", '" name="', e.decode(s.name), '">', "</div>")
        }), n.push("</div>"), a.attr("class", "wrap-layer").html(n.join("")).css({
            width: t.width,
            height: t.height,
            background: "url(" + t.id + "/artboard.png)"
        }).appendTo($("#wrap")), e.resetMask({maskData: t.mask})), $("#wrap .wrap-layer-active").removeClass("wrap-layer-active"), a.addClass("wrap-layer-active"), $("#wrap").css({width: a.width() + 220}).parent().scrollLeft(0)
    }, resetMask: function (t) {
        $.each(t.maskData, function (t, e) {
            var s = [], a = parseInt($("#" + t).css("zIndex"), 10);
            $.each([t].concat(e), function (t, e) {
                $("#" + e).size() > 0 && s.push(e)
            }), s.sort(function (t, e) {
                var s = $("#" + t), a = $("#" + e), i = s.width() || 0, l = s.height() || 0, n = a.width() || 0, r = a.height() || 0;
                return n * r - i * l
            }), $.each(s, function (t, e) {
                $("#" + e).css({zIndex: a + t})
            })
        })
    }, bind: function () {
        var t = this, e = {};
        $("#wrap").on("click", function (e) {
            var s = $(e.target), a = s.attr("id");
            if (a && t.currentAbData[a])if (t.showSlice) {
                if (s.hasClass("art-slice")) {
                    var i = t.currentArtboardId + "/slice/" + t.currentAbData[a].name;
                    $("#wrap .art-slice-active").removeClass("art-slice-active"), $("#sk-slice").css({
                        top: s.css("top"),
                        left: s.css("left")
                    }).find("a").each(function (t) {
                        var e = $(this), s = i + "@1x.png";
                        1 == t && (s = i + "@2x.png"), e.attr("href", s).find("img").attr("src", s)
                    }), s.addClass("art-slice-active")
                }
            } else t.cache.selected && a == t.cache.selected.attr("id") || (t.cache.selected = s, $("#sketch-marker").css("visibility", "visible").removeClass("sketch-marker-disable"), t.changeLightHouseState(), t.changeRulerState("none", {}), t.selectedLayer(), t.showPanel()); else t.cache.selected = null, t.changeLightHouseState(), t.changeRulerState("none", {}), $("#panel").removeClass("panel-active"), $("#wrap").width($("#wrap").attr("data-width")), $("#wrap").find(".art-slice-active").removeClass("art-slice-active"), $("#sketch-marker").css("visibility", "hidden"), $("#sk-slice").css({
                top: -1e3,
                left: -1e3
            })
        }).on("mousemove", function (e) {
            var s = $(e.target), a = s.attr("id");
            a && (t.currentAbData[a] || s.hasClass("wrap-layer")) ? t.cache.selected && a != t.cache.selected.attr("id") && (t.cache.target = s, $("#sketch-marker").addClass("sketch-marker-disable"), t.showRuler()) : t.changeRulerState("none", {})
        }).on("mouseout", function (e) {
            var s = $(e.target), a = s.attr("id");
            a && (t.currentAbData[a] || s.hasClass("wrap-layer")) && ($("#sketch-marker").removeClass("sketch-marker-disable"), t.cache.target = null, t.changeRulerState("none", {}))
        }), $("#panel").on("change", function (t) {
            var e = $(t.target);
            if ("select" == e.get(0).nodeName.toLowerCase()) {
                var s = e.attr("name");
                if ((s = "format") && ("svg" == e.val() ? $("#panel").find("select[name=size]").attr("disabled", "disabled") : $("#panel").find("select[name=size]").removeAttr("disabled")), "size" == s || "format" == s) {
                    var a = $("#export-btn").data("base"), i = $("#panel").find("select[name=size]").val(), l = $("#panel").find("select[name=format]").val(), n = "";
                    n = "svg" == l ? a + ".svg" : a + "@" + i + ".png", $("#export-btn").attr("href", n).attr("download", n)
                }
            }
        }).on("click", function (t) {
            var s = $(t.target), a = "";
            "textarea" == t.target.nodeName.toLowerCase() && (a = s.attr("name"), s.select(), document.execCommand("copy"), s.parents("dl").addClass("copy-success"), e[a] = setTimeout(function () {
                s.parents("dl").removeClass("copy-success")
            }, 1e3))
        }), $("body").on("click", function (t) {
            $(t.target).hasClass("unit") || $(t.target).parent().hasClass("unit") || ($(".dropdown").removeClass("active"), $(".unit").removeClass("active"))
        }), $("#hd-slice input").click(function () {
            this.checked ? (t.showSlice = !0, $("#wrap").addClass("wrap-slice-active")) : (t.showSlice = !1, $("#wrap").removeClass("wrap-slice-active")), $("#wrap").click()
        })
    }, selectedLayer: function () {
        var t = (this.cache.marker, this.cache.selected), e = t.outerWidth(), s = t.outerHeight(), a = t.position();
        $("#sketch-marker").css({
            width: e,
            height: s,
            top: a.top,
            left: a.left,
            visibility: "visible"
        }).find("b").eq(0).attr("w", this.getScale(parseInt(e, 10))).end().eq(1).attr("h", this.getScale(parseInt(s, 10)))
    }, showPanel: function () {
        var t = this.cache.selected, e = t.attr("id"), s = this.currentAbData[e], a = [];
        if (a.push('<dl class="pa-block">', "<dt><span>", this.decode(s.name), "</span></dt>", "<dd>", "<ul>", "<li><label>X</label>", this.getScale(s.x), "</li>", "<li><label>Y</label>", this.getScale(s.y), "</li>", "<li><label>", this.I18N.WIDTH, "</label>", this.getScale(s.width), "</li>", "<li><label>", this.I18N.HEIGHT, "</label>", this.getScale(s.height), "</li>", "</ul>", "</dd>", "</dl>"), s.border && a.push('<dl class="pa-inline">', "<dt><span>", this.I18N.border, "</span></dt>", "<dd>", "<ul>", "<li><label>", this.I18N.size, "</label>", this.getScale(s.border.width), "</li>", "<li><label>", this.I18N.color, "</label>", s.border.color, "</li>", "</ul>", "</dd>", "</dl>"), s.background && a.push('<dl class="pa-inline">', "<dt><span>", this.I18N.FILLCOLOR, "</span></dt>", "<dd>", "<p>", s.background, "</p>", "</dd>", "</dl>"), s.radius && a.push('<dl class="pa-inline">', "<dt><span>", this.I18N.RADIUS, "</span></dt>", "<dd>", "<p>", s.radius, "</p>", "</dd>", "</dl>"), "" != s.sharedStyle && a.push('<dl class="pa-block">', "<dt><span>", this.I18N[s.sharedStyleType], "</span></dt>", "<dd>", '<textarea name="content" readonly>', s.sharedStyle, "</textarea>", "</dd>", "</dl>"), s.html && (a.push('<dl class="pa-block">', "<dt><span>", this.I18N.LAYERTEXT, "</span><em>", this.I18N.COPYSUCCESS, "</em></dt>", "<dd>", '<textarea name="content">', this.decode(s.html), "</textarea>", "</dd>", "</dl>"), a.push('<dl class="pa-block">', "<dt><span>", this.I18N.FONTSIZE, "</span><em>", this.I18N.COPYSUCCESS, "</em></dt>", "<dd>", '<textarea name="fontSize">', this.getScale(s.style["font-size"]), "</textarea>", "</dd>", "</dl>")), s.style && a.push('<dl class="pa-block">', "<dt><span>", this.I18N.CODE, "</span><em>", this.I18N.COPYSUCCESS, "</em></dt>", "<dd>", '<textarea name="code">', this.formatStyle(s.style), "</textarea>", "</dd>", "</dl>"), !s.html && this.sketchData.exportEveryLayer) {
            var i = '<option value="png">png</option>';
            /^svg/.test(s.name) && (i += '<option value="svg">svg</option>'), a.push('<dl class="pa-block pa-export">', "<dt><span>", this.I18N.EXPORT, "</span></dt>", "<dd>", "<ul>", "<li>", "<label>", this.I18N.SIZE, "</label>", '<select name="size">', '<option select value="1x">1x</option>', '<option value="2x">2x</option>', '<option value="0.5x">0.5x</option>', '<option value="3x">3x</option>', "</select>", "</li>", "<li>", "<label>", this.I18N.FORMAT, "</label>", '<select name="format">', i, "</select>", "</li>", "</ul>", '<div class="export-btn">', '<a id="export-btn" href="javascript:;" data-base="', this.currentArtboardId, "/", e, '" ', 'class="panel-export" download="">', this.I18N.EXPORTLAYER, "</a>", "</div>", "</dd>", "</dl>")
        }
        $("#panel").html(a.join("")).addClass("panel-active"), $("#panel").find("textarea").each(function () {
            var t = this.scrollHeight, e = this.scrollWidth;
            25 >= t ? e > 175 && $(this).css({height: 23}) : t > 25 && 120 > t ? $(this).css({height: t}) : t > 120 && $(this).css({height: 120})
        }), $("#wrap").width($("#wrap").attr("data-width") - 200), $("select").change()
    }, formatStyle: function (t) {
        var e = [];
        for (var s in t)e.push(s + ":" + (t[s].indexOf("font-family") > -1 ? '"' + t[s] + '"' : t[s]) + ";");
        return e.join("\r\n")
    }, changeRulerState: function (t, e) {
        return $("#skm-r-top").css("visibility", "hidden"), $("#skm-r-left").css("visibility", "hidden"), $("#skm-r-right").css("visibility", "hidden"), $("#skm-r-bottom").css("visibility", "hidden"), "none" == t ? !1 : (t.indexOf("top") > -1 && $("#skm-r-top").css({
            left: e.tx + e.tw / 2,
            top: e.sy + e.sh + 2,
            height: parseInt(e.ty - e.sy - e.sh - 4, 10)
        }).css("visibility", "visible").find("span").html(this.getScale(parseInt(e.ty - e.sy - e.sh, 10))), t.indexOf("left") > -1 && $("#skm-r-left").css({
            top: e.ty + e.th / 2,
            left: e.sx + e.sw + 2,
            width: parseInt(e.tx - e.sx - e.sw - 4, 10)
        }).css("visibility", "visible").find("span").html(this.getScale(parseInt(e.tx - e.sx - e.sw, 10))), t.indexOf("right") > -1 && $("#skm-r-right").css({
            top: e.ty + e.th / 2,
            left: e.tx + e.tw + 2,
            width: parseInt(e.sx - e.tx - e.tw - 4, 10)
        }).css("visibility", "visible").find("span").html(this.getScale(parseInt(e.sx - e.tx - e.tw, 10))), t.indexOf("bottom") > -1 && $("#skm-r-bottom").css({
            left: e.tx + e.tw / 2,
            top: e.ty + e.th + 2,
            height: parseInt(e.sy - e.ty - e.th - 4, 10)
        }).css("visibility", "visible").find("span").html(this.getScale(parseInt(e.sy - e.ty - e.th, 10))), "container-in" == t && ($("#skm-r-top").css({
            left: e.sx + e.sw / 2,
            top: e.ty + 1,
            height: parseInt(e.sy - e.ty - 3, 10)
        }).css("visibility", "visible").find("span").html(this.getScale(parseInt(e.sy - e.ty, 10))), $("#skm-r-bottom").css({
            left: e.sx + e.sw / 2,
            top: e.sy + e.sh + 2,
            height: this.validateNum(e.ty + e.th - e.sy - e.sh - 2)
        }).css("visibility", "visible").find("span").html(this.getScale(this.validateNum(e.ty + e.th - e.sy - e.sh))), $("#skm-r-left").css({
            top: e.sy + e.sh / 2,
            left: e.tx + 1,
            width: parseInt(this.validateNum(e.sx - e.tx - 3), 10)
        }).css("visibility", "visible").find("span").html(this.getScale(parseInt(e.sx - e.tx, 10))), $("#skm-r-right").css({
            top: e.sy + e.sh / 2,
            left: e.sx + e.sw + 2,
            width: this.validateNum(e.tx + e.tw - e.sx - e.sw - 3)
        }).css("visibility", "visible").find("span").html(this.getScale(this.validateNum(e.tx + e.tw - e.sx - e.sw)))), void("container-out" == t && ($("#skm-r-top").css({
            left: e.tx + e.tw / 2,
            top: e.sy + 1,
            height: this.validateNum(e.ty - e.sy - 3)
        }).css("visibility", "visible").find("span").html(this.getScale(this.validateNum(e.ty - e.sy))), $("#skm-r-bottom").css({
            left: e.tx + e.tw / 2,
            top: e.ty + e.th + 2,
            height: this.validateNum(e.sy + e.sh - e.ty - e.th - 3)
        }).css("visibility", "visible").find("span").html(this.getScale(this.validateNum(e.sy + e.sh - e.ty - e.th))), $("#skm-r-left").css({
            top: e.ty + e.th / 2,
            left: e.sx + 1,
            width: this.validateNum(e.tx - e.sx - 3)
        }).css("visibility", "visible").find("span").html(this.getScale(this.validateNum(e.tx - e.sx))), $("#skm-r-right").css({
            top: e.ty + e.th / 2,
            left: e.tx + e.tw + 2,
            width: this.validateNum(e.sx + e.sw - e.tx - e.tw - 3)
        }).css("visibility", "visible").find("span").html(this.getScale(this.validateNum(e.sx + e.sw - e.tx - e.tw))))))
    }, validateNum: function (t) {
        return 0 > t ? parseInt(Math.abs(t), 10) : parseInt(t, 10)
    }, getScale: function (t) {
        var e = parseInt(t, 10), s = {
            px: e + "px",
            pt: .75 * e / this.unit.factor + "pt",
            dp: e / this.unit.factor + "dp"
        };
        return s[this.unit.unit]
    }, showRuler: function () {
        var t = 0, e = this.cache.selected, s = this.cache.target, a = {
            sw: e.width(),
            sh: e.height(),
            sx: e.position().left,
            sy: e.position().top,
            tw: s.width(),
            th: s.height(),
            tx: s.position().left,
            ty: s.position().top
        };
        a.sy - (a.ty + a.th) >= t && (a.sx - (a.tx + a.tw) >= t ? this.changeRulerState("bottom-right", a) : a.tx - (a.sx + a.sw) >= t ? this.changeRulerState("bottom-left", a) : this.changeRulerState("bottom", a)), a.ty - (a.sy + a.sh) > t && (a.sx - (a.tx + a.tw) >= t ? this.changeRulerState("top-right", a) : a.tx - (a.sx + a.sw) >= t ? this.changeRulerState("top-left", a) : this.changeRulerState("top", a)), (a.ty >= a.sy && a.ty <= a.sy + a.sh || a.sy >= a.ty && a.sy <= a.ty + a.th) && (a.sx - (a.tx + a.tw) >= t ? this.changeRulerState("right", a) : a.tx - (a.sx + a.sw) >= t ? this.changeRulerState("left", a) : this.changeRulerState("container-in", a)), a.tx >= a.sx && a.tx <= a.sx + a.sw && (a.sy - (a.ty + a.th) >= t ? this.changeRulerState("bottom", a) : a.ty - (a.sy + a.sh) >= t ? this.changeRulerState("top", a) : this.changeRulerState("container-out", a))
    }
};
var xdata = document.createElement("script");
xdata.onload = function () {
    new Marketch({sketchData: pageData}).render()
}, xdata.src = "data.js", document.body.appendChild(xdata);