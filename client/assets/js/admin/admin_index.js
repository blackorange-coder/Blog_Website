window.addEventListener('load', function() {

    var lns = document.querySelectorAll('.left-nav-son');
    // var iconColLefts = document.querySelectorAll('.icon-col-left');
    for (var i = 0; i < lns.length; i++) {
        var a = lns[i].querySelector('a');
        //初始化ul的样式
        if (a.nextElementSibling !== null) {
            a.nextElementSibling.style.display = 'none';
            // a.nextElementSibling.style.display = 'block';

        }
        a.addEventListener('click', function() {
            //点击时循环全部left-nav-son元素，先让全部ul隐藏 调用自定义的initList函数，
            //再向下执行，实现之展开一个ul的效果
            var that = this.nextElementSibling; //a的下一个元素是ul
            var iconColLeft = this.childNodes[2]; //获取到a中的第三个子元素 箭头图标
            // console.log(this.childNodes[2]);
            if (that !== null && that.style.display === 'none') {
                initList();
                that.style.display = 'block';
                iconColLeft.className = 'iconfont icon-col-left icon-col-left-click';
            } else if (that !== null && that.style.display === 'block') {
                initList();
                that.style.display = 'none';
                iconColLeft.className = 'iconfont icon-col-left';
            }

        })
    }

    // 列表初始化函数
    function initList() {
        var iconColLefts = document.querySelectorAll('.icon-col-left');
        var arr = []; //定义到循环外面
        for (var j = 0; j < lns.length; j++) {
            var ul = lns[j].querySelector('.son');
            // console.log(iconColLefts);
            if (ul === null) {
                // console.log('is null');
                var temp;
                temp = j;
                // console.log(temp);//0 3
                // iconColLefts[temp].className = 'iconfont icon-col-left';
            } else {
                ul.style.display = 'none';
                // console.log(j);
                // console.log(j - 1); //0 1 3
                //通过循环向数组中添加符合条件的j的值，创建了数组
                //
                arr.push(j);
                // console.log(iconColLefts[3]); //0 1 2都有
                // iconColLefts[j].className = 'iconfont icon-col-left';
            }
        }
        // console.log(arr.length);
        for (var a = 0; a < arr.length; a++) {
            // console.log(a);
            iconColLefts[a].className = 'iconfont icon-col-left';
        }
    }



    var nicknames = document.getElementById('nickname');
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: function(res) {
            // console.log(res.nickname.nickname);
            nicknames.innerHTML = res.nickname.nickname;
        }
    })

    // 点击首页删除token
    var nav = document.querySelector('.nav');
    var li = nav.querySelectorAll('li');
    for (var i = 0; i < li.length; i++) {
        var a = li[i].querySelector('a');
        a.addEventListener('click', function(e) {
            // console.log(this);
            console.log(e.target);

            localStorage.removeItem('token');
            location.href = '../../html/admin/admin_login.html'
        })
    }



})