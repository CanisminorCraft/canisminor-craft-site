$(function () {
    var uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4',
        browse_button: 'pickfiles',
        container: 'container',
        drop_element: 'container',
        max_file_size: '1000mb',
        chunk_size: '4mb',
        flash_swf_url: 'http://cdn.bootcss.com/plupload/2.1.1/Moxie.swf',
        dragdrop: true,
        unique_names: false,
        save_key: false,
        multi_selection: !(mOxie.Env.OS.toLowerCase() === "ios"),
        uptoken_url: 'http://fanshu.xiongmaojinku.com/uptoken',
        domain: 'https://o4j4l4n7h.qnssl.com/',
        get_new_uptoken: false,
        auto_start: true,
        log_level: 0,
        init: {
            'FilesAdded': function (up, files) {
                $('table').show();
                $('#success').hide();
                plupload.each(files, function (file) {
                    var progress = new FileProgress(file, 'fsUploadProgress');
                    progress.setStatus("等待...");
                    progress.bindUploadCancel(up);
                });
            },
            'BeforeUpload': function (up, file) {
                var progress = new FileProgress(file, 'fsUploadProgress');
                var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
                if (up.runtime === 'html5' && chunk_size) {
                    progress.setChunkProgess(chunk_size);
                }
            },
            'UploadProgress': function (up, file) {
                var progress = new FileProgress(file, 'fsUploadProgress');
                var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
                progress.setProgress(file.percent + "%", file.speed, chunk_size);
            },
            'UploadComplete': function () {
                $('#success').show();
            },
            'FileUploaded': function (up, file, info) {
                var progress = new FileProgress(file, 'fsUploadProgress');
                progress.setComplete(up, info);
            },
            'Error': function (up, err, errTip) {
                $('table').show();
                var progress = new FileProgress(err.file, 'fsUploadProgress');
                progress.setError();
                progress.setStatus(errTip);
            },
            'Key': function (up, file) {
                var key = now() + file.name;
                return key
            }
        }
    });
});

function now() {
    var nowDATA = new Date(),
        year = nowDATA.getFullYear(),
        month = nowDATA.getMonth() + 1,
        day = nowDATA.getDate(),
        hour = nowDATA.getHours(),
        minute = nowDATA.getMinutes(),
        second = nowDATA.getSeconds()
    var now = year + "" + month + "" + day + "-" + hour + "" + minute + "" + second + "-";
    return now;
}