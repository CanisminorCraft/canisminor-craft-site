$(function () {
    $('#select-week').change(function () {
        var day = $(this).children('option:selected').val();
        var emo;
        switch (day) {
            case '1':
                $("#pop-content").removeClass("pop-right");
                $("#pop-content").addClass("pop-left");
                emo = '1';
                break;
            case '2':
                $("#pop-content").removeClass("pop-left");
                $("#pop-content").addClass("pop-right");

                emo = '2';
                break;
        }

    });

    //变文字
    $('#tag-title').bind('input propertychange', function () {
        $('#tag').html($(this).val());
    });
    $('#title').bind('input propertychange', function () {
        $('#cover-content').html($(this).val());
    });
});

function convertImgToBase64(url, callback, outputFormat) {
    var canvas = document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');
    var img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL);
        // Clean up
        canvas = null;
    };
    img.src = url;
}

$('#cover-upload').change(function (event) {
    $('.group').show();
    var docObj = document.getElementById("cover-upload");
    var imageUrl = window.URL.createObjectURL(docObj.files[0]);
    convertImgToBase64(imageUrl, function (base64Img) {
        $('#cover-bg')
            .css("background-image", 'url(' + base64Img + ')')
    });
    event.preventDefault();
});