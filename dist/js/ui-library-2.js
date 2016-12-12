var I18N={},lang=navigator.language.toLocaleLowerCase(),timestamp="";I18N["zh-cn"]={"Design resolution":"设计分辨率",NOTES:"备注",PROPERTIES:"属性",FILLS:"填充",TYPEFACE:"字体",BORDERS:"边框",SHADOWS:"阴影","CSS STYLE":"CSS 样式",EXPORTABLE:"导出",Gradient:"渐变",Color:"颜色",Weight:"粗细","Style name":"样式名称",Custom:"自定义",Standard:"标准像素","iOS Devices":"iOS 设备",Points:"标准点",Retina:"视网膜","Retina HD":"高清视网膜","Android Devices":"安卓设备","Other Devices":"其他设备","Ubuntu Grid":"Ubuntu 网格","Web View":"网页",Scale:"倍率",Unit:"单位","Color format":"颜色格式","Color hex":"色值","ARGB hex":"安卓色值",Save:"保存",Width:"宽度",Height:"高度",Top:"上面",Right:"右侧",Bottom:"下面",Left:"左侧","Fill / Color":"填充 / 颜色",Border:"边框",Opacity:"不透明度",Radius:"圆角",Shadow:"外(内)阴影",Style:"样式名称","Font size":"字号",Line:"行高",Typeface:"字体",Character:"字间距",Paragraph:"段落间距","Percentage of artboard":"基于画板百分比单位",Mark:"标注",All:"全选",None:"不全选","Select filtered":"选中过滤的","Selection of Sketch":"Sketch 选中的画板","Current of Sketch":"Sketch 当前的画板",Filter:" 过滤",Export:"导出",Position:"位置",Size:"大小",Family:"字体",Spacing:"空间",Content:"内容","All artboards":"全部画板","No slices added!":"未添加切图","No color names added!":"未添加颜色名称","Select 1 or 2 layers to make marks!":"请选中 1 至 2 个图层!","Select a text layer to make marks!":"请选中 1 个文本图层!","Select a layer to make marks!":"请选中 1 个图层!","Export spec":"导出规范","Export to:":"导出到:",Export:"导出","Exporting...":"导出中...","Export complete!":"导出完成!","The slice not in current artboard.":"切图不在当前画板","Inside Border":"内边框","Outside Border":"外边框","Center Border":"中心边框","Inner Shadow":"内阴影","Outer Shadow":"外阴影","No artboards!":"没有画板","You need add some artboards.":"您需要添加一些画板","No slices added!":"没有添加切图","No colors added!":"没有添加颜色",Import:"导入","Choose a &quot;colors.json&quot;":"选择一个 &quot;colors.json&quot;",Choose:"选择","Select a layer to add exportable!":"请选中 1 个图层!","Import complete!":"导入完成!","Processing layer %@ of %@":"图层处理中... %@ / %@","Advanced mode":"高级模式",Plugins:"插件",Toolbar:"工具栏","1. Mark Overlay":"1. 标注区域","2. Mark Sizes":"2. 标注尺寸","3. Mark Spacings":"3. 标注间隔","4. Mark Properties":"4. 标注属性","5. Mark Note":"5. 标注备注","Spec Export":"规范导出","Toggle Hidden":"切换隐藏标注","Toggle Locked":"切换锁定标注","Clear Marks":"清除标注",Settings:"设置","Color Names":"颜色命名","Make Exportable":"设置切图","Set Name...":"设置名称...","Import Colors":"导入颜色","Export Colors":"导出颜色","You can select shape layer to add colors or import colors":"您可以选中矢量图层添加颜色或导入颜色","New Version!":"新的版本!","Just checked Sketch Measure has a new version (%@)":"刚刚检测到 Sketch Measure 有新版 (%@)","Download Now":"下载",Cancel:"取消",Donate:"捐赠"},function(e){String.prototype.firstUpperCase=function(){return this.replace(/\b(\w)(\w*)/g,function(e,t,i){return t.toUpperCase()+i.toLowerCase()})};var t=function(e){return I18N[lang]&&I18N[lang][e]?I18N[lang][e]:e},i=function(e){return new i.fn.init(e)};i.fn=i.prototype={constructor:i,artboardID:void 0,selectedID:void 0,targetID:void 0,zoomSize:function(e){return e*this.configs.zoom},percentageSize:function(e,t){return Math.round(e/t*1e3)/10+"%"},unitSize:function(e,t){var e=Math.round(e/this.configs.scale*10)/10,i=this.configs.unit.split("/"),a=i[0];return i.length>1&&t&&(a=i[1]),e+a},positive:function(e){return e<0?-e:e},isIntersect:function(e,t){return!(e.maxX<=t.x||e.x>=t.maxX||e.y>=t.maxY||e.maxY<=t.y)},getID:function(e){return"#"+$(e).attr("id")},getIndex:function(e){return $(e).attr("data-index")},getRect:function(e){var t=this.current.layers[e];return{x:t.rect.x,y:t.rect.y,width:t.rect.width,height:t.rect.height,maxX:t.rect.x+t.rect.width,maxY:t.rect.y+t.rect.height}},getDistance:function(e,t){return{top:e.y-t.y,right:t.maxX-e.maxX,bottom:t.maxY-e.maxY,left:e.x-t.x}},message:function(e){var t=$("#message").text(e);t.hide().fadeIn().delay(1e3).fadeOut("fast")},locationHash:function(t){if(t){var i={},a=[];return $.each(t,function(e,t){/[a-z]+/.test(e)&&!isNaN(t)&&(i[e]=parseInt(t),a.push(e+t))}),e.history.replaceState(void 0,void 0,"#"+a.join("-")),i}var i={};e.location.hash.replace(/[\#\-]([a-z]+)([\d]+)/gi,function(e,t,a){i[t]=parseInt(a)});return i},render:function(){$("#app").html(["<header>",'<div class="header-left">','<ul class="tab">','<li class="icon-artboards current" data-id="artboards"></li>','<li class="icon-slices" data-id="slices"></li>','<li class="icon-colors" data-id="colors"></li>',"</ul>","</div>",'<div class="header-center">','<div id="zoom" class="zoom-widget"></div>',"<h1></h1>",'<div class="show-notes">','<label for="show-notes">'+t("NOTES")+"</label>",'<div class="slidebox">','<input id="show-notes" type="checkbox" name="show-notes" checked="checked">','<label for="show-notes"></label>',"</div>","</div>","</div>",'<div class="header-right"><div id="unit" class="unit-box" tabindex="0">XHDPI @2x (dp/sp)</div></div>',"</header>","<main>",'<aside class="navbar on">','<section id="artboards"></section>','<section id="slices" style="display: none;"><div class="empty">'+t("No slices added!")+"</div></section>",'<section id="colors" style="display: none;"><div class="empty">'+t("No colors added!")+"</div></section>","</aside>",'<section class="screen-viewer">','<div class="screen-viewer-inner">','<div id="screen" class="screen">','<div id="rulers" style="display:none;">','<div id="rv" class="ruler v"></div>','<div id="rh" class="ruler h"></div>',"</div>",'<div id="layers"></div>','<div id="notes"></div>','<div id="td" class="distance v" style="display:none;"><div data-height="3"></div></div>','<div id="rd" class="distance h" style="display:none;"><div data-width=""></div></div>','<div id="bd" class="distance v" style="display:none;"><div data-height=""></div></div>','<div id="ld" class="distance h" style="display:none;"><div data-width=""></div></div>',"</div>","</div>",'<div class="overlay"></div>',"</section>",'<aside id="inspector" class="inspector"></aside>',"</main>",'<div id="message" class="message"></div>','<div id="cursor" class="cursor"></div>'].join("")),this.zoom(),this.unit(),this.artboards(),this.slices(),this.colors(),this.screen(),this.layers(),this.notes(),this.events()},screen:function(){var e=this.current.imageBase64?this.current.imageBase64:this.current.imagePath+"?"+timestamp;if(!this.maxSize){var t=this.current.width>this.current.height?this.current.width:this.current.height,i=$(".screen-viewer").outerWidth()>$(".screen-viewer").outerHeight()?$(".screen-viewer").outerWidth():$(".screen-viewer").outerHeight();this.maxSize=t>i?5*t:5*i,$("#screen").parent().css({width:this.maxSize,height:this.maxSize});var a=this.maxSize-$(".screen-viewer").outerWidth(),s=this.maxSize-$(".screen-viewer").outerHeight(),o=.5*a,r=.5*s;$(".screen-viewer").scrollLeft(o),$(".screen-viewer").scrollTop(r)}$("#screen").css({width:this.zoomSize(this.current.width),height:this.zoomSize(this.current.height),background:"#FFF url("+openId+e+") no-repeat",backgroundSize:this.zoomSize(this.current.width)+"px "+this.zoomSize(this.current.height)+"px"})},zoom:function(){var e=100*this.configs.zoom+"%",t=this.configs.zoom<=.25?' disabled="disabled"':"",i=this.configs.zoom>=4?' disabled="disabled"':"";$("#zoom").html(['<button class="zoom-in"'+t+"></button>",'<label class="zoom-text">'+e+"</label>",'<button class="zoom-out"'+i+"></button>"].join(""))},unit:function(){var e=this,i=[{units:[{name:t("Standard"),unit:"px",scale:1}]},{name:t("iOS Devices"),units:[{name:t("Points")+" @1x",unit:"pt",scale:1},{name:t("Retina")+" @2x",unit:"pt",scale:2},{name:t("Retina HD")+" @3x",unit:"pt",scale:3}]},{name:t("Android Devices"),units:[{name:"LDPI @0.75x",unit:"dp/sp",scale:.75},{name:"MDPI @1x",unit:"dp/sp",scale:1},{name:"HDPI @1.5x",unit:"dp/sp",scale:1.5},{name:"XHDPI @2x",unit:"dp/sp",scale:2},{name:"XXHDPI @3x",unit:"dp/sp",scale:3},{name:"XXXHDPI @4x",unit:"dp/sp",scale:4}]},{name:t("Web View"),units:[{name:"CSS Rem 12px",unit:"rem",scale:12},{name:"CSS Rem 14px",unit:"rem",scale:14}]}],a=[],s=[],o="",r="";$.each(i,function(i,a){a.name&&s.push('<li class="sub-title">'+t(a.name)+"</li>"),$.each(a.units,function(i,a){var o="";a.unit==e.configs.unit&&a.scale==e.configs.scale&&(o=' checked="checked"',r=t(a.name)),s.push('<li><label><input type="radio" name="resolution" data-name="'+t(a.name)+'" data-unit="'+a.unit+'" data-scale="'+a.scale+'"'+o+"><span>"+t(a.name)+"</span></label></li>")})}),r||(o='<li><label><input type="radio" name="resolution" data-name="'+t("Custom")+" ("+e.configs.scale+", "+e.configs.unit+')" data-unit="'+e.configs.unit+'" data-scale="'+e.configs.scale+'" checked="checked"><span>'+t("Custom")+" ("+e.configs.scale+", "+e.configs.unit+")</span></label></li>",r=t("Custom")+" ("+e.configs.scale+", "+e.configs.unit+")"),a.push('<div class="overlay"></div>',"<h3>"+t("Design resolution")+"</h3>","<p>"+r+"</p>","<ul>",o,s.join(""),"</ul>"),$("#unit").html(a.join(""))},artboards:function(){var e=this,i=[],a=[],s={};return i.push('<ul class="artboard-list">'),$.each(this.project.artboards,function(t,a){s[a.pageObjectID]||(s[a.pageObjectID]={name:a.pageName,objectID:a.pageObjectID,count:0}),s[a.pageObjectID].count++;var o=e.artboardIndex!=t||a.fileName?"":" active",r=a.fileName?' data-file="'+a.fileName+'"':"",n=a.imageBase64?a.imageBase64:a.imagePath+"?"+timestamp;i.push('<li id="artboard-'+t+'"'+r+' class="artboard'+o+'" data-page-id="'+a.pageObjectID+'" data-id="'+a.objectID+'" data-index="'+t+'" >','<picture class="preview-img" data-name="'+a.name+'">','<img alt="'+a.name+'" src="'+openId+n+'">',"</picture>","<div>","<h3>"+a.name+"</h3>","<small>"+a.pageName+"</small>","</div>","</li>")}),i.push("</ul>"),a.push('<div class="pages-select" tabindex="0">'),a.push("<h3>"+t("All artboards")+" <em>("+this.project.artboards.length+")</em></h3>"),a.push('<ul class="page-list">'),a.push('<li><label><input type="radio" name="page" value="all" checked="checked"><span>'+t("All artboards")+" <em>("+this.project.artboards.length+")</em></span></label></li>"),$.each(s,function(e,t){a.push('<li><label><input type="radio" name="page" value="'+t.objectID+'"><span>'+t.name+" <em>("+t.count+")</em></span></label></li>")}),a.push("</ul>"),a.push("</div>"),$("#artboards").html([a.join(""),i.join("")].join("")),this},layers:function(){var e=this,t=[];$.each(this.current.layers,function(i,a){var s=e.zoomSize(a.rect.x),o=e.zoomSize(a.rect.y),r=e.zoomSize(a.rect.width),n=e.zoomSize(a.rect.height),l=["layer"];l.push("layer-"+a.objectID),e.selectedIndex==i&&l.push("selected"),t.push(['<div id="layer-'+i+'" class="'+l.join(" ")+'" data-index="'+i+'" percentage-width="'+e.percentageSize(a.rect.width,e.current.width)+'" percentage-height="'+e.percentageSize(a.rect.height,e.current.height)+'" data-width="'+e.unitSize(a.rect.width)+'" data-height="'+e.unitSize(a.rect.height)+'" style="left: '+s+"px; top: "+o+"px; width: "+r+"px; height: "+n+'px;">','<i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i>','<b class="et h"></b><b class="er v"></b><b class="eb h"></b><b class="el v"></b>',"</div>"].join(""))}),$("#layers").html(t.join(""))},slices:function(){if(!this.project.slices)return!1;var e=this,t=[];return t.push('<ul class="asset-list">'),$.each(this.project.slices,function(i,a){if(a.exportable.length>0){var s=JSON.parse(JSON.stringify(a.exportable)).pop();t.push('<li id="slice-'+a.objectID+'" class="slice-layer" data-objectId="'+a.objectID+'">','<picture><img src="'+openId+"assets/"+s.path+"?"+timestamp+'" alt=""></picture>',"<div>","<h3>"+a.name+"</h3>","<small>"+e.unitSize(a.rect.width)+" × "+e.unitSize(a.rect.height)+"</small>","</div>","</li>")}}),t.push("</ul>"),this.project.slices.length>0&&$("#slices").html(t.join("")),this},colors:function(e){if(!this.project.colors)return!1;var t=this,i=[];return this.project.colorNames={},i.push('<ul class="color-list">'),$.each(this.project.colors,function(e,a){t.project.colorNames[a.color["argb-hex"]]=a.name,i.push('<li id="color-'+e+'" data-color="'+encodeURI(JSON.stringify(a.color))+'">','<em><i style="background:'+a.color["css-rgba"]+'"></i></em>',"<div>","<h3>"+a.name+"</h3>","<small>"+a.color[t.configs.colorFormat]+"</small>","</div>","</li>")}),i.push("</ul>"),this.project.colors.length>0&&$("#colors").html(i.join("")),this},notes:function(){var e=this,t=[];$.each(this.current.notes,function(i,a){t.push('<div class="note" data-index="'+(i+1)+'" style="left: '+e.zoomSize(a.rect.x)+"px; top: "+e.zoomSize(a.rect.y)+'px;"><div style="white-space:nowrap;display:none;">'+a.note+"</div></div>")}),$("#notes").html(t.join(""))},getEdgeRect:function(e){var t=$("#screen").offset(),i=(e.pageX-t.left)/this.configs.zoom,a=(e.pageY-t.top)/this.configs.zoom,s=10,o=10,r=i>=0&&i<=this.current.width,n=a>=0&&a<=this.current.height;return i<=0&&a<=0?(i=-10,a=-10):i>=this.current.width&&a<=0?(i=this.current.width,a=-10):i>=this.current.width&&a>=this.current.height?(i=this.current.width,a=this.current.height):i<=0&&a>=this.current.height?(i=-10,a=this.current.height):a<=0&&r?(i=0,a=-10,s=this.current.width):i>=this.current.width&&n?(i=this.current.width,a=0,o=this.current.height):a>=this.current.height&&r?(i=0,a=this.current.height,s=this.current.width):i<=0&&n&&(i=-10,a=0,o=this.current.height),r&&n&&(i=0,a=0,s=this.current.width,o=this.current.height),{x:i,y:a,width:s,height:o,maxX:i+s,maxY:a+o}},distance:function(){if(this.selectedIndex&&this.targetIndex&&this.selectedIndex!=this.targetIndex||this.selectedIndex&&this.tempTargetRect){var e,t,i,a,s=this.getRect(this.selectedIndex),o=this.tempTargetRect||this.getRect(this.targetIndex),r=this.zoomSize(s.x+s.width/2),n=this.zoomSize(s.y+s.height/2);if(this.isIntersect(s,o)){var l=this.getDistance(s,o);0!=l.top&&(e={x:r,y:l.top>0?this.zoomSize(o.y):this.zoomSize(s.y),h:this.zoomSize(this.positive(l.top)),distance:this.unitSize(this.positive(l.top)),percentageDistance:this.percentageSize(this.positive(l.top),this.current.height)}),0!=l.right&&(t={x:l.right>0?this.zoomSize(s.maxX):this.zoomSize(o.maxX),y:n,w:this.zoomSize(this.positive(l.right)),distance:this.unitSize(this.positive(l.right)),percentageDistance:this.percentageSize(this.positive(l.right),this.current.width)}),0!=l.bottom&&(i={x:r,y:l.bottom>0?this.zoomSize(s.maxY):this.zoomSize(o.maxY),h:this.zoomSize(this.positive(l.bottom)),distance:this.unitSize(this.positive(l.bottom)),percentageDistance:this.percentageSize(this.positive(l.bottom),this.current.height)}),0!=l.left&&(a={x:l.left>0?this.zoomSize(o.x):this.zoomSize(s.x),y:n,w:this.zoomSize(this.positive(l.left)),distance:this.unitSize(this.positive(l.left)),percentageDistance:this.percentageSize(this.positive(l.left),this.current.width)})}else s.y>o.maxY&&(e={x:r,y:this.zoomSize(o.maxY),h:this.zoomSize(s.y-o.maxY),distance:this.unitSize(s.y-o.maxY),percentageDistance:this.percentageSize(s.y-o.maxY,this.current.height)}),s.maxX<o.x&&(t={x:this.zoomSize(s.maxX),y:n,w:this.zoomSize(o.x-s.maxX),distance:this.unitSize(o.x-s.maxX),percentageDistance:this.percentageSize(o.x-s.maxX,this.current.width)}),s.maxY<o.y&&(i={x:r,y:this.zoomSize(s.maxY),h:this.zoomSize(o.y-s.maxY),distance:this.unitSize(o.y-s.maxY),percentageDistance:this.percentageSize(o.y-s.maxY,this.current.height)}),s.x>o.maxX&&(a={x:this.zoomSize(o.maxX),y:n,w:this.zoomSize(s.x-o.maxX),distance:this.unitSize(s.x-o.maxX),percentageDistance:this.percentageSize(s.x-o.maxX,this.current.height)});e&&($("#td").css({left:e.x,top:e.y,height:e.h}).show(),$("#td div").attr("data-height",e.distance).attr("percentage-height",e.percentageDistance)),t&&($("#rd").css({left:t.x,top:t.y,width:t.w}).show(),$("#rd div").attr("data-width",t.distance).attr("percentage-width",t.percentageDistance)),i&&($("#bd").css({left:i.x,top:i.y,height:i.h}).show(),$("#bd div").attr("data-height",i.distance).attr("percentage-height",i.percentageDistance)),a&&($("#ld").css({left:a.x,top:a.y,width:a.w}).show(),$("#ld div").attr("data-width",a.distance).attr("percentage-width",a.percentageDistance)),$(".selected").addClass("hidden")}},inspector:function(){if(!this.selectedIndex||!this.current&&!this.current.layers&&!this.current.layers[this.selectedIndex])return!1;var e=this,i=this.current.layers[this.selectedIndex],a=[];a.push("<h2>"+i.name+"</h2>");var s=['<div class="item" data-label="'+t("Position")+':">','<label data-label="'+t("X")+'"><input id="position-x" type="text" value="'+this.unitSize(i.rect.x)+'" readonly="readonly"></label>','<label data-label="'+t("Y")+'"><input id="position-y" type="text" value="'+this.unitSize(i.rect.y)+'" readonly="readonly"></label>',"</div>"].join(""),o=['<div class="item" data-label="'+t("Size")+':">','<label data-label="'+t("Width")+'"><input id="size-width" type="text" value="'+this.unitSize(i.rect.width)+'" readonly="readonly"></label>','<label data-label="'+t("Height")+'"><input id="size-height" type="text" value="'+this.unitSize(i.rect.height)+'" readonly="readonly"></label>',"</div>"].join(""),r="number"==typeof i.opacity?['<div class="item" data-label="'+t("Opacity")+':">','<label><input id="opacity" type="text" value="'+Math.round(1e4*i.opacity)/100+'%" readonly="readonly"></label>',"<label></label>","</div>"].join(""):"",n=i.radius?['<div class="item" data-label="'+t("Radius")+':">','<label><input id="radius" type="text" value="'+this.unitSize(i.radius)+'" readonly="readonly"></label>',"<label></label>","</div>"].join(""):"",l=i.styleName?['<div class="item" data-label="'+t("Style")+':">','<label><input id="styleName" type="text" value="'+i.styleName+'" readonly="readonly"></label>',"</div>"].join(""):"";if(a.push(this.propertyType("PROPERTIES",[s,o,r,n,l].join(""))),i.fills&&i.fills.length>0){var c=[],d=$.extend(!0,[],i.fills);$.each(d.reverse(),function(i,a){c.push('<div class="item items-group" data-label="'+t(a.fillType.firstUpperCase())+':">'),"color"==a.fillType?c.push(e.colorItem(a.color)):(c.push('<div class="gradient">'),$.each(a.gradient.colorStops,function(t,i){c.push(e.colorItem(i.color))}),c.push("</div>")),c.push("</div>")}),a.push(this.propertyType("FILLS",c.join("")))}if("text"==i.type){var h=['<div class="item" data-label="'+t("Family")+':">','<label><input id="font-family" type="text" value="'+i.fontFace+'" readonly="readonly"></label>',"</div>"].join(""),u=['<div class="item" data-label="'+t("Color")+':">','<div class="color">',e.colorItem(i.color),"</div>","</div>"].join(""),p=i.fontSize?['<div class="item" data-label="'+t("Size")+':">','<label><input id="opacity" type="text" value="'+this.unitSize(i.fontSize,!0)+'" readonly="readonly"></label>',"<label></label>","</div>"].join(""):"",m=['<div class="item" data-label="'+t("Spacing")+':">','<label data-label="'+t("Character")+'"><input id="letter-spacing" type="text" value="'+this.unitSize(i.letterSpacing,!0)+'" readonly="readonly"></label>','<label data-label="'+t("Line")+'"><input id="line-height" type="text" value="'+this.unitSize(i.lineHeight,!0)+'" readonly="readonly"></label>',"</div>"].join(""),v=['<div class="item">','<label data-label="'+t("Content")+'"><textarea id="content" rows="2" readonly="readonly">'+i.content+"</textarea></label>","</div>"].join("");a.push(this.propertyType("TYPEFACE",[h,u,p,m,v].join("")))}if(i.borders&&i.borders.length>0){var g=[],f=$.extend(!0,[],i.borders);$.each(f.reverse(),function(i,a){g.push('<div class="items-group">',"<h4>"+t(a.position.firstUpperCase()+" Border")+"</h4>",'<div class="item" data-label="'+t("Weight")+':">','<label><input id="font-family" type="text" value="'+e.unitSize(a.thickness)+'" readonly="readonly"></label>',"<label></label>","</div>"),g.push('<div class="item" data-label="'+t(a.fillType.firstUpperCase())+':">'),"color"==a.fillType?g.push(e.colorItem(a.color)):(g.push('<div class="colors gradient">'),$.each(a.gradient.colorStops,function(t,i){g.push(e.colorItem(i.color))}),g.push("</div>")),g.push("</div>"),g.push("</div>")}),a.push(this.propertyType("BORDERS",g.join("")))}if(i.shadows&&i.shadows.length>0){var b=[],y=$.extend(!0,[],i.shadows);$.each(y.reverse(),function(i,a){b.push('<div class="items-group">',"<h4>"+t(a.type.firstUpperCase()+" Shadow")+"</h4>",'<div class="item" data-label="'+t("Offset")+':">','<label data-label="'+t("X")+'"><input id="offset-x" type="text" value="'+e.unitSize(a.offsetX)+'" readonly="readonly"></label>','<label data-label="'+t("Y")+'"><input id="offset-y" type="text" value="'+e.unitSize(a.offsetY)+'" readonly="readonly"></label>',"</div>",'<div class="item" data-label="'+t("Effect")+':">','<label data-label="'+t("Blur")+'"><input id="offset-x" type="text" value="'+e.unitSize(a.blurRadius)+'" readonly="readonly"></label>','<label data-label="'+t("Spread")+'"><input id="offset-y" type="text" value="'+e.unitSize(a.spread)+'" readonly="readonly"></label>',"</div>",'<div class="item" data-label="'+t("Color")+':">',e.colorItem(a.color),"</div>","</div>")}),a.push(this.propertyType("SHADOWS",b.join("")))}if(i.css&&i.css.length>0&&a.push(this.propertyType("CSS STYLE",['<div class="item">','<label><textarea id="css" rows="'+(i.css.length+1)+'" readonly="readonly">'+i.css.join("\r\n")+"</textarea></label>","</div>"].join(""))),i.exportable&&i.exportable.length>0){var x=[],z="assets/";x.push('<ul class="exportable">'),$.each(i.exportable,function(e,t){var i=z+t.path;console.log(i),x.push("<li>",'<a href="'+openId+i+'" download="'+t.path+'" data-format="'+t.format.toUpperCase()+'"><img src="'+openId+i+'" alt="'+t.path+'">'+t.path.replace("drawable-","")+"</a>","</li>")}),x.push("</ul>"),a.push(this.propertyType("EXPORTABLE",x.join("")))}$("#inspector").addClass("active").html(a.join(""))},propertyType:function(e,i){return["<section>","<h3>"+t(e)+"</h3>",'<div class="context">',i,"</div>","</section>"].join("")},colorItem:function(e){var t=this.project.colorNames?this.project.colorNames[e["argb-hex"]]:"";return t=t?' data-name="'+t+'"':"",['<div class="color"'+t+">",'<label><em><i style="background-color:'+e["css-rgba"]+';"></i></em></label><input data-color="'+encodeURI(JSON.stringify(e))+'" type="text" value="'+e[this.configs.colorFormat]+'" readonly="readonly">',"</div>"].join("")},changeColorFormat:function(){var e=this;$(".color input").each(function(){var t=$(this),i=JSON.parse(decodeURI(t.attr("data-color")));t.val(i[e.configs.colorFormat])}),this.colors()},selectedLayer:function(){return void 0!=this.selectedIndex&&($(".selected").removeClass("selected"),$("#layer-"+this.selectedIndex).addClass("selected"),void $("#rulers").hide())},removeSelected:function(){return!!this.selectedIndex&&($("#layer-"+this.selectedIndex).removeClass("selected"),void $("#rulers").hide())},mouseoverLayer:function(){if(this.targetIndex&&this.selectedIndex==this.targetIndex)return!1;var e=$("#layer-"+this.targetIndex);e.addClass("hover"),$("#rv").css({left:e.position().left,width:e.outerWidth()}),$("#rh").css({top:e.position().top,height:e.outerHeight()}),$("#rulers").show()},mouseoutLayer:function(){$(".hover").removeClass("hover"),$("#rulers").hide()},hideDistance:function(){$("#td").hide(),$("#rd").hide(),$("#bd").hide(),$("#ld").hide(),$(".selected").removeClass("hidden")},zoomRender:function(){var e=this;this.targetIndex=void 0,$("#rulers").hide(),this.hideDistance(),this.zoom(),this.screen(),$("#layers, #notes").html(""),setTimeout(function(){e.layers(),e.notes()},150)},events:function(){var i=this;$("body").on({click:function(e){if(!$(".screen-viewer").hasClass("moving-screen"))if($(e.target).hasClass("layer")||$(e.target).hasClass("slice-layer")){var t=$(e.target).hasClass("slice-layer")?$(".layer-"+$(e.target).attr("data-objectid")).first():e.target;i.selectedIndex=i.getIndex(t),i.hideDistance(),i.mouseoutLayer(),i.selectedLayer(),i.inspector()}else i.removeSelected(),i.hideDistance(),$("#inspector").removeClass("active"),i.selectedIndex=void 0,i.tempTargetRect=void 0},mousemove:function(e){$(".screen-viewer").hasClass("moving-screen")||(i.mouseoutLayer(),i.hideDistance(),$(e.target).hasClass("screen-viewer")||$(e.target).hasClass("screen-viewer-inner")?(i.tempTargetRect=i.getEdgeRect(e),i.targetIndex=void 0,i.distance()):$(e.target).hasClass("layer")?(i.targetIndex=i.getIndex(e.target),i.tempTargetRect=void 0,i.mouseoverLayer(),i.distance()):i.tempTargetRect=void 0)}}).on("click","header, #inspector, .navbar",function(e){e.stopPropagation()}).on("dragstart",".exportable img",function(e){var t=$(this),i=t.offset();t.css({width:"auto",height:"auto"});var a=e.originalEvent.pageX-i.left-t.width()/2,s=e.originalEvent.pageY-i.top-t.height()/2;t.css({left:a,top:s})}).on("dragend",".exportable img",function(e){var t=$(this);t.css({left:0,top:0,width:"100%",height:"100%"})}),$("#zoom").on("click",".zoom-in:not(disabled)",function(e){i.configs.zoom-=.25,i.zoomRender(),e.stopPropagation()}).on("click",".zoom-out:not(disabled)",function(e){i.configs.zoom+=.25,i.zoomRender(),e.stopPropagation()}),$(e).keydown(function(e){return!e.ctrlKey&&!e.metaKey||187!=e.which&&189!=e.which&&48!=e.which?void(32==e.which?($("#cursor").show(),$(".screen-viewer").addClass("moving-screen"),i.mouseoutLayer(),i.hideDistance(),e.preventDefault()):18==e.which&&$("#screen").addClass("percentage-mode")):(187==e.which&&i.configs.zoom<4?$(".zoom-out").click():189==e.which&&i.configs.zoom>.25?$(".zoom-in").click():48==e.which&&(i.maxSize=void 0,i.configs.zoom=1,i.zoomRender()),e.preventDefault(),!1)}).keyup(function(e){32==e.which?($("#cursor").hide(),$(".screen-viewer").removeClass("moving-screen"),$("#cursor").removeClass("moving"),e.preventDefault()):18==e.which&&($("#screen").removeClass("percentage-mode"),e.preventDefault())}).mousemove(function(e){$("#cursor").css({left:e.clientX,top:e.clientY});$(e.target);$(".screen-viewer").hasClass("moving-screen")&&$("#cursor").hasClass("moving")&&($(".screen-viewer").scrollLeft(i.moveData.x-e.clientX+i.moveData.scrollLeft),$(".screen-viewer").scrollTop(i.moveData.y-e.clientY+i.moveData.scrollTop),e.preventDefault())}).mousedown(function(e){var t=$(e.target);$(".screen-viewer").hasClass("moving-screen")&&(t.hasClass("cursor")||t.hasClass("overlay"))&&(i.moveData={x:e.clientX,y:e.clientY,scrollLeft:$(".screen-viewer").scrollLeft(),scrollTop:$(".screen-viewer").scrollTop()},$("#cursor").addClass("moving"),e.preventDefault())}).mouseup(function(e){$(e.target);$(".screen-viewer").hasClass("moving-screen")&&($("#cursor").removeClass("moving"),e.preventDefault())}),$("#unit").on("change","input[name=resolution]",function(){var e=$("input[name=resolution]:checked");i.configs.unit=e.attr("data-unit"),i.configs.scale=Number(e.attr("data-scale")),i.targetID=void 0,i.layers(),i.inspector(),$("#unit").blur().find("p").text(e.attr("data-name")),i.slices()}).on("click","h3, .overlay",function(){$("#unit").blur()}),$("#inspector").on("click","input, textarea",function(){$(this).select()}),$("#show-notes").change(function(){this.checked?$("#notes").fadeIn("fast"):$("#notes").fadeOut("fast")}),$("#artboards").on("click",".artboard",function(e){i.artboardIndex!=i.getIndex(this)&&(i.maxSize=void 0,i.artboardIndex=i.getIndex(this),i.selectedIndex=void 0,i.current=i.project.artboards[i.artboardIndex],i.hideDistance(),i.screen(),i.layers(),i.notes(),$(".active").removeClass("active"),$(this).addClass("active"),i.locationHash({artboard:i.artboardIndex}))}).on("click",".pages-select",function(e){e.stopPropagation()}).on("change","input[name=page]",function(e){var t=$(".page-list input[name=page]:checked").val();$(".pages-select h3").html($(this).parent().find("span").html()),$(".artboard-list li").show(),"all"!=t&&$(".artboard-list li").each(function(){var e=$(this).attr("data-page-id");t!=e&&$(this).hide()}),$(".pages-select").blur(),e.stopPropagation()}),$("#slices").on("mouseover","li",function(){var e=$(this).attr("data-objectid");$(".layer-"+e).addClass("has-slice")}).on("mouseout","li",function(){$(".has-slice").removeClass("has-slice")}).on("click","li",function(){var e=$(this).attr("data-objectid");if($(".layer-"+e).length>0){var a=$(".layer-"+e).offset(),s={left:$(".screen-viewer").scrollLeft(),top:$(".screen-viewer").scrollTop()},o={width:$(".layer-"+e).outerWidth(),height:$(".layer-"+e).outerHeight()},r={width:$(".screen-viewer").outerWidth(),height:$(".screen-viewer").outerHeight()};$(".screen-viewer").animate({scrollLeft:a.left+s.left-(r.width-o.width)/2,scrollTop:a.top+s.top-60-(r.height-o.height)/2},150),$(".layer-"+e).click()}else i.message(t("The slice not in current artboard."))}),$("#inspector").on("click",".color label",function(){i.configs.colorFormat="color-hex"==i.configs.colorFormat?"argb-hex":"argb-hex"==i.configs.colorFormat?"css-rgba":"css-rgba"==i.configs.colorFormat?"ui-color":"color-hex",i.changeColorFormat()}),$(".tab").on("click","li",function(){var e=$(this),t=e.attr("data-id");e.hasClass("current")?($(".current").removeClass("current"),$(".navbar").removeClass("on")):($(".current").removeClass("current"),$(".navbar section").hide(),e.addClass("current"),$("#"+t).show(),$(".navbar").addClass("on"))}),$("#notes").on("mousemove",".note",function(e){e.stopPropagation(),i.mouseoutLayer(),i.hideDistance(),$(this).find("div").show();var t=$(this).find("div").outerWidth();t>160&&$(this).find("div").css({width:160,"white-space":"normal"})}).on("mouseout",".note",function(){$(this).find("div").hide()})}};var a=i.fn.init=function(e){var t=this.locationHash();this.project=e,this.configs={scale:this.project.scale,unit:this.project.unit,colorFormat:this.project.colorFormat},this.artboardIndex=isNaN(t.artboard)?0:t.artboard,this.current=this.project.artboards[this.artboardIndex];var i=$(document).height()/this.current.height;return i>=.8?this.configs.zoom=1:i>=.7?this.configs.zoom=.75:this.configs.zoom=.5,this.render(),isNaN(t.artboard)||($(".current").removeClass("current"),$(".navbar").removeClass("on")),this.current.imageBase64&&($(".tab").remove(),$(".navbar").remove()),this};a.prototype=i.fn,e.SMApp=i}(window);