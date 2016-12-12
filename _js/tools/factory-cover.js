var default_color = [
    "ff5b62", "ff6c3d", "ff983d", "ffbc1c", "95ce5d", "5dce89", "5dceba",
    "88d5ec", "88b7ec", "5090b5", "5068b5", "9360be", "be60b1", "c84973"
];
$('#color-bg').colorPicker({
    colors: default_color
});
$('#color-tag').colorPicker({
    colors: default_color
});
$(function () {
    $('#select-week').change(function () {
        var day = $(this).children('option:selected').val();
        var emo;
        switch (day) {
            case '1':
                $('#tag-title').val('二发涨姿势');
                $('#color-bg').val('#BE60B1');
                $('#color-tag').val('#5DCE89');

                emo = '1';
                break;
            case '2':
                $('#tag-title').val('二发带你飞');
                $('#color-bg').val('#88d5ec');
                $('#color-bg').change;
                $('#color-tag').val('#ffbc1c');

                emo = '2';
                break;
            case '3':
                $('#tag-title').val('二发说个事');
                $('#color-bg').val('#FFBC1C');
                $('#color-tag').val('#FF6C3D');

                emo = '3';
                break;
            case '4':
                $('#tag-title').val('二发扯着淡');
                $('#color-bg').val('#FF5B62');
                $('#color-tag').val('#5090B5');

                emo = '4';
                break;
            case '5':
                $('#tag-title').val('二发说');
                $('#color-bg').val('#ff6c3d');
                $('#color-tag').val('#ffbc1c');

                emo = '1';
                break;
        }
        $('#color-bg').change();
        $('#color-tag').change();
        $('#tag-title').change();
        $('#tag').html($('#tag-title').val());
        $('#cover-bg').css("background-image", 'url(/img/tools/emo/' + emo + '.png)');
        $('#cover').css("background-color", $('#color-bg').val());
        $('#cover-content').css("background-color", $('#color-bg').val());
        $('#tag').css("background-color", $('#color-tag').val());
    });
    //初始
    $('#select-week').change();
    $('#cover').css("background-color", $('#color-bg').val());
    $('#cover-content').css("background-color", $('#color-bg').val());
    $('#tag').css("background-color", $('#color-tag').val());
    //变色
    $('.colorPicker-swatch').click(function () {
        $('#cover').css("background-color", $('#color-bg').val());
        $('#cover-content').css("background", $('#color-bg').val());
        $('#tag').css("background-color", $('#color-tag').val());
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
            .css("background-size", 'auto' + ' ' + '400px');
    });
    event.preventDefault();
});