componentconstructors.playermarkers=function(a,e){$(a).bind("playeradded",function(r,o){var n=a.getProjection().fromLocationToLatLng(o.location);o.marker=new L.CustomMarker(n,{elementCreator:function(){var r,n=document.createElement("div"),l=a.getProjection().fromLocationToLatLng(o.location);return o.marker.setLatLng(l),0==a.canvassupport&&(e.showplayerfaces=!1),$(n).addClass("Marker").addClass("playerMarker").append(r=$("<img/>").addClass(e.smallplayerfaces?"playerIconSm":"playerIcon").attr({src:"images/player.png"})).append(o.namefield=$("<span/>").addClass(e.smallplayerfaces?"playerNameSm":"playerName").append(o.name)),e.showplayerfaces&&(e.smallplayerfaces?getMinecraftHead(o.account,16,function(a){$(a).addClass("playerIconSm").prependTo(n),r.remove()}):e.showplayerbody?getMinecraftHead(o.account,"body",function(a){$(a).addClass("playerIcon").prependTo(n),r.remove()}):getMinecraftHead(o.account,32,function(a){$(a).addClass("playerIcon").prependTo(n),r.remove()})),e.showplayerhealth?(o.healthContainer=$("<div/>").addClass(e.smallplayerfaces?"healthContainerSm":"healthContainer").appendTo(n),void 0!==o.health&&void 0!==o.armor?(o.healthBar=$("<div/>").addClass("playerHealth").css("width",o.health/2*5+"px"),o.armorBar=$("<div/>").addClass("playerArmor").css("width",o.armor/2*5+"px"),$("<div/>").addClass("playerHealthBackground").append(o.healthBar).appendTo(o.healthContainer),$("<div/>").addClass("playerArmorBackground").append(o.armorBar).appendTo(o.healthContainer)):o.healthContainer.css("display","none")):o.namefield.addClass("playerNameNoHealth"),n}}),a.world===o.location.world&&a.playermarkergroup.addLayer(o.marker)}),$(a).bind("playerremoved",function(e,r){a.playermarkergroup.removeLayer(r.marker)}),$(a).bind("playerupdated",function(r,o){if(a.world===o.location.world){a.playermarkergroup.addLayer(o.marker);var n=a.getProjection().fromLocationToLatLng(o.location);o.marker.setLatLng(n),e.showplayerhealth&&(void 0!==o.health&&void 0!==o.armor?(o.healthContainer.css("display","block"),o.healthBar.css("width",o.health/2*5+"px"),o.armorBar.css("width",o.armor/2*5+"px")):o.healthContainer.css("display","none"))}else a.playermarkergroup.removeLayer(o.marker);o.namefield&&o.namefield.html()!=o.name&&o.namefield.html(o.name)}),$(a).bind("mapchanging",function(e){var r;for(r in a.players){var o=a.players[r];a.playermarkergroup.removeLayer(o.marker)}}),$(a).bind("mapchanging",function(e){var r;for(r in a.players){var o=a.players[r];a.playermarkergroup.removeLayer(o.marker)}}),$(a).bind("mapchanged",function(e){var r;for(r in a.players){var o=a.players[r];if(a.world===o.location.world){a.playermarkergroup.addLayer(o.marker);var n=a.getProjection().fromLocationToLatLng(o.location);o.marker.setLatLng(n)}}}),a.playermarkergroup=new L.LayerGroup,e.hidebydefault||a.map.addLayer(a.playermarkergroup),a.addToLayerSelector(a.playermarkergroup,e.label||"Players",e.layerprio||0)};