function loadjson(e){var o=new FileReader;o.onload=function(o){modelLoader.modelName=e.name,modelLoader.json=o.target.result,document.getElementById("models").innerHTML="<tr><td>"+e.name+"</td></tr>"},o.readAsText(e),document.getElementById("loadmodel").value=""}function openModal(){modelLoader={modelName:"",json:"",textures:[]},document.getElementById("models").innerHTML="",document.getElementById("loadmodel").value="",document.getElementById("modaltitle").innerHTML="Load model",document.querySelector(".overlay").setAttribute("style","display: block;")}function loadthing(){try{var e=new JsonModel("demo",modelLoader.json,modelLoader.textures);try{viewer.remove("demo")}catch(e){console.log(e.message)}model=e,viewer.load(model),document.getElementById("displayOption").value="block",document.querySelector(".overlay").setAttribute("style","display: none;")}catch(e){window.alert("Error: "+e.message),console.log(e.message)}}document.getElementById("modal").addEventListener("click",function(e){e.stopPropagation()});var modelLoader={modelName:"",json:"",textures:[]};