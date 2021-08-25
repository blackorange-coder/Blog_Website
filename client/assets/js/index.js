window.addEventListener('load', function() {

    // var mbr = document.querySelector('.mbr');
    var mbr_son = document.querySelector('.mbr_son');
    var i = 0;
    var t = null;
    t = setTimeout(time, 100);

    function time() {
        clearTimeout(t);
        i = i + 3;
        if (i < 100) {
            mbr_son.style.left = '-' + i + '%';
        } else if (i > 100) {
            i = i - 100;
            mbr_son.style.left = '-' + i + '%';
        }
        t = setTimeout(time, 300);
    }

    var cent = document.querySelector(".sonl");
    //发起ajax请求
    $.ajax({
        method: 'GET',
        url: '/api/article/list',
        success: function(res) {
            var arr = res.messages;
            // console.log(arr);
            // for (var i = 0; i < arr.length; i++) {
            //     cent.innerHTML += `<div class='mbl'><h3><a href="./html/article/article_details.html?id=${i+1}" target='__blank'>${arr[i].title}</a></h3><p>${arr[i].date}</p><div class="mbl_last_p">${arr[i].content}</div></div>`;
            // }
            // 以下算法是的最新数据显示在最上面，主页显示5条最新文章
            for (var i = arr.length - 1; i >= arr.length - 5; i--) {
                // console.log(arr[i].Id);
                cent.innerHTML += `<div class='mbl'><h3><a href="./html/article/article_details.html?id=${arr[i].Id}" target='__blank'>${arr[i].title}</a></h3><p>${arr[i].date}</p><div class="mbl_last_p">${arr[i].content}</div></div>`;
            }
        }
    })


    var myskills = [{
        skill: "HTML/HTML5",
        level: "熟悉"
    }, {
        skill: "JavaScript",
        level: "熟悉"
    }, {
        skill: "Python",
        level: "熟悉"
    }, ]
    var myskill = document.querySelector(".sonr").querySelector(".myskill");
    for (var i = 0; i < myskills.length; i++) {
        myskill.innerHTML += "<div class='ad_focus'><h1>" + myskills[i].skill + "</h1><p>" + myskills[i].level + "</p></div>";
    }


    var ads = [{
        artical: "这是第一篇测试广告",
        links: "https://photo.tuchong.com/326286/f/4823942.jpg",
        content: "广告1"
    }, {
        artical: "这是第二篇测试广告",
        links: "https://tse4-mm.cn.bing.net/th/id/OIP-C.1riom_ZwHt-ZYENkNTxLhQHaEl?w=307&h=190&c=7&o=5&dpr=1.35&pid=1.7",
        content: "广告2"
    }, {
        artical: "这是第三篇测试广告",
        links: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f4ZRAWeL5PqhCbOi2c_hyAHaE8?w=270&h=180&c=7&o=5&dpr=1.35&pid=1.7",
        content: "广告3"
    }, ]
    var ad = document.querySelector(".sonr").querySelector(".ad");
    console.log(ad);
    for (var i = 0; i < ads.length; i++) {
        ad.innerHTML += "<div ><img src=" + ads[i].links + " alt=''></div>";
    }







})