window.addEventListener('load', function() {

    var article_title = document.querySelector('.article_title');
    var article_date = document.querySelector('.article_date');
    var article_body = document.querySelector('.article_body');


    //在article_details页面获取链接?号后面的参数，根据参数发起ajax请求
    var perimeters = window.location.search;
    perimeters = decodeURI(perimeters.substr(1).split('&')[0]);
    // console.log(perimeters);
    $.ajax({
        method: 'GET',
        url: `/api/article/details?${perimeters}`,
        success: function(res) {
            console.log(res);
            var titles = res.messages.title;
            var dates = res.messages.date;
            var contents = res.messages.content;
            article_title.innerHTML = titles;
            article_date.innerHTML = dates;
            article_body.innerHTML = contents;
        }
    })



})