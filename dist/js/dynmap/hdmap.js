var HDProjection=DynmapProjection.extend({fromLocationToLatLng:function(o){var t=this.options.worldtomap,n=t[0]*o.x+t[1]*o.y+t[2]*o.z,i=t[3]*o.x+t[4]*o.y+t[5]*o.z;return new L.LatLng(n/(1<<this.options.mapzoomout),(128-i)/(1<<this.options.mapzoomout),(!0))},fromLatLngToLocation:function(o,t){var n=this.options.maptoworld,i=o.lat*(1<<this.options.mapzoomout),e=128-o.lng*(1<<this.options.mapzoomout),a=n[0]*i+n[1]*e+n[2]*t,z=n[6]*i+n[7]*e+n[8]*t;return{x:a,y:t,z:z}}}),HDMapType=DynmapTileLayer.extend({projection:void 0,options:{minZoom:0,maxZoom:0,errorTileUrl:"images/blank.png",continuousWorld:!0},initialize:function(o){o.maxZoom=o.mapzoomin+o.mapzoomout,L.Util.setOptions(this,o),this.projection=new HDProjection($.extend({map:this},o))},getTileName:function(o,t){var n=this.getTileInfo(o,t);return n.y=-n.y,n.scaledy=n.y>>5,namedReplace("{prefix}{nightday}/{scaledx}_{scaledy}/{zoom}{x}_{y}.{fmt}",n)},zoomprefix:function(o){return"zzzzzzzzzzzzzzzzzzzzzz".substr(0,o)+(0===o?"":"_")}});maptypes.HDMapType=function(o){return new HDMapType(o)};