function convertImgToBase64(e,t,n){var o=document.createElement("CANVAS"),a=o.getContext("2d"),c=new Image;c.crossOrigin="Anonymous",c.onload=function(){o.height=c.height,o.width=c.width,a.drawImage(c,0,0);var e=o.toDataURL(n||"image/png");t.call(this,e),o=null},c.src=e}$(function(){$("#select-week").change(function(){var e,t=$(this).children("option:selected").val();switch(t){case"1":$("#pop-content").removeClass("pop-right"),$("#pop-content").addClass("pop-left"),e="1";break;case"2":$("#pop-content").removeClass("pop-left"),$("#pop-content").addClass("pop-right"),e="2"}}),$("#tag-title").bind("input propertychange",function(){$("#tag").html($(this).val())}),$("#title").bind("input propertychange",function(){$("#cover-content").html($(this).val())})}),$("#cover-upload").change(function(e){$(".group").show();var t=document.getElementById("cover-upload"),n=window.URL.createObjectURL(t.files[0]);convertImgToBase64(n,function(e){$("#cover-bg").css("background-image","url("+e+")")}),e.preventDefault()});