window.addEventListener('load', function() {
    var sidebarlist = [{
        link: "javascript:;",
        title: "打工人加油站2",
        content: [{
            title: "鱼皮编程导航11",
            links: "https://www.code-nav.cn/recommend"
        }, {
            title: "gitee",
            links: "https://gitee.com/"
        }, {
            title: "中文期刊服务平台",
            links: "https://qikan.cqvip.com/index.html"
        }, {
            title: "小康博客",
            links: "https://www.antmoe.com/"
        }, ]
    }, {
        link: "javascript:;",
        title: "工作相关",
        content: [{
            title: "鱼皮编程导航22",
            links: "https://www.code-nav.cn/recommend"
        }, {
            title: "gitee",
            links: "https://gitee.com/"
        }, {
            title: "中文期刊服务平台",
            links: "https://qikan.cqvip.com/index.html"
        }, {
            title: "软件下载",
            links: "https://mp.weixin.qq.com/s/dzRPYNBDNqAlVLTlime0fw"
        }, ]

    }, {
        link: "javascript:;",
        title: "影音娱乐",
        content: [{
            title: "B站",
            links: "https://www.bilibili.com/"
        }, {
            title: "gitee",
            links: "https://gitee.com/"
        }, {
            title: "中文期刊服务平台",
            links: "https://qikan.cqvip.com/index.html"
        }, {
            title: "",
            links: ""
        }, {
            title: "",
            links: ""
        }, {
            title: "",
            links: ""
        }, ]

    }, {
        link: "javascript:;",
        title: "在线工具",
        content: [{
            title: "鱼皮编程导航44",
            links: "https://www.code-nav.cn/recommend"
        }, {
            title: "gitee",
            links: "https://gitee.com/"
        }, {
            title: "中文期刊服务平台",
            links: "https://qikan.cqvip.com/index.html"
        }, ]

    }, {
        link: "javascript:;",
        title: "图书科研",
        content: [{
            title: "鱼皮编程导航55",
            links: "https://www.code-nav.cn/recommend"
        }, {
            title: "gitee",
            links: "https://gitee.com/"
        }, {
            title: "中文期刊服务平台",
            links: "https://qikan.cqvip.com/index.html"
        }, ]

    }, {
        link: "javascript:;",
        title: "考试认证",
        content: [{
            title: "职业资格和技能人才证书查询",
            links: "http://www.osta.org.cn/"
        }, {
            title: "中国人事考试网",
            links: "http://www.cpta.com.cn/index.html"
        }, {
            title: "台",
            links: "https://qikan.cqvip.com/index.html"
        }, {
            title: "台",
            links: "https://qikan.cqvip.com/index.html"
        }, {
            title: "台",
            links: "https://qikan.cqvip.com/index.html"
        }, {
            title: "台",
            links: "https://qikan.cqvip.com/index.html"
        }, ]

    }, {
        link: "javascript:;",
        title: "国家政府网站",
        content: [{
            title: "中华人民共和国政府网",
            links: "http://www.gov.cn/"
        }, {
            title: "国家政务服务平台",
            links: "http://gjzwfw.www.gov.cn/"
        }, {
            title: "中华人民共和国教育部",
            links: "http://www.moe.gov.cn/"
        }, {
            title: "教育部教育涉外监管信息网",
            links: "http://jsj.moe.gov.cn/"
        }, {
            title: "国家统计局",
            links: "http://www.stats.gov.cn/"
        }, {
            title: "交通安全综合服务平台",
            links: "https://ln.122.gov.cn/"
        }, {
            title: "交通安全综合服务平台",
            links: "https://ln.122.gov.cn/"
        }, {
            title: "交通安全综合服务平台",
            links: "https://ln.122.gov.cn/"
        }, ]
    }, {
        link: "javascript:;",
        title: "金融理财",
        content: [{
            title: "中国人民银行征信中心",
            links: "http://www.pbccrc.org.cn/"
        }, {
            title: "中国人民银行",
            links: "http://www.pbc.gov.cn/"
        }, {
            title: "天天基金",
            links: "http://fund.eastmoney.com/?spm=dh"
        }, {
            title: "东方财富",
            links: "https://www.eastmoney.com/"
        }, {
            title: "中国证券投资基金业协会",
            links: "https://www.amac.org.cn/"
        }, {
            title: "中国人民银行",
            links: "http://www.pbc.gov.cn/"
        }, ]

    }]

    var sidebarul = document.querySelector('.sidebarul');
    var linkDisplay = document.querySelector('.linkDisplay');
    for (var i = 0; i < sidebarlist.length; i++) {
        sidebarul.innerHTML += "<li><a href=" + sidebarlist[i].link + ">" + sidebarlist[i].title + "</a></li>";
        linkDisplay.innerHTML += "<div class='content'></div>";
    }
    var content = document.querySelectorAll('.content');
    for (var i = 0; i < sidebarlist.length; i++) {
        for (var j = 0; j < sidebarlist[i].content.length; j++) {
            content[i + 1].innerHTML += "<a href=" + sidebarlist[i].content[j].links + " target='__blank'>" + sidebarlist[i].content[j].title + "</a>";
        }
    }



    var usually = document.querySelector('.head').querySelectorAll('a'); //常用按钮
    var content = document.querySelectorAll('.content'); //显示区域
    var sidebar = document.querySelector('.sidebar').querySelectorAll('li'); //侧边栏选项卡
    // console.log(sidebar);
    // console.log(sidebar.length);
    // console.log(content.length);
    content[0].style.display = 'block'; //常用显示
    for (var i = 0; i < sidebar.length; i++) {
        sidebar[i].setAttribute('index', i) //侧边栏选项设置索引号
        sidebar[i].addEventListener('click', function() {
            var index = this.getAttribute('index');
            for (var j = 0; j < content.length; j++) {
                content[j].style.display = 'none';
            }
            content[index].style.display = 'block';
            // console.log(this);
        })
    }
    usually[0].onclick = function() {
        for (var j = 0; j < content.length; j++) {
            content[j].style.display = 'none';
        }
        content[0].style.display = 'block';
    }
})