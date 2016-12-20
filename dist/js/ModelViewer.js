function ModelViewer(e){this.container=e,this.element=document.createElement("div"),this.element.setAttribute("class","block-viewer"),this.container.appendChild(this.element);var r=this.element.getBoundingClientRect();this.camera=new THREE.PerspectiveCamera(60,r.width/r.height,1,1e3),this.camera.position.x=16,this.camera.position.y=16,this.camera.position.z=32,this.scene=new THREE.Scene;var t;t=new THREE.AmbientLight(16777215,.97),this.scene.add(t),t=new THREE.DirectionalLight(16777215,.1),t.position.set(4,10,6),this.scene.add(t),this.renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setSize(r.width,r.height),this.controls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.2,this.controls.zoomSpeed=1.4,this.controls.rotateSpeed=.6,this.controls.enableKeys=!1,this.element.appendChild(this.renderer.domElement);var o=this;this.draw=function(){o.renderer.render(o.scene,o.camera)},this.animate=function(){window.requestAnimationFrame(o.animate),o.controls.update(),o.draw()},this.resize=function(){var e=o.element.getBoundingClientRect();o.camera.aspect=e.width/e.height,o.camera.updateProjectionMatrix(),o.renderer.setSize(e.width,e.height)},this.models={};var o=this;this.load=function(e){var r=e.modelName;if(Object.keys(o.models).indexOf(r)>=0)throw new Error('Model "'+r+'" is already loaded.');return o.scene.add(e),o.models[r]=e,o},this.get=function(e){if(!(Object.keys(o.models).indexOf(e)>=0))throw new Error('Model "'+e+'" is not loaded.');return o.models[e]},this.getAll=function(){return Object.keys(o.models).map(function(e){return o.models[e]})},this.remove=function(e){if(!(Object.keys(o.models).indexOf(e)>=0))throw new Error('Model "'+e+'" is not loaded.');delete o.models[e];for(var r=0;r<o.scene.children.length;r++){var t=o.scene.children[r];if(t instanceof JsonModel&&t.modelName==e){t.animationLoop=!1,o.scene.remove(t);break}}return o},this.removeAll=function(){for(var e=o.scene.children.length-1;e>=0;e--){var r=o.scene.children[e];r instanceof JsonModel&&(r.animationLoop=!1,o.scene.remove(r))}return o.models={},o},this.hide=function(e){if(!(Object.keys(o.models).indexOf(e)>=0))throw new Error('Model "'+e+'" is not loaded.');o.models[e].visible=!1,o.draw()},this.hideAll=function(){return Object.keys(o.models).forEach(function(e){o.models[e].visible=!1}),o},this.show=function(e){if(!(Object.keys(o.models).indexOf(e)>=0))throw new Error('Model "'+e+'" is not loaded.');o.models[e].visible=!0,o.draw()},this.showAll=function(){return Object.keys(o.models).forEach(function(e){o.models[e].visible=!0}),o},this.reset=function(){o.controls.reset()},this.lookAt=function(e){var r=o.get(e);o.controls.target=r.getCenter()};for(var n=new THREE.Geometry,i=new THREE.LineBasicMaterial({color:11513775}),a=-8;a<=8;a++)n.vertices.push(new THREE.Vector3((-8),(-8),a)),n.vertices.push(new THREE.Vector3(8,(-8),a)),n.vertices.push(new THREE.Vector3(a,(-8),(-8))),n.vertices.push(new THREE.Vector3(a,(-8),8));n.vertices.push(new THREE.Vector3((-1),(-8),9)),n.vertices.push(new THREE.Vector3(1,(-8),9)),n.vertices.push(new THREE.Vector3(1,(-8),9)),n.vertices.push(new THREE.Vector3(0,(-8),10)),n.vertices.push(new THREE.Vector3(0,(-8),10)),n.vertices.push(new THREE.Vector3((-1),(-8),9));var s=new THREE.LineSegments(n,i);s.visible=!0,this.scene.add(s),this.grid=s;var o=this;this.showGrid=function(){o.grid.visible=!0},this.hideGrid=function(){o.grid.visible=!1},this.setGridColor=function(e){o.grid.material.color=new THREE.Color(e)},this.animate()}function JsonModel(e,r,t){void 0===t&&(t=!0),THREE.Object3D.call(this),this.modelName=e,this.animationLoop=!0;try{var o=JSON.parse(r)}catch(e){throw new Error("Couldn't parse json model. "+e.message+".")}var n=[],i=[],a=[];if(!o.hasOwnProperty("textures"))throw new Error('Couldn\'t find "textures" property.');Object.keys(o.textures).forEach(function(e,r){for(var t,s=o.textures[e].split("/"),h=s[s.length-1],l=0;l<textures.length;l++)if(t=textures[l],t.name==h){console.log(h);break}if(t.name!=h)throw new Error("Couldn't find matching texture for texture reference \""+h+'".');if(n.push(e),t.hasOwnProperty("mcmeta")){try{var f=JSON.parse(t.mcmeta)}catch(e){throw new Error("Couldn't parse mcmeta for texture \""+h+'". '+e.message+".")}if(!f.hasOwnProperty("animation"))throw new Error('Couldn\'t find the "animation" property in mcmeta for texture "'+h+'"');var c=new Image;c.src=t.texture;var d=c.width,m=c.height;if(m%d!=0)throw new Error('Image dimensions are invalid for texture "'+h+'".');var p=[];if(f.animation.hasOwnProperty("frames"))p=f.animation.frames;else for(var u=0;u<m/d;u++)p.push(u);for(var w=f.animation.frametime||1,E=[],l=0;l<p.length;l++)if(frame=p[l],"number"==typeof frame)E.push({index:frame,time:w});else{if(!frame.hasOwnProperty("index"))throw new Error('Invalid animation frame at index "'+l+'" in mcmeta for texture "'+h+'".');E.push({index:frame.index,time:frame.time||w})}var v=m/d;a.push({height:v,frames:E,currentFrame:0}),i.push(n.length-1);for(var y=[],l=0;l<m/d;l++){var x=document.createElement("canvas");x.width=d,x.height=d;var g=x.getContext("2d");g.drawImage(c,0,-l*d),y.push(x.toDataURL("image/png"))}textures[e]=y}else textures[e]=t.texture});var s=this,h=[];n.forEach(function(e,r){var t=textures[e]instanceof Array?textures[e][0]:textures[e],o=new THREE.TextureLoader,n=o.load(t);n.magFilter=THREE.NearestFilter,n.minFilter=THREE.LinearFilter;var l=new THREE.MeshLambertMaterial({map:n,transparent:!0,alphaTest:.5});if(h.push(l),textures[e]instanceof Array){var f=textures[e],c=a[i.indexOf(r)];!function(e,r,t){var o=function(){var n=t.frames[t.currentFrame];try{e.map.image.src=r[n.index],t.currentFrame=t.currentFrame<t.frames.length-1?t.currentFrame+1:0}catch(e){console.log(e.message)}window.setTimeout(function(){s.animationLoop&&window.requestAnimationFrame(o)},50*n.time)};window.requestAnimationFrame(o)}(l,f,c)}});var l=new THREE.MeshBasicMaterial({transparent:!0,opacity:0,alphaTest:.5});h.push(l);var f,c=new THREE.MeshFaceMaterial(h);f=o.hasOwnProperty("elements")?o.elements:[{from:[0,0,0],to:[16,16,16],faces:{down:{texture:"#down",cullface:"down"},up:{texture:"#up",cullface:"up"},north:{texture:"#north",cullface:"north"},south:{texture:"#south",cullface:"south"},west:{texture:"#west",cullface:"west"},east:{texture:"#east",cullface:"east"}}}];var d=new THREE.Group;f.forEach(function(e,r){if(!e.hasOwnProperty("from"))throw new Error('Couldn\'t find "from" property for element "'+r+'".');if(3!=e.from.length)throw new Error('"from" property for element "'+r+'" is invalid.');if(!e.hasOwnProperty("to"))throw new Error('Couldn\'t find "to" property for element "'+r+'".');if(3!=e.to.length)throw new Error('"to" property for element "'+r+'" is invalid.');for(var o=0;o<3;o++){var i=e.from[o],a=e.to[o];if("number"!=typeof i||i<-16)throw new Error('"from" property for element "'+r+'" is invalid (got "'+i+'" for coordinate "'+["x","y","z"][o]+'").');if("number"!=typeof a||a>32)throw new Error('"to" property for element "'+r+'" is invalid (got "'+a+'" for coordinate "'+["x","y","z"][o]+'").');if(a-i<0)throw new Error('"from" property is bigger than "to" property for coordinate "'+["x","y","z"][o]+'" in element "'+r+'".')}var s=e.to[0]-e.from[0],h=e.to[1]-e.from[1],l=e.to[2]-e.from[2],f={x:(e.to[0]+e.from[0])/2-8,y:(e.to[1]+e.from[1])/2-8,z:(e.to[2]+e.from[2])/2-8},m=.001,p=new THREE.BoxGeometry(s+m,h+m,l+m);if(p.faceVertexUvs[0]=[],e.hasOwnProperty("faces"))for(var u=["east","west","up","down","south","north"],o=0;o<6;o++){var w=u[o];if(e.faces.hasOwnProperty(w)){if(!e.faces[w].hasOwnProperty("texture"))throw new Error('Couldn\'t find "texture" property for "'+w+'" face in element "'+r+'".');if(!e.faces[w].hasOwnProperty("uv"))throw new Error('Couldn\'t find "uv" property for "'+w+'" face in element "'+r+'".');if(4!=e.faces[w].uv.length)throw new Error('The "uv" property for "'+w+'" face in element "'+r+'" is invalid (got "'+e.faces[w].uv+'").');var E=e.faces[w].texture,v=n.indexOf("#"==E[0]?E.substring(1):E);if(v<0)throw new Error('The "texture" property for "'+w+'" face in element "'+r+'" is invalid (got "'+E+'").');p.faces[2*o].materialIndex=v,p.faces[2*o+1].materialIndex=v;var y=e.faces[w].uv;t?(y.forEach(function(e,t){if("number"!=typeof e)throw new Error('The "uv" property for "'+w+'" face in element "'+r+'" is invalid (got "'+e+'" at index "'+t+'").')}),y.map(function(e){return e+1e-5<0?0:e-1e-5>16?16:e})):y.forEach(function(e,t){if("number"!=typeof e||e+1e-5<0||e-1e-5>16)throw new Error('The "uv" property for "'+w+'" face in element "'+r+'" is invalid (got "'+e+'" at index "'+t+'").')}),y=y.map(function(e){return e/16}),y[0]+=5e-4,y[1]+=5e-4,y[2]-=5e-4,y[3]-=5e-4;var x=[new THREE.Vector2(y[0],1-y[1]),new THREE.Vector2(y[0],1-y[3]),new THREE.Vector2(y[2],1-y[3]),new THREE.Vector2(y[2],1-y[1])];if(e.faces[w].hasOwnProperty("rotation")){var g=e.faces[w].rotation;if(!([0,90,180,270].indexOf(g)>=0))throw new Error('The "rotation" property for "'+w+'" face in element "'+r+'" is invalid (got "'+g+'").');for(var O=0;O<g/90;O++)x=[x[1],x[2],x[3],x[0]]}p.faceVertexUvs[0][2*o]=[x[0],x[1],x[3]],p.faceVertexUvs[0][2*o+1]=[x[1],x[2],x[3]]}else{p.faces[2*o].materialIndex=n.length,p.faces[2*o+1].materialIndex=n.length;var x=[new THREE.Vector2(0,0),new THREE.Vector2(1,0),new THREE.Vector2(1,1),new THREE.Vector2(0,1)];p.faceVertexUvs[0][2*o]=[x[0],x[1],x[3]],p.faceVertexUvs[0][2*o+1]=[x[1],x[2],x[3]]}}var T=new THREE.Mesh(p,c);if(T.position.x=f.x,T.position.y=f.y,T.position.z=f.z,e.hasOwnProperty("rotation")){if(!e.rotation.hasOwnProperty("origin"))throw new Error('Couldn\'t find "origin" property in "rotation" for element "'+r+'".');if(3!=e.rotation.origin.length)throw new Error('"origin" property in "rotation" for element "'+r+'" is invalid.');if(!e.rotation.hasOwnProperty("axis"))throw new Error('Couldn\'t find "axis" property in "rotation" for element "'+r+'".');if(!(["x","y","z"].indexOf(e.rotation.axis)>=0))throw new Error('"axis" property in "rotation" for element "'+r+'" is invalid.');if(!e.rotation.hasOwnProperty("angle"))throw new Error('Couldn\'t find "angle" property in "rotation" for element "'+r+'".');if(!([45,22.5,0,-22.5,-45].indexOf(e.rotation.angle)>=0))throw new Error('"angle" property in "rotation" for element "'+r+'" is invalid.');var R={x:e.rotation.origin[0]-8,y:e.rotation.origin[1]-8,z:e.rotation.origin[2]-8},H=e.rotation.axis,b=e.rotation.angle,z=new THREE.Group;z.position.x=R.x,z.position.y=R.y,z.position.z=R.z,z.add(T),T.position.x-=R.x,T.position.y-=R.y,T.position.z-=R.z,"x"==H?z.rotateX(b*Math.PI/180):"y"==H?z.rotateY(b*Math.PI/180):"z"==H&&z.rotateZ(b*Math.PI/180),d.add(z)}else{var z=new THREE.Group;z.add(T),d.add(z)}}),this.add(d);var m=["thirdperson_righthand","thirdperson_lefthand","firstperson_righthand","firstperson_lefthand","gui","head","ground","fixed"];this.displayOptions={};for(var p=0;p<m.length;p++)this.displayOptions[m[p]]={rotation:[0,0,0],translation:[0,0,0],scale:[1,1,1]};if(this.displayOptions.firstperson=this.displayOptions.firstperson_righthand,this.displayOptions.thirdperson=this.displayOptions.thirdperson_righthand,o.hasOwnProperty("display")){var u=o.display;for(var w in u)if(this.displayOptions.hasOwnProperty(w)){var E=u[w];for(var e in E)if(this.displayOptions[w].hasOwnProperty(e)){var v=E[e];if(3!=v.length||"number"!=typeof v[0]||"number"!=typeof v[1]||"number"!=typeof v[2])throw new Error('"'+e+'" property is invalid for display option "'+w+'".');this.displayOptions[w][e]=v}}}var s=this;this.getCenter=function(){for(var e=s.children[0],r={minx:0,miny:0,minz:0,maxx:0,maxy:0,maxz:0},t=0;t<e.children.length;t++)for(var o=e.children[t],n=o.children[0],i=0;i<n.geometry.vertices.length;i++){var a=n.geometry.vertices[i].clone(),h=n.localToWorld(a);h.x<r.minx&&(r.minx=h.x),h.y<r.miny&&(r.miny=h.y),h.z<r.minz&&(r.minz=h.z),h.x>r.maxx&&(r.maxx=h.x),h.y>r.maxy&&(r.maxy=h.y),h.z>r.maxz&&(r.maxz=h.z)}return new THREE.Vector3((r.minx+r.maxx)/2,(r.miny+r.maxy)/2,(r.minz+r.maxz)/2)},this.applyDisplay=function(e){var r=s.children[0];if("block"==e)r.rotation.set(0,0,0),r.position.set(0,0,0),r.scale.set(1,1,1);else{if(!s.displayOptions.hasOwnProperty(e))throw new Error("Display option is invalid.");var t=s.displayOptions[e],o=t.rotation,n=t.translation,i=t.scale;r.rotation.set(o[0]*Math.PI/180,o[1]*Math.PI/180,o[2]*Math.PI/180),r.position.set(n[0],n[1],n[2]),r.scale.set(0==i[0]?1e-5:i[0],0==i[1]?1e-5:i[1],0==i[2]?1e-5:i[2])}}}JsonModel.prototype=Object.create(THREE.Object3D.prototype),JsonModel.prototype.constructor=JsonModel;