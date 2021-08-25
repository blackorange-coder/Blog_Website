window.addEventListener('load', function() {
    initEditor(); //初始化富文本编辑器
    var btn = document.querySelector('button');
    var inputTitle = document.querySelector('.inputTitle');
    var inputDatext = document.querySelector('.inputDate');


    // var t = text.innerHTML;
    // console.log(t);
    btn.addEventListener('click', function() {
        // localStorage.removeItem('text');
        var title = inputTitle.value;
        var date = inputDatext.value
        var texts = tinyMCE.activeEditor.getContent();
        // localStorage.setItem('text', tinyMCE.activeEditor.getContent());
        if (!title) {
            alert("标题不能为空！！");
        } else {
            $.ajax({
                method: 'POST',
                url: '/my/commit/article',
                data: {
                    title,
                    date,
                    content: texts,
                },
                headers: {
                    Authorization: localStorage.getItem('token') || '',
                },
                success: function(res) {
                    console.log(res);
                }
            })
        }
    })


})