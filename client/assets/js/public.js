window.addEventListener('load', function() {


    function initLeftNav() {
        var nav_item = document.querySelectorAll('.item');
        for (var i = 0; i < nav_item.length; i++) {
            var nav_item_a = nav_item[i].querySelector('a');
            if (nav_item_a.nextElementSibling !== null) {
                nav_item_a.nextElementSibling.style.display = 'none';
            }
        }
    }

    //移动端调用的点击事件
    function mobile() {
        nav_item_a.addEventListener('click', function() {

            var that = this.nextElementSibling; //ul
            if (that !== null && that.style.display === 'none') {
                initLeftNav();
                that.style.display = 'block';
            } else if (that !== null && that.style.display === 'block') {
                initLeftNav();
                that.style.display = 'none';
            }
        })

        //移动端处理
        var menu = document.querySelector('.menu');
        var nav = document.querySelector('.nav');
        var cover = document.querySelector('.cover'); //获取遮罩层

        nav.style.display = 'none';
        menu.addEventListener('click', function() {
            if (nav.style.display === 'none') {
                nav.style.display = 'block';
                cover.style.display = 'block';
            } else if (nav.style.display === 'block') {
                nav.style.display = 'none';
                cover.style.display = 'none';
            }
        })
        cover.addEventListener('click', function() {
            nav.style.display = 'none';
            cover.style.display = 'none';
        })
    }

    var nav_item = document.querySelectorAll('.item'); // nav 下的每一个 li
    for (var i = 0; i < nav_item.length; i++) {
        var nav_item_a = nav_item[i].querySelector('a'); // li 下的 a 标签
        if (nav_item_a.nextElementSibling !== null) {
            nav_item_a.nextElementSibling.style.display = 'none';
        }
        if (window.innerWidth < 500) {
            mobile();
        } else {
            // console.log(nav_item[i]);
            nav_item[i].addEventListener('mouseover', function() {
                // console.log(this); //所选中的item
                var a = this.querySelector('a'); //item下的a
                var that = a.nextElementSibling; //ul
                if (that !== null && that.style.display === 'none') {
                    that.style.display = 'block';
                } else if (that !== null && that.style.display === 'block') {
                    that.style.display = 'none';
                }
            })

            nav_item[i].addEventListener('mouseout', function() {
                // console.log(this); //所选中的item
                var a = this.querySelector('a'); //item下的a
                var that = a.nextElementSibling; //ul
                if (that !== null && that.style.display === 'none') {
                    that.style.display = 'block';
                } else if (that !== null && that.style.display === 'block') {
                    that.style.display = 'none';
                }
            })
        }

    }



    //---------下面括号不删----
})

//窗口大小改变，自动刷新页面的方法
// function rand() {
//     span = document.getElementById('spanspan');
//     i = Math.random() * 5;
//     span.innerHTML = i;
// }
// window.onresize = function() {
//     window.location.reload();
//     rand(); //窗口改变执行函数
// }
// rand(); //打开页面先进行函数执行





// var navSon = document.querySelector('.nav-son');
// var navSon2 = document.querySelector('.nav-son2');
// var haveSon = document.querySelector('.have-son');
// var haveSon2 = document.querySelector('.have-son2');

// haveSon.addEventListener('mouseover', function() {
//     navSon.style.opacity = '1';
//     navSon.style.visibility = 'visible';
//     // navSon.style.display = 'block';
//     navSon.style.transition = 'all 0.3s'
// })
// haveSon.addEventListener('mouseout', function() {
//     navSon.style.opacity = '0';
//     navSon.style.visibility = 'hidden';
//     navSon.style.transition = 'all 0.3s'
//         // navSon.style.display = 'none';
// })
// haveSon2.addEventListener('mouseover', function() {
//     navSon2.style.opacity = '1';
//     navSon2.style.visibility = 'visible';
//     // navSon.style.display = 'block';
//     navSon2.style.transition = 'all 0.3s'
// })
// haveSon2.addEventListener('mouseout', function() {
//     navSon2.style.opacity = '0';
//     navSon2.style.visibility = 'hidden';
//     navSon2.style.transition = 'all 0.3s'
//         // navSon.style.display = 'none';
// })

// console.log(window.scrollY);