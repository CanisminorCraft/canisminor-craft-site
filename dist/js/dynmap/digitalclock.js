componentconstructors.digitalclock=function(n,t){var e=$("<div/>").addClass("digitalclock").addClass("largeclock").appendTo(n.options.container),i=null,l=function(n){var t=function(n,t){for(var e=n.toString();e.length<t;)e="0"+e;return e};return t(n.hours,2)+":"+t(n.minutes,2)},o=function(n){null!=i&&(window.clearTimeout(i),i=null);var t=null;n>=0?(t=getMinecraftTime(n),e.addClass(t.day?"day":"night").removeClass(t.night?"day":"night").text(l(t))):e.removeClass("day night").text(""),null==i&&null!=t&&(i=window.setTimeout(function(){i=null,o(t.servertime+1e3/60)},700))};$(n).bind("worldupdated",function(n,t){o(t.servertime)})};